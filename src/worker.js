export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const { chatId, message, checkApproval } = await request.json();
      const TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
      
      if (checkApproval) {
        const isApproved = await env.APPROVED_USERS.get(chatId);
        return new Response(JSON.stringify({ ok: true, approved: isApproved === 'approved' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      const isApproved = await env.APPROVED_USERS.get(chatId);
      if (isApproved !== 'approved') {
        return new Response(JSON.stringify({ ok: false, error: 'Not approved' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
      });

      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
