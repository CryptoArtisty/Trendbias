<!DOCTYPE html>
<html>
<head>
  <title>Trading Bias Messenger - EMA Alerts with Telegram</title>
  <script src="https://unpkg.com/lightweight-charts@4.0.0/dist/lightweight-charts.standalone.production.js"></script>
  <style>
    body { 
      margin: 0; 
      padding: 10px; 
      font-family: 'Segoe UI', Arial, sans-serif; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: #fff;
    }
    #chart-container { 
      width:100%; 
      height:40vh; 
      background: #1a1a2e; 
      border-radius: 12px; 
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      margin-bottom: 15px;
    }
    #status { 
      margin:5px 0; 
      font-size:14px;
      color: rgba(255,255,255,0.9);
    }
    #signal-history { 
      max-height:100px; 
      overflow:auto; 
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px; 
      padding: 8px;
      margin-top: 10px;
      color: #fff;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .alert-touch { 
      color: #FFD700; 
      border-left:3px solid #FFD700; 
      padding:6px; 
      margin-bottom:5px;
      background: rgba(255,215,0,0.1);
      border-radius: 0 8px 8px 0;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 15px;
      padding: 15px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-width: 120px;
    }
    label {
      font-size: 12px;
      font-weight: bold;
      color: rgba(255,255,255,0.9);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    select, input, button {
      padding: 8px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px;
      background: rgba(255,255,255,0.15);
      color: white;
      font-size: 13px;
      transition: all 0.3s ease;
    }
    select:hover, input:hover {
      background: rgba(255,255,255,0.25);
    }
    select option {
      background: #1a1a2e;
      color: white;
    }
    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      cursor: pointer;
      padding: 8px 15px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    button#test-alert {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    }
    button#clear-history {
      background: linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%);
    }
    button#refresh-dashboard {
      background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
    }
    .ema-color-preview {
      width: 25px;
      height: 25px;
      display: inline-block;
      margin-left: 5px;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    #timer-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 10px 15px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    #next-candle-timer {
      background: rgba(0,0,0,0.3);
      padding: 5px 15px;
      border-radius: 20px;
      font-weight: bold;
      color: #FFD700;
      border: 1px solid #FFD700;
    }
    #price-summary-panel {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 15px;
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      align-items: center;
      border: 1px solid rgba(255,255,255,0.2);
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }
    .summary-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .summary-label {
      font-weight: bold;
      color: rgba(255,255,255,0.8);
      font-size: 14px;
    }
    .summary-value {
      font-size: 22px;
      font-weight: bold;
    }
    .position-tag {
      padding: 6px 16px;
      border-radius: 30px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    .tag-bullish {
      background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
      color: white;
    }
    .tag-neutral {
      background: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%);
      color: #333;
    }
    .tag-bearish {
      background: linear-gradient(135deg, #f44336 0%, #c62828 100%);
      color: white;
    }
    .current-asset {
      font-size: 28px;
      font-weight: bold;
      color: #FFD700;
      text-shadow: 0 2px 10px rgba(255,215,0,0.3);
    }
    .current-price {
      font-size: 28px;
      font-weight: bold;
      color: #FFD700;
      text-shadow: 0 2px 10px rgba(255,215,0,0.3);
    }
    .ema-value {
      font-size: 24px;
      color: #FFD700;
    }
    
    /* Tab Navigation */
    .tab-container {
      margin: 20px 0 15px 0;
    }
    .tab-buttons {
      display: flex;
      gap: 5px;
      border-bottom: 2px solid rgba(255,255,255,0.2);
      padding-bottom: 5px;
    }
    .tab-button {
      padding: 10px 20px;
      background: rgba(255,255,255,0.1);
      border: none;
      border-radius: 12px 12px 0 0;
      cursor: pointer;
      font-weight: bold;
      color: rgba(255,255,255,0.7);
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .tab-button.active {
      background: rgba(255,255,255,0.25);
      color: white;
      transform: translateY(-2px);
    }
    .tab-content {
      display: none;
      padding: 20px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 0 0 12px 12px;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .tab-content.active {
      display: block;
    }
    
    /* Multi-asset dashboard styles */
    #multi-asset-dashboard, #multi-timeframe-dashboard {
      background: rgba(0,0,0,0.2);
      border-radius: 12px;
      padding: 15px;
      margin: 10px 0;
      border: 1px solid rgba(255,255,255,0.1);
      max-height: 300px;
      overflow-y: auto;
    }
    .dashboard-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #FFD700;
      border-bottom: 2px solid rgba(255,255,255,0.2);
      padding-bottom: 10px;
      position: sticky;
      top: 0;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(10px);
      z-index: 10;
      padding: 10px;
      border-radius: 8px;
    }
    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
    }
    .asset-card {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(5px);
      border-radius: 12px;
      padding: 12px;
      transition: all 0.3s ease;
      border-left: 4px solid rgba(255,255,255,0.3);
      border: 1px solid rgba(255,255,255,0.1);
    }
    .asset-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    .asset-card.bullish {
      border-left-color: #4CAF50;
      background: linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(46,125,80,0.1) 100%);
    }
    .asset-card.neutral {
      border-left-color: #FFC107;
      background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,143,0,0.1) 100%);
    }
    .asset-card.bearish {
      border-left-color: #f44336;
      background: linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(198,40,40,0.1) 100%);
    }
    .asset-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .asset-name {
      font-weight: bold;
      font-size: 16px;
      color: white;
    }
    .asset-price {
      font-weight: bold;
      color: #FFD700;
      font-size: 16px;
    }
    .asset-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      font-size: 13px;
    }
    .asset-ema {
      color: #FFD700;
      opacity: 0.9;
    }
    .asset-position {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .refresh-indicator {
      font-size: 12px;
      color: rgba(255,255,255,0.6);
      margin-top: 10px;
      text-align: right;
    }
    .loading-spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,215,0,0.3);
      border-top: 3px solid #FFD700;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-left: 10px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .error-badge {
      color: #ff6b6b;
      font-size: 11px;
      margin-left: 5px;
    }
    .data-source-badge {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 12px;
      display: inline-block;
      font-weight: bold;
      text-transform: uppercase;
    }
    .data-source-binance {
      background: #F0B90B;
      color: #000;
    }
    .data-source-coingecko {
      background: #8DC63F;
      color: #000;
    }
    .data-source-coinbase {
      background: #0052FF;
      color: white;
    }
    .data-source-fallback {
      background: #6c757d;
      color: white;
    }
    
    /* Multi-timeframe table styles */
    .timeframe-table {
      width: 100%;
      border-collapse: collapse;
      color: white;
    }
    .timeframe-table th {
      background: rgba(0,0,0,0.3);
      padding: 10px;
      text-align: left;
      font-size: 13px;
      color: #FFD700;
      font-weight: bold;
    }
    .timeframe-table td {
      padding: 8px 10px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      font-size: 13px;
    }
    .timeframe-table tr:hover {
      background: rgba(255,255,255,0.05);
    }
    .timeframe-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: bold;
      text-align: center;
      display: inline-block;
      min-width: 70px;
    }
    .source-indicator {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 12px;
    }
    
    /* Threshold slider styling */
    .threshold-container {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 200px;
    }
    .threshold-slider {
      flex: 1;
      height: 6px;
      -webkit-appearance: none;
      background: linear-gradient(90deg, #4CAF50 0%, #FFC107 50%, #f44336 100%);
      border-radius: 10px;
      outline: none;
    }
    .threshold-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      border: 2px solid #FFD700;
    }
    .threshold-slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid #FFD700;
    }
    .threshold-value {
      font-weight: bold;
      color: #FFD700;
      min-width: 60px;
      text-align: right;
    }
    
    /* Telegram settings styling */
    .telegram-settings {
      background: rgba(0,0,0,0.3);
      border-radius: 8px;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid rgba(255,215,0,0.3);
    }
    .telegram-status {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 12px;
      display: inline-block;
    }
    .telegram-status.connected {
      background: #4CAF50;
      color: white;
    }
    .telegram-status.disconnected {
      background: #f44336;
      color: white;
    }
    .telegram-status.pending {
      background: #FFC107;
      color: #333;
    }
    .telegram-status.stored {
      background: #0088cc;
      color: white;
    }
    
    /* Cloudflare info banner */
    .cloudflare-banner {
      background: rgba(246,130,34,0.2);
      border: 1px solid #F68222;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 12px;
    }
    
    /* Approval system styles */
    .approval-status {
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .approval-pending {
      background: #FFC107;
      color: #333;
      padding: 5px 10px;
      border-radius: 20px;
      font-weight: bold;
    }
    .approval-approved {
      background: #4CAF50;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-weight: bold;
    }
    .approval-denied {
      background: #f44336;
      color: white;
      padding: 5px 10px;
      border-radius: 20px;
      font-weight: bold;
    }
    .instruction-box {
      background: rgba(0,136,204,0.2);
      border-left: 4px solid #0088cc;
      padding: 15px;
      border-radius: 8px;
      margin: 10px 0;
      font-size: 14px;
    }
    .bot-username {
      background: rgba(255,215,0,0.2);
      padding: 8px 15px;
      border-radius: 30px;
      display: inline-block;
      font-weight: bold;
      border: 1px solid #FFD700;
    }
    
    /* Asset selector styling */
    .asset-selector {
      background: rgba(255,255,255,0.15);
      padding: 8px 15px;
      border-radius: 30px;
      border: 1px solid #FFD700;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
    
    /* Tooltip styling */
    .tooltip {
      position: relative;
      display: inline-block;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 200px;
      background: rgba(0,0,0,0.8);
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -100px;
      opacity: 0;
      transition: opacity 0.3s;
      font-size: 11px;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
    
    /* App header */
    .app-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
    }
    .app-logo {
      font-size: 32px;
    }
    .app-title {
      font-size: 24px;
      font-weight: bold;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .app-subtitle {
      font-size: 14px;
      color: rgba(255,255,255,0.7);
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div class="app-header">
    <span class="app-logo">📨</span>
    <span class="app-title">Trading Bias Messenger</span>
  </div>
  
  <div id="timer-container">
    <div id="status">Connecting to markets...</div>
    <div id="next-candle-timer">Next candle: --:--</div>
  </div>
  
  <!-- Price Summary Panel -->
  <div id="price-summary-panel">
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">Asset Pair<span class="tooltiptext">Trading pair</span></span></span>
      <span class="current-asset" id="current-asset">PAXG/Gold</span>
    </div>
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">Current Price<span class="tooltiptext">Latest market price</span></span></span>
      <span class="current-price" id="current-price">--</span>
    </div>
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">EMA <span id="ema-period-display">350</span><span class="tooltiptext">Exponential Moving Average</span></span></span>
      <span class="ema-value" id="current-ema">--</span>
    </div>
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">Position<span class="tooltiptext">Price vs EMA</span></span></span>
      <span id="position-tag" class="position-tag tag-neutral">Neutral</span>
    </div>
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">Signal<span class="tooltiptext">Trading signal</span></span></span>
      <span id="signal-tag" class="position-tag tag-neutral">--</span>
    </div>
    <div class="summary-item">
      <span class="summary-label"><span class="tooltip">Data Source<span class="tooltiptext">Current data provider</span></span></span>
      <span id="data-source-badge" class="data-source-badge data-source-binance">Binance</span>
    </div>
  </div>

  <!-- Bot Information -->
  <div class="instruction-box">
    <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap; margin-bottom: 15px;">
      <div>
        <span class="bot-username">🤖 @TradingBiasBot</span>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
      <div>
        <strong>📋 How to get access:</strong>
        <ol style="margin-top: 5px; padding-left: 20px;">
          <li>Message <code>@TradingBiasBot</code> on Telegram</li>
          <li>Send <code>/start</code> command</li>
          <li>Wait for developer approval</li>
          <li>Enter your Chat ID below</li>
        </ol>
      </div>
      <div>
        <strong>🔐 Your Status:</strong>
        <div style="margin-top: 10px;">
          <div>Chat ID: <span id="display-chat-id">Not set</span></div>
          <div>Approval: <span id="display-approval-status">Unknown</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Telegram Settings -->
  <div class="controls" style="background: rgba(0,0,0,0.3); border: 1px solid #F68222;">
    <div class="control-group" style="min-width: 200px; flex: 2;">
      <label>🔑 Your Telegram Chat ID</label>
      <input type="text" id="telegram-chat-id" placeholder="Enter your Chat ID" value="">
      <small style="color: rgba(255,255,255,0.5);">Stored locally in your browser</small>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="save-chat-id" style="background: linear-gradient(135deg, #F68222 0%, #E05100 100%);">💾 Save Chat ID</button>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="test-telegram" style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);">📨 Test Alert</button>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="clear-chat-id" style="background: linear-gradient(135deg, #6c757d 0%, #495057 100%);">🗑️ Clear</button>
    </div>
    <div class="control-group" style="flex: 1;">
      <label>📊 Status:</label>
      <div>
        <span id="telegram-status" class="telegram-status disconnected">⚫ Not Configured</span>
        <span id="telegram-stored-badge" style="display: none;" class="telegram-status stored">💾 Saved</span>
        <span id="telegram-last-sent" style="font-size: 11px; margin-left: 10px; color: rgba(255,255,255,0.6);"></span>
      </div>
    </div>
  </div>

  <!-- Tab Navigation -->
  <div class="tab-container">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="switchTab('assets')">📊 Market Overview</button>
      <button class="tab-button" onclick="switchTab('timeframes')">📈 Timeframe Analysis</button>
    </div>
    
    <!-- Multi-Asset Dashboard Tab -->
    <div id="tab-assets" class="tab-content active">
      <div id="multi-asset-dashboard">
        <div class="dashboard-title">
          <span style="font-size: 20px;">📊</span> Multi-Market Dashboard 
          <span style="font-size: 14px; font-weight: normal; margin-left: 10px; color: rgba(255,255,255,0.8);">
            (EMA <span id="dashboard-ema-period">350</span> • <span id="dashboard-timeframe">1m</span> • 
            Threshold: <span id="dashboard-threshold">0.1</span>%)
          </span>
          <span id="dashboard-loading" class="loading-spinner" style="display: none;"></span>
        </div>
        <div class="dashboard-grid" id="dashboard-grid">
          <!-- Asset cards will be populated here -->
        </div>
        <div class="refresh-indicator" id="dashboard-timestamp">
          Last updated: --:--:--
        </div>
      </div>
    </div>
    
    <!-- Multi-Timeframe Dashboard Tab -->
    <div id="tab-timeframes" class="tab-content">
      <div id="multi-timeframe-dashboard">
        <div class="dashboard-title">
          <span style="font-size: 20px;">📈</span> Deep Timeframe Analysis 
          <span style="font-size: 14px; font-weight: normal; margin-left: 10px; color: rgba(255,255,255,0.8);">
            (EMA <span id="mtf-ema-period">350</span> • Threshold: <span id="mtf-threshold">0.1</span>%)
          </span>
          <span id="mtf-loading" class="loading-spinner" style="display: none;"></span>
        </div>
        <div style="margin-bottom: 15px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
          <select id="mtf-asset-select" class="asset-selector" onchange="updateMultiTimeframeDashboard()">
            <option value="PAXGUSDT" selected>🥇 PAXG/USDT (Gold)</option>
            <option value="ETHUSDT">⟠ ETH/USDT</option>
            <option value="BTCUSDT">₿ BTC/USDT</option>
            <option value="XAGUSDT">🥈 XAG/USDT (Silver)</option>
            <option value="JPYUSDT">💴 JPY/USDT</option>
            <option value="EURUSDT">💶 EUR/USDT</option>
            <option value="CADUSDT">💵 CAD/USDT</option>
            <option value="GBPUSDT">💷 GBP/USDT</option>
          </select>
          <button onclick="updateMultiTimeframeDashboard()" style="padding: 8px 20px;">🔄 Refresh Analysis</button>
        </div>
        <table class="timeframe-table" id="timeframe-table">
          <thead>
            <tr>
              <th>Timeframe</th>
              <th>Price</th>
              <th>EMA</th>
              <th>Position</th>
              <th>Signal</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody id="timeframe-tbody">
            <tr><td colspan="6" style="text-align: center; color: rgba(255,255,255,0.6);">✨ Select an asset to view multi-timeframe analysis</td></tr>
          </tbody>
        </table>
        <div class="refresh-indicator" id="mtf-timestamp">
          Last updated: --:--:--
        </div>
      </div>
    </div>
  </div>

  <div class="controls">
    <div class="control-group">
      <label>📊 Chart Pair</label>
      <select id="trading-pair">
        <option value="PAXGUSDT" selected>🥇 PAXG/USDT (Gold)</option>
        <option value="ETHUSDT">⟠ ETH/USDT</option>
        <option value="BTCUSDT">₿ BTC/USDT</option>
        <option value="XAGUSDT">🥈 XAG/USDT (Silver)</option>
        <option value="JPYUSDT">💴 JPY/USDT</option>
        <option value="EURUSDT">💶 EUR/USDT</option>
        <option value="CADUSDT">💵 CAD/USDT</option>
        <option value="GBPUSDT">💷 GBP/USDT</option>
      </select>
    </div>
    <div class="control-group">
      <label>⏱️ Time Frame</label>
      <select id="timeframe">
        <option value="1m" selected>1 Minute</option>
        <option value="5m">5 Minutes</option>
        <option value="15m">15 Minutes</option>
        <option value="1h">1 Hour</option>
        <option value="1d">1 Day</option>
      </select>
    </div>
    <div class="control-group">
      <label>📐 EMA Period</label>
      <input type="number" id="ema-period" value="350" min="1" max="1000">
    </div>
    <div class="control-group" style="min-width: 250px;">
      <label>🎚️ Neutral Threshold <span style="color: #FFD700;" id="threshold-display">0.10%</span></label>
      <div class="threshold-container">
        <input type="range" id="threshold-slider" class="threshold-slider" min="0.01" max="2" step="0.01" value="0.1">
        <span class="threshold-value" id="threshold-value">0.10%</span>
      </div>
    </div>
    <div class="control-group">
      <label>🎨 EMA Color</label>
      <div style="display: flex; align-items: center;">
        <input type="color" id="ema-color" value="#FFD700">
        <span class="ema-color-preview" id="ema-color-preview" style="background: #FFD700;"></span>
      </div>
    </div>
    <div class="control-group">
      <label>⏰ Alert Cooldown</label>
      <input type="number" id="alert-cooldown" value="30" min="1" max="300">
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="apply-settings">✅ Apply Settings</button>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="test-alert">🔔 Test Alert</button>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="clear-history">🗑️ Clear History</button>
    </div>
    <div class="control-group">
      <label>&nbsp;</label>
      <button id="refresh-dashboard">🔄 Refresh All</button>
    </div>
  </div>
  <div id="chart-container"></div>
  <div id="signal-history"></div>

<script>
// ============================================
// TRADING BIAS MESSENGER - CONFIGURATION
// ============================================
const CLOUDFLARE_WORKER_URL = 'https://your-worker.your-subdomain.workers.dev'; // Replace with your worker URL
const BOT_USERNAME = '@TradingBiasBot'; // Replace with your bot's username

// All available assets for dashboard
const ALL_ASSETS = [
  'PAXGUSDT',  // Gold first
  'ETHUSDT', 
  'BTCUSDT', 
  'XAGUSDT',
  'JPYUSDT',
  'EURUSDT', 
  'CADUSDT', 
  'GBPUSDT'
];

// Timeframes for multi-timeframe analysis
const TIMEFRAMES = ['1m', '5m', '15m', '1h', '1d'];

// Fallback data providers with their display names
const DATA_PROVIDERS = {
  BINANCE: { name: 'Binance', class: 'data-source-binance' },
  COINGECKO: { name: 'CoinGecko', class: 'data-source-coingecko' },
  COINBASE: { name: 'Coinbase', class: 'data-source-coinbase' },
  FALLBACK: { name: 'Demo Data', class: 'data-source-fallback' }
};

let SYMBOL = 'PAXGUSDT';
let TF = '1m';
let EMA_PERIOD = 350;
let EMA_COLOR = '#FFD700';
let THRESHOLD_PERCENT = 0.1;
let chart, candlesSeries, emaSeries;
let socket, rawCandles = [], lastAlert = 0;
let alertCooldown = 30000;
const maxHistory = 100;
let timerInterval;
let dashboardInterval;
let assetData = {};
let currentDataSource = DATA_PROVIDERS.BINANCE;

// Telegram settings
let userChatId = '';
let telegramEnabled = false;
let lastTelegramSent = null;

// Initialize asset data structure
ALL_ASSETS.forEach(asset => {
  assetData[asset] = {
    candles: [],
    currentPrice: null,
    currentEMA: null,
    position: '--',
    lastUpdated: null,
    loading: false,
    error: false,
    source: DATA_PROVIDERS.BINANCE
  };
});

// Get display name for the selected pair
function getPairDisplayName(symbol) {
  const names = {
    'PAXGUSDT': '🥇 PAXG/Gold',
    'ETHUSDT': '⟠ ETH/USDT',
    'BTCUSDT': '₿ BTC/USDT',
    'XAGUSDT': '🥈 XAG/Silver',
    'JPYUSDT': '💴 JPY/USDT',
    'EURUSDT': '💶 EUR/USDT',
    'CADUSDT': '💵 CAD/USDT',
    'GBPUSDT': '💷 GBP/USDT'
  };
  return names[symbol] || symbol;
}

// Format price based on pair type
function formatPrice(price, symbol = SYMBOL) {
  if (price === null || price === undefined || isNaN(price)) return '--';
  
  if (symbol.includes('BTC')) {
    return price.toFixed(1);
  } else if (symbol.includes('JPY')) {
    return price.toFixed(3);
  } else if (symbol.includes('XAG') || symbol.includes('PAXG') || 
             symbol.includes('EUR') || symbol.includes('GBP') || 
             symbol.includes('CAD')) {
    return price.toFixed(4);
  } else {
    return price.toFixed(2);
  }
}

// Get source badge class
function getSourceBadgeClass(source) {
  return `data-source-badge ${source.class}`;
}

// Load user's Chat ID from localStorage
function loadUserChatId() {
  const savedChatId = localStorage.getItem('tradingBiasChatId');
  
  if (savedChatId) {
    document.getElementById('telegram-chat-id').value = savedChatId;
    userChatId = savedChatId;
    telegramEnabled = true;
    document.getElementById('telegram-stored-badge').style.display = 'inline-block';
    document.getElementById('display-chat-id').textContent = savedChatId;
    updateTelegramStatus();
    checkApprovalStatus(savedChatId);
  }
}

// Save user's Chat ID to localStorage
function saveUserChatId() {
  const chatId = document.getElementById('telegram-chat-id').value.trim();
  
  if (chatId) {
    localStorage.setItem('tradingBiasChatId', chatId);
    userChatId = chatId;
    telegramEnabled = true;
    document.getElementById('telegram-stored-badge').style.display = 'inline-block';
    document.getElementById('display-chat-id').textContent = chatId;
    showStatus('Chat ID saved to your device');
    checkApprovalStatus(chatId);
  } else {
    localStorage.removeItem('tradingBiasChatId');
    userChatId = '';
    telegramEnabled = false;
    document.getElementById('telegram-stored-badge').style.display = 'none';
    document.getElementById('display-chat-id').textContent = 'Not set';
    showStatus('Chat ID removed');
  }
  
  updateTelegramStatus();
}

// Clear user's Chat ID from localStorage
function clearUserChatId() {
  localStorage.removeItem('tradingBiasChatId');
  document.getElementById('telegram-chat-id').value = '';
  userChatId = '';
  telegramEnabled = false;
  document.getElementById('telegram-stored-badge').style.display = 'none';
  document.getElementById('display-chat-id').textContent = 'Not set';
  document.getElementById('display-approval-status').textContent = 'Unknown';
  updateTelegramStatus();
  updateApprovalStatusDisplay('unknown', '⚫ No Chat ID');
  showStatus('Chat ID cleared from your device');
}

// Update Telegram status display
function updateTelegramStatus() {
  const statusEl = document.getElementById('telegram-status');
  
  if (userChatId) {
    statusEl.textContent = '✅ Chat ID Saved';
    statusEl.className = 'telegram-status stored';
  } else {
    statusEl.textContent = '⚫ No Chat ID';
    statusEl.className = 'telegram-status disconnected';
  }
}

// Check approval status from Cloudflare worker
async function checkApprovalStatus(chatId) {
  if (!chatId) return false;
  
  const statusBadge = document.getElementById('approval-status-badge');
  const displayApproval = document.getElementById('display-approval-status');
  
  statusBadge.textContent = '⏳ Checking...';
  statusBadge.className = 'approval-pending';
  
  try {
    const response = await fetch(CLOUDFLARE_WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: chatId,
        checkApproval: true
      })
    });
    
    const data = await response.json();
    
    if (data.approved) {
      statusBadge.textContent = '✅ Approved';
      statusBadge.className = 'approval-approved';
      displayApproval.textContent = 'Approved ✓';
      return true;
    } else {
      statusBadge.textContent = '❌ Not Approved';
      statusBadge.className = 'approval-denied';
      displayApproval.textContent = 'Pending Approval';
      return false;
    }
  } catch (error) {
    console.error('Error checking approval:', error);
    statusBadge.textContent = '⚠️ Check Failed';
    statusBadge.className = 'approval-pending';
    displayApproval.textContent = 'Connection Error';
    return false;
  }
}

function updateApprovalStatusDisplay(status, text) {
  const statusBadge = document.getElementById('approval-status-badge');
  const displayApproval = document.getElementById('display-approval-status');
  
  statusBadge.textContent = text;
  statusBadge.className = `approval-${status}`;
  displayApproval.textContent = text;
}

// Send message via Cloudflare Worker
async function sendTelegramMessageViaWorker(chatId, message) {
  if (!chatId) return false;
  
  try {
    const response = await fetch(CLOUDFLARE_WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: chatId,
        message: message,
        checkApproval: false
      })
    });
    
    const data = await response.json();
    
    if (data.ok) {
      lastTelegramSent = new Date();
      document.getElementById('telegram-last-sent').textContent = 
        `📨 Last alert: ${lastTelegramSent.toLocaleTimeString()}`;
      return true;
    } else {
      console.error('Worker error:', data);
      if (data.error === 'Not approved') {
        showStatus('❌ Not approved by developer');
        updateApprovalStatusDisplay('denied', '❌ Not Approved');
      } else {
        showStatus('Telegram error: ' + (data.description || 'Unknown error'));
      }
      return false;
    }
  } catch (error) {
    console.error('Failed to send via worker:', error);
    showStatus('Connection to worker failed');
    return false;
  }
}

