export default {
  async fetch(request, env) {
    const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
    const DEVELOPER_CHAT_ID = env.DEVELOPER_CHAT_ID;

    if (request.method !== 'POST') return new Response('OK');

    try {
      const update = await request.json();
      
      if (update.message && update.message.text) {
        const chatId = update.message.chat.id;
        const username = update.message.from.username || 'No username';
        const firstName = update.message.from.first_name || 'Unknown';
        const text = update.message.text;
        
        if (text === '/start') {
          const isApproved = await env.APPROVED_USERS.get(chatId.toString());
          
          if (isApproved === 'approved') {
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, chatId, 
              `✅ Welcome back! You're already approved.`);
          } else {
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, chatId, 
              `👋 Hello ${firstName}!\n\nYour request has been sent to the developer.`);
            
            await env.APPROVED_USERS.put(chatId.toString(), 'pending');
            
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, DEVELOPER_CHAT_ID,
              `🔔 New User: ${firstName} (@${username})\nChat ID: <code>${chatId}</code>\n\nApprove: /approve ${chatId}`);
          }
        }
        
        else if (text.startsWith('/approve ') && chatId.toString() === DEVELOPER_CHAT_ID) {
          const targetChatId = text.split(' ')[1];
          if (targetChatId) {
            await env.APPROVED_USERS.put(targetChatId, 'approved');
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, parseInt(targetChatId),
              `✅ Approved! You can now use Trading Bias Messenger.`);
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, DEVELOPER_CHAT_ID,
              `✅ User ${targetChatId} approved.`);
          }
        }
      }
      return new Response('OK');
    } catch (error) {
      console.error(error);
      return new Response('OK');
    }
  }
};

async function sendTelegramMessage(botToken, chatId, text) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text, parse_mode: 'HTML' })
  });
}