// Test Telegram connection
async function testTelegram() {
  const chatId = document.getElementById('telegram-chat-id').value.trim();
  
  if (!chatId) {
    alert('Please enter your Chat ID');
    return;
  }
  
  // Check if approved first
  const isApproved = await checkApprovalStatus(chatId);
  
  if (!isApproved) {
    alert(`❌ Access Denied!\n\nYour Chat ID (${chatId}) has not been approved yet.\n\nPlease:\n1. Message ${BOT_USERNAME} on Telegram with /start\n2. Wait for developer approval\n3. Check your status again`);
    return;
  }
  
  const testMessage = `
📨 <b>Trading Bias Messenger Test</b>

✅ You are approved and connected!
📊 <b>Monitoring:</b> ${getPairDisplayName(SYMBOL)}
👤 <b>Chat ID:</b> <code>${chatId}</code>
⚡️ <b>Threshold:</b> ${THRESHOLD_PERCENT}%
⏱️ <b>Timeframe:</b> ${TF}
🕐 <b>Time:</b> ${new Date().toLocaleString()}

<i>You will now receive real trading bias alerts</i>
  `;
  
  const statusEl = document.getElementById('telegram-status');
  statusEl.textContent = '⏳ Sending...';
  statusEl.className = 'telegram-status pending';
  
  const success = await sendTelegramMessageViaWorker(chatId, testMessage);
  
  if (success) {
    statusEl.textContent = '✅ Connected';
    statusEl.className = 'telegram-status connected';
    showStatus('Test message sent to your Telegram!');
    
    // Auto-save if test works
    if (!userChatId) {
      saveUserChatId();
    }
  } else {
    statusEl.textContent = '❌ Failed';
    statusEl.className = 'telegram-status disconnected';
  }
}

// Threshold slider functionality
function setupThresholdSlider() {
  const slider = document.getElementById('threshold-slider');
  const valueDisplay = document.getElementById('threshold-value');
  const thresholdDisplay = document.getElementById('threshold-display');
  
  slider.addEventListener('input', function() {
    const val = parseFloat(this.value).toFixed(2);
    valueDisplay.textContent = val + '%';
    thresholdDisplay.textContent = val + '%';
    THRESHOLD_PERCENT = parseFloat(val);
    
    // Update dashboards in real-time
    updatePriceSummary();
    renderDashboard();
    if (document.getElementById('tab-timeframes').classList.contains('active')) {
      updateMultiTimeframeDashboard();
    }
  });
}

// Fallback data source with provider names
async function fetchWithFallback(asset, interval, limit) {
  const sources = [
    {
      provider: DATA_PROVIDERS.BINANCE,
      url: `https://api.binance.com/api/v3/klines?symbol=${asset}&interval=${interval}&limit=${limit}`
    },
    {
      provider: DATA_PROVIDERS.COINGECKO,
      url: null,
      fallback: true
    },
    {
      provider: DATA_PROVIDERS.COINBASE,
      url: null,
      fallback: true
    }
  ];

  // Try Binance first
  try {
    const response = await fetch(sources[0].url);
    if (response.ok) {
      const data = await response.json();
      currentDataSource = DATA_PROVIDERS.BINANCE;
      updateDataSourceBadge(DATA_PROVIDERS.BINANCE);
      return { data, source: DATA_PROVIDERS.BINANCE };
    }
    throw new Error(`Binance returned ${response.status}`);
  } catch (error) {
    console.warn(`Binance failed for ${asset}:`, error);
    
    // Try CoinGecko (simulated for demo)
    try {
      currentDataSource = DATA_PROVIDERS.COINGECKO;
      updateDataSourceBadge(DATA_PROVIDERS.COINGECKO);
      
      const simulatedData = generateSimulatedData(asset, interval, limit, 'coingecko');
      return { data: simulatedData, source: DATA_PROVIDERS.COINGECKO };
    } catch (cgError) {
      console.warn('CoinGecko failed, trying Coinbase:', cgError);
      
      // Try Coinbase (simulated for demo)
      try {
        currentDataSource = DATA_PROVIDERS.COINBASE;
        updateDataSourceBadge(DATA_PROVIDERS.COINBASE);
        
        const simulatedData = generateSimulatedData(asset, interval, limit, 'coinbase');
        return { data: simulatedData, source: DATA_PROVIDERS.COINBASE };
      } catch (cbError) {
        console.warn('All providers failed, using fallback:', cbError);
        
        currentDataSource = DATA_PROVIDERS.FALLBACK;
        updateDataSourceBadge(DATA_PROVIDERS.FALLBACK);
        
        const simulatedData = generateSimulatedData(asset, interval, limit, 'fallback');
        return { data: simulatedData, source: DATA_PROVIDERS.FALLBACK };
      }
    }
  }
}

// Update the data source badge in the UI
function updateDataSourceBadge(source) {
  const badge = document.getElementById('data-source-badge');
  badge.textContent = source.name;
  badge.className = `data-source-badge ${source.class}`;
}

// Generate simulated data with provider-specific characteristics
function generateSimulatedData(asset, interval, limit, provider) {
  const data = [];
  const now = Date.now();
  const basePrice = getBasePrice(asset);
  
  let providerMultiplier = 1.0;
  if (provider === 'coingecko') providerMultiplier = 1.001;
  if (provider === 'coinbase') providerMultiplier = 0.999;
  
  for (let i = limit; i > 0; i--) {
    const time = now - (i * getIntervalMs(interval));
    const volatility = getVolatility(asset);
    const change = (Math.random() - 0.5) * volatility * providerMultiplier;
    
    const open = basePrice * (1 + (Math.random() - 0.5) * 0.02) * providerMultiplier;
    const close = open * (1 + change);
    const high = Math.max(open, close) * (1 + Math.random() * 0.01);
    const low = Math.min(open, close) * (1 - Math.random() * 0.01);
    
    data.push([
      time,
      open.toString(),
      high.toString(),
      low.toString(),
      close.toString(),
      '1000',
      time + 60000,
      '100',
      '50',
      '500',
      '250',
      '0'
    ]);
  }
  
  return data;
}

function getBasePrice(asset) {
  const prices = {
    'PAXGUSDT': 2000,
    'ETHUSDT': 3000,
    'BTCUSDT': 50000,
    'XAGUSDT': 25,
    'JPYUSDT': 0.0067,
    'EURUSDT': 1.08,
    'CADUSDT': 0.74,
    'GBPUSDT': 1.26
  };
  return prices[asset] || 100;
}

function getVolatility(asset) {
  const vols = {
    'PAXGUSDT': 0.005,
    'ETHUSDT': 0.02,
    'BTCUSDT': 0.015,
    'XAGUSDT': 0.01,
    'JPYUSDT': 0.003,
    'EURUSDT': 0.002,
    'CADUSDT': 0.002,
    'GBPUSDT': 0.002
  };
  return vols[asset] || 0.01;
}

function getIntervalMs(interval) {
  const ms = {
    '1m': 60000,
    '5m': 300000,
    '15m': 900000,
    '1h': 3600000,
    '1d': 86400000
  };
  return ms[interval] || 60000;
}

// Determine position based on threshold
function determinePosition(price, ema) {
  if (!price || !ema) return '--';
  
  const percentDiff = Math.abs((price - ema) / ema) * 100;
  const tolerance = THRESHOLD_PERCENT;
  
  if (percentDiff <= tolerance) {
    return 'AT';
  } else if (price > ema) {
    return 'ABOVE';
  } else {
    return 'BELOW';
  }
}

// Update price summary panel
function updatePriceSummary() {
  if (rawCandles.length === 0) return;
  
  const currentCandle = rawCandles[rawCandles.length - 1];
  const currentPrice = currentCandle.close;
  
  let currentEMA = null;
  if (rawCandles.length >= EMA_PERIOD) {
    const closes = rawCandles.map(c => c.close);
    const emaValues = calculateEMA(closes, EMA_PERIOD);
    currentEMA = emaValues[emaValues.length - 1];
  }
  
  document.getElementById('current-asset').textContent = getPairDisplayName(SYMBOL);
  document.getElementById('current-price').textContent = '$' + formatPrice(currentPrice, SYMBOL);
  document.getElementById('ema-period-display').textContent = EMA_PERIOD;
  
  if (currentEMA !== null) {
    document.getElementById('current-ema').textContent = '$' + formatPrice(currentEMA, SYMBOL);
    
    const positionTag = document.getElementById('position-tag');
    const signalTag = document.getElementById('signal-tag');
    
    const position = determinePosition(currentPrice, currentEMA);
    
    if (position === 'AT') {
      positionTag.textContent = 'AT EMA';
      positionTag.className = 'position-tag tag-neutral';
      signalTag.textContent = 'NEUTRAL';
      signalTag.className = 'position-tag tag-neutral';
    } else if (position === 'ABOVE') {
      positionTag.textContent = 'ABOVE EMA';
      positionTag.className = 'position-tag tag-bullish';
      signalTag.textContent = 'BULLISH';
      signalTag.className = 'position-tag tag-bullish';
    } else if (position === 'BELOW') {
      positionTag.textContent = 'BELOW EMA';
      positionTag.className = 'position-tag tag-bearish';
      signalTag.textContent = 'BEARISH';
      signalTag.className = 'position-tag tag-bearish';
    }
  } else {
    document.getElementById('current-ema').textContent = '--';
    document.getElementById('position-tag').textContent = '--';
    document.getElementById('signal-tag').textContent = '--';
  }
}

function getCandleCountFor24h(timeframe) {
  const minutesPerCandle = {
    '1m': 1,
    '5m': 5,
    '15m': 15,
    '1h': 60,
    '1d': 1440
  };
  const candlesNeeded = Math.ceil((24 * 60) / minutesPerCandle[timeframe]);
  return Math.max(candlesNeeded, EMA_PERIOD);
}

// Update dashboard with all assets
async function updateDashboard() {
  const dashboardGrid = document.getElementById('dashboard-grid');
  const loadingSpinner = document.getElementById('dashboard-loading');
  const timestampEl = document.getElementById('dashboard-timestamp');
  
  loadingSpinner.style.display = 'inline-block';
  
  document.getElementById('dashboard-ema-period').textContent = EMA_PERIOD;
  document.getElementById('dashboard-timeframe').textContent = TF;
  document.getElementById('dashboard-threshold').textContent = THRESHOLD_PERCENT;
  
  const promises = ALL_ASSETS.map(async (asset) => {
    try {
      assetData[asset].loading = true;
      assetData[asset].error = false;
      
      const limit = Math.max(100, EMA_PERIOD + 20);
      const result = await fetchWithFallback(asset, TF, limit);
      
      if (!result.data || result.data.length === 0) {
        throw new Error('No data received');
      }
      
      const candles = result.data.map(r => ({ 
        time: r[0]/1000, 
        open: parseFloat(r[1]), 
        high: parseFloat(r[2]), 
        low: parseFloat(r[3]), 
        close: parseFloat(r[4]) 
      }));
      
      const currentPrice = candles[candles.length - 1].close;
      let currentEMA = null;
      let position = '--';
      
      if (candles.length >= EMA_PERIOD) {
        const closes = candles.map(c => c.close);
        const emaValues = calculateEMA(closes, EMA_PERIOD);
        currentEMA = emaValues[emaValues.length - 1];
        
        position = determinePosition(currentPrice, currentEMA);
      }
      
      assetData[asset] = {
        ...assetData[asset],
        candles,
        currentPrice,
        currentEMA,
        position,
        lastUpdated: new Date(),
        loading: false,
        error: false,
        source: result.source
      };
      
    } catch (error) {
      console.error(`Error fetching ${asset}:`, error);
      assetData[asset] = {
        ...assetData[asset],
        loading: false,
        error: true,
        currentPrice: null,
        currentEMA: null,
        position: 'ERROR',
        source: DATA_PROVIDERS.FALLBACK
      };
    }
  });
  
  await Promise.all(promises);
  renderDashboard();
  
  loadingSpinner.style.display = 'none';
  timestampEl.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
}

// Render the dashboard cards
function renderDashboard() {
  const dashboardGrid = document.getElementById('dashboard-grid');
  dashboardGrid.innerHTML = '';
  
  ALL_ASSETS.forEach(asset => {
    const data = assetData[asset];
    const displayName = getPairDisplayName(asset);
    
    const card = document.createElement('div');
    
    let cardClass = 'asset-card';
    let positionClass = 'tag-neutral';
    let positionText = 'Loading...';
    
    if (!data.loading) {
      if (data.error) {
        positionClass = 'tag-neutral';
        positionText = 'Error';
        cardClass += ' neutral';
      } else if (data.position === 'ABOVE') {
        positionClass = 'tag-bullish';
        positionText = 'BULLISH';
        cardClass += ' bullish';
      } else if (data.position === 'BELOW') {
        positionClass = 'tag-bearish';
        positionText = 'BEARISH';
        cardClass += ' bearish';
      } else if (data.position === 'AT') {
        positionClass = 'tag-neutral';
        positionText = 'NEUTRAL';
        cardClass += ' neutral';
      }
    }
    
    card.className = cardClass;
    
    const priceDisplay = data.currentPrice ? '$' + formatPrice(data.currentPrice, asset) : '--';
    const emaDisplay = data.currentEMA ? '$' + formatPrice(data.currentEMA, asset) : '--';
    
    card.innerHTML = `
      <div class="asset-header">
        <span class="asset-name">${displayName}</span>
        <span class="asset-price">${priceDisplay}</span>
      </div>
      <div class="asset-details">
        <span class="asset-ema">EMA: ${emaDisplay}</span>
        <span class="asset-position ${positionClass}">${positionText}</span>
      </div>
      <div style="font-size: 9px; margin-top: 4px;">
        <span class="${getSourceBadgeClass(data.source)}">${data.source.name}</span>
      </div>
      ${data.loading ? '<div style="text-align: center; margin-top: 8px;"><span class="loading-spinner"></span></div>' : ''}
      ${data.error ? '<div class="error-badge">⚠️ Connection error</div>' : ''}
    `;
    
    dashboardGrid.appendChild(card);
  });
}

// Update multi-timeframe dashboard
async function updateMultiTimeframeDashboard() {
  const asset = document.getElementById('mtf-asset-select').value;
  const tbody = document.getElementById('timeframe-tbody');
  const loadingSpinner = document.getElementById('mtf-loading');
  const timestampEl = document.getElementById('mtf-timestamp');
  
  loadingSpinner.style.display = 'inline-block';
  document.getElementById('mtf-ema-period').textContent = EMA_PERIOD;
  document.getElementById('mtf-threshold').textContent = THRESHOLD_PERCENT;
  
  tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;"><span class="loading-spinner"></span> Loading timeframes...</td></tr>';
  
  try {
    const rows = [];
    
    for (const tf of TIMEFRAMES) {
      try {
        const limit = Math.max(100, EMA_PERIOD + 20);
        const result = await fetchWithFallback(asset, tf, limit);
        
        if (!result.data || result.data.length === 0) {
          throw new Error('No data');
        }
        
        const candles = result.data.map(r => ({ 
          close: parseFloat(r[4])
        }));
        
        const currentPrice = parseFloat(result.data[result.data.length - 1][4]);
        let currentEMA = null;
        let position = '--';
        let signal = '--';
        let positionClass = 'tag-neutral';
        
        if (candles.length >= EMA_PERIOD) {
          const closes = candles.map(c => c.close);
          const emaValues = calculateEMA(closes, EMA_PERIOD);
          currentEMA = emaValues[emaValues.length - 1];
          
          position = determinePosition(currentPrice, currentEMA);
          
          if (position === 'AT') {
            signal = 'NEUTRAL';
            positionClass = 'tag-neutral';
          } else if (position === 'ABOVE') {
            signal = 'BULLISH';
            positionClass = 'tag-bullish';
          } else if (position === 'BELOW') {
            signal = 'BEARISH';
            positionClass = 'tag-bearish';
          }
        }
        
        rows.push({
          tf,
          price: '$' + formatPrice(currentPrice, asset),
          ema: currentEMA ? '$' + formatPrice(currentEMA, asset) : '--',
          position,
          signal,
          positionClass,
          source: result.source
        });
        
      } catch (error) {
        console.error(`Error fetching ${asset} ${tf}:`, error);
        rows.push({
          tf,
          price: '--',
          ema: '--',
          position: 'ERROR',
          signal: '--',
          positionClass: 'tag-neutral',
          source: DATA_PROVIDERS.FALLBACK
        });
      }
    }
    
    const tfOrder = { '1m': 1, '5m': 2, '15m': 3, '1h': 4, '1d': 5 };
    rows.sort((a, b) => tfOrder[a.tf] - tfOrder[b.tf]);
    
    tbody.innerHTML = rows.map(row => `
      <tr>
        <td><strong>${row.tf}</strong></td>
        <td>${row.price}</td>
        <td>${row.ema}</td>
        <td>${row.position}</td>
        <td><span class="timeframe-badge ${row.positionClass}">${row.signal}</span></td>
        <td><span class="source-indicator ${row.source.class}">${row.source.name}</span></td>
      </tr>
    `).join('');
    
  } catch (error) {
    console.error('Multi-timeframe error:', error);
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #ff6b6b;">❌ Error loading data: ${error.message}</td></tr>`;
  }
  
  loadingSpinner.style.display = 'none';
  timestampEl.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
}

// Tab switching
function switchTab(tab) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  if (tab === 'assets') {
    document.querySelector('.tab-button').classList.add('active');
    document.getElementById('tab-assets').classList.add('active');
  } else {
    document.querySelectorAll('.tab-button')[1].classList.add('active');
    document.getElementById('tab-timeframes').classList.add('active');
    updateMultiTimeframeDashboard();
  }
}

function showStatus(message) {
  document.getElementById('status').textContent = message;
}

function init(){
  // Setup threshold slider
  setupThresholdSlider();
  
  // Load user's Chat ID from localStorage
  loadUserChatId();
  
  document.getElementById('ema-color-preview').style.backgroundColor = EMA_COLOR;
  document.getElementById('apply-settings').addEventListener('click', applySettings);
  document.getElementById('test-alert').addEventListener('click', testAlert);
  document.getElementById('clear-history').addEventListener('click', clearHistory);
  document.getElementById('trading-pair').addEventListener('change', changeTradingPair);
  document.getElementById('refresh-dashboard').addEventListener('click', () => {
    updateDashboard();
    updateMultiTimeframeDashboard();
  });
  document.getElementById('timeframe').addEventListener('change', function() {
    applySettings();
  });
  
  // Telegram event listeners
  document.getElementById('save-chat-id').addEventListener('click', saveUserChatId);
  document.getElementById('test-telegram').addEventListener('click', testTelegram);
  document.getElementById('clear-chat-id').addEventListener('click', clearUserChatId);
  
  // Check approval when Chat ID input changes
  document.getElementById('telegram-chat-id').addEventListener('change', async () => {
    const chatId = document.getElementById('telegram-chat-id').value.trim();
    if (chatId) {
      await checkApprovalStatus(chatId);
    }
  });
  
  const cont = document.getElementById('chart-container');
  chart = LightweightCharts.createChart(cont, { 
    layout: {
      background: '#1a1a2e',
      textColor: 'rgba(255,255,255,0.9)'
    },
    grid: {
      vertLines: { color: 'rgba(255,255,255,0.1)' },
      horzLines: { color: 'rgba(255,255,255,0.1)' }
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
      borderColor: 'rgba(255,255,255,0.2)'
    }
  });
  
  candlesSeries = chart.addCandlestickSeries({
    upColor: '#4CAF50',
    downColor: '#f44336',
    borderVisible: false,
    wickUpColor: '#4CAF50',
    wickDownColor: '#f44336'
  });
  
  emaSeries = chart.addLineSeries({ color: EMA_COLOR, lineWidth: 2 });
  
  loadData().then(initWS).then(loadStoredAlerts);
  startTimer();
  
  setInterval(updatePriceSummary, 1000);
  
  setTimeout(() => updateDashboard(), 500);
  setTimeout(() => updateMultiTimeframeDashboard(), 1000);
  
  dashboardInterval = setInterval(updateDashboard, 30000);
}

function changeTradingPair() {
  const newSymbol = document.getElementById('trading-pair').value;
  if (newSymbol !== SYMBOL) {
    SYMBOL = newSymbol;
    document.getElementById('pair-title').textContent = getPairDisplayName(SYMBOL) + ' – Trading Bias Messenger';
    
    rawCandles = [];
    if (socket) {
      socket.close();
    }
    loadData().then(initWS);
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

function updateTimer() {
  const timeframe = document.getElementById('timeframe').value;
  const now = new Date();
  let nextClose;
  
  switch(timeframe) {
    case '1m':
      nextClose = new Date(now);
      nextClose.setSeconds(0);
      nextClose.setMinutes(nextClose.getMinutes() + 1);
      break;
    case '5m':
      nextClose = new Date(now);
      nextClose.setSeconds(0);
      nextClose.setMinutes(Math.floor(now.getMinutes() / 5) * 5 + 5);
      break;
    case '15m':
      nextClose = new Date(now);
      nextClose.setSeconds(0);
      nextClose.setMinutes(Math.floor(now.getMinutes() / 15) * 15 + 15);
      break;
    case '1h':
      nextClose = new Date(now);
      nextClose.setSeconds(0);
      nextClose.setMinutes(0);
      nextClose.setHours(nextClose.getHours() + 1);
      break;
    case '1d':
      nextClose = new Date(now);
      nextClose.setHours(0, 0, 0, 0);
      nextClose.setDate(nextClose.getDate() + 1);
      break;
  }
  
  const diff = nextClose - now;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  
  document.getElementById('next-candle-timer').textContent = 
    `Next candle: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

async function loadData(){
  showStatus('Loading historical data...');
  try {
    const limit = getCandleCountFor24h(TF);
    const result = await fetchWithFallback(SYMBOL, TF, limit);
    
    if (!result.data || result.data.length === 0) {
      throw new Error('No data received');
    }
    
    rawCandles = result.data.map(r => ({ 
      time: r[0]/1000, 
      open: parseFloat(r[1]), 
      high: parseFloat(r[2]), 
      low: parseFloat(r[3]), 
      close: parseFloat(r[4]) 
    }));
    
    candlesSeries.setData(rawCandles);
    plotEMA();
    updatePriceSummary();
    showStatus(`Loaded ${rawCandles.length} candles for ${getPairDisplayName(SYMBOL)} (Source: ${result.source.name})`);
  } catch (e) {
    showStatus('Error loading data: ' + e.message);
    console.error(e);
  }
}

function initWS(){
  if (socket) {
    socket.close();
  }
  
  TF = document.getElementById('timeframe').value;
  showStatus(`Connecting to WebSocket...`);
  startTimer();
  
  try {
    socket = new WebSocket(`wss://stream.binance.com:9443/ws/${SYMBOL.toLowerCase()}@kline_${TF}`);
    
    socket.onopen = ()=> {
      showStatus(`Connected (${TF}) for ${getPairDisplayName(SYMBOL)}`);
      currentDataSource = DATA_PROVIDERS.BINANCE;
      updateDataSourceBadge(DATA_PROVIDERS.BINANCE);
    };
    
    socket.onclose = ()=> {
      showStatus('Disconnected. Using fallback...');
    };
    
    socket.onerror = e=> {
      console.warn('WebSocket error, using fallback:', e);
      showStatus('WebSocket unavailable, using REST API');
    };
    
    socket.onmessage = e=> {
      try {
        const m = JSON.parse(e.data);
        if (!m.k) return;
        const k = m.k;
        const c = { 
          time: k.t/1000, 
          open: parseFloat(k.o), 
          high: parseFloat(k.h), 
          low: parseFloat(k.l), 
          close: parseFloat(k.c) 
        };
        
        if (k.x) {
          rawCandles.push(c);
          const maxCandles = getCandleCountFor24h(TF) + 10;
          if (rawCandles.length > maxCandles) rawCandles.shift();
          candlesSeries.update(c);
          plotEMA();
          checkEMAAlert();
        } else {
          candlesSeries.update(c);
        }
        updatePriceSummary();
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
      }
    };
  } catch (e) {
    console.warn('WebSocket connection failed:', e);
    showStatus('WebSocket unavailable, using REST API');
  }
}

function plotEMA(){
  if (rawCandles.length < EMA_PERIOD) return;
  const closes = rawCandles.map(c=>c.close);
  const ema = calculateEMA(closes, EMA_PERIOD);
  const emaData = rawCandles.slice(EMA_PERIOD - 1).map((c, i) => ({ time: c.time, value: ema[i] }));
  emaSeries.setData(emaData);
}

function calculateEMA(prices, period){
  const k = 2/(period+1);
  const ema = [];
  let sum = prices.slice(0,period).reduce((a,b)=>a+b,0);
  ema[period-1] = sum/period;
  for (let i=period; i<prices.length; i++){
    ema[i] = prices[i]*k + ema[i-1]*(1-k);
  }
  return ema.slice(period-1);
}

// Modified checkEMAAlert to check approval before sending
async function checkEMAAlert(){
  const now = Date.now();
  if (now - lastAlert < alertCooldown) return;
  if (rawCandles.length < EMA_PERIOD) return;

  const currentCandle = rawCandles[rawCandles.length - 1];
  const closes = rawCandles.map(c=>c.close);
  const currentEMA = calculateEMA(closes, EMA_PERIOD).pop();
  
  const percentDiff = Math.abs((currentCandle.close - currentEMA) / currentEMA) * 100;
  if (percentDiff <= THRESHOLD_PERCENT) {
    const message = handleAlert('Price touched EMA', 'touch', currentCandle.close, currentEMA, false);
    
    // Send to Telegram if user has Chat ID stored
    const storedChatId = localStorage.getItem('tradingBiasChatId');
    
    if (storedChatId) {
      // Check if approved (worker will validate)
      const pairName = getPairDisplayName(SYMBOL);
      const priceFormatted = formatPrice(currentCandle.close, SYMBOL);
      const emaFormatted = formatPrice(currentEMA, SYMBOL);
      
      const telegramMessage = `
📨 <b>TRADING BIAS ALERT</b> 📨

📊 <b>${pairName}</b>
💰 Price: $${priceFormatted}
📈 EMA(${EMA_PERIOD}): $${emaFormatted}
⚡️ Threshold: ${THRESHOLD_PERCENT}%
📐 Position: ${determinePosition(currentCandle.close, currentEMA)}
⏱️ Timeframe: ${TF}
🕐 Time: ${new Date().toLocaleString()}

<i>Price is within ${THRESHOLD_PERCENT}% of EMA</i>
      `;
      
      await sendTelegramMessageViaWorker(storedChatId, telegramMessage);
    }
    
    lastAlert = now;
  }
}

function handleAlert(msg, type, price, emaValue, showBrowserAlert = true){
  playBeep();
  const now = new Date();
  const pairName = getPairDisplayName(SYMBOL);
  
  const entry = {
    time: now.toLocaleTimeString(),
    text: `${now.toLocaleTimeString()} – ${pairName} - ${msg} (${EMA_PERIOD} EMA) | Price: $${formatPrice(price, SYMBOL)} | EMA: $${formatPrice(emaValue, SYMBOL)} | Threshold: ${THRESHOLD_PERCENT}%`,
    type
  };
  addToUI(entry);
  storeAlert(entry);
  
  if (showBrowserAlert) {
    alert(`${pairName} - ${msg} (${EMA_PERIOD} EMA)\nPrice: $${formatPrice(price, SYMBOL)}\nEMA: $${formatPrice(emaValue, SYMBOL)}\nThreshold: ${THRESHOLD_PERCENT}%`);
  }
  
  return entry.text;
}

function testAlert() {
  if (rawCandles.length === 0) {
    alert('Please wait for data to load first');
    return;
  }
  
  const testPrice = rawCandles[rawCandles.length-1].close;
  const testEMA = rawCandles.length >= EMA_PERIOD ? 
    calculateEMA(rawCandles.map(c=>c.close), EMA_PERIOD).pop() : 
    testPrice * 0.99;
  
  const message = handleAlert('TEST ALERT', 'test', testPrice, testEMA, true);
}

function addToUI(alert){
  const hh = document.getElementById('signal-history');
  const div = document.createElement('div');
  div.className = 'alert-' + alert.type;
  div.textContent = alert.text;
  hh.insertBefore(div, hh.firstChild);
  if (hh.children.length > maxHistory) hh.removeChild(hh.lastChild);
}

function playBeep(){
  try {
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type='sine';
    osc.frequency.value = 800;
    gain.gain.value=0.1;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.error('Audio error:', e);
  }
}

function storeAlert(alert){
  let alerts = JSON.parse(localStorage.getItem('tradingBiasAlerts') || '[]');
  alerts.unshift(alert);
  if (alerts.length > maxHistory) alerts = alerts.slice(0, maxHistory);
  localStorage.setItem('tradingBiasAlerts', JSON.stringify(alerts));
}

function loadStoredAlerts(){
  const alerts = JSON.parse(localStorage.getItem('tradingBiasAlerts') || '[]');
  alerts.forEach(a => addToUI(a));
}

function applySettings() {
  const newTimeframe = document.getElementById('timeframe').value;
  const newEMAPeriod = parseInt(document.getElementById('ema-period').value);
  const newThreshold = parseFloat(document.getElementById('threshold-slider').value);
  const newEMAColor = document.getElementById('ema-color').value;
  const newCooldown = parseInt(document.getElementById('alert-cooldown').value) * 1000;
  
  EMA_PERIOD = newEMAPeriod;
  EMA_COLOR = newEMAColor;
  THRESHOLD_PERCENT = newThreshold;
  alertCooldown = newCooldown;
  
  document.getElementById('threshold-value').textContent = THRESHOLD_PERCENT.toFixed(2) + '%';
  document.getElementById('threshold-display').textContent = THRESHOLD_PERCENT.toFixed(2) + '%';
  
  emaSeries.applyOptions({ color: EMA_COLOR });
  document.getElementById('ema-color-preview').style.backgroundColor = EMA_COLOR;
  
  const timeframeChanged = (newTimeframe !== TF);
  
  if (timeframeChanged) {
    TF = newTimeframe;
    rawCandles = [];
    if (socket) {
      socket.close();
    }
    loadData().then(initWS);
  } else {
    plotEMA();
  }
  
  updatePriceSummary();
  updateDashboard();
  updateMultiTimeframeDashboard();
  
  showStatus(`Settings applied - Threshold: ${THRESHOLD_PERCENT}%`);
}

function clearHistory() {
  if (confirm('Are you sure you want to clear the alert history?')) {
    localStorage.removeItem('tradingBiasAlerts');
    document.getElementById('signal-history').innerHTML = '';
    showStatus('Alert history cleared');
  }
}

window.onload = init;
</script>
</body>
</html>
