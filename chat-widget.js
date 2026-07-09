(function () {
  const MAX_QUESTIONS = 5;
  let userQuestionCount = 0;
  let history = [];
  let sending = false;

  const root = document.createElement('div');
  root.innerHTML = `
    <button class="chat-toggle" id="chat-toggle" type="button">Chat</button>
    <div class="chat-panel" id="chat-panel">
      <div class="chat-panel-header">
        <span>Ask about our FAQ</span>
        <button class="chat-close" id="chat-close" type="button" aria-label="Close chat">Close</button>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-msg chat-msg-bot">Hi! Ask me a question about stump grinding or land clearing and I'll answer from our FAQ. (Limited to ${MAX_QUESTIONS} questions — call 620-617-1838 for anything else.)</div>
      </div>
      <form class="chat-input-row" id="chat-form">
        <input type="text" id="chat-input" placeholder="Ask a question…" autocomplete="off" />
        <button type="submit" class="btn-green" id="chat-send">Send</button>
      </form>
    </div>
  `;
  document.body.appendChild(root);

  const toggleBtn = document.getElementById('chat-toggle');
  const panel = document.getElementById('chat-panel');
  const closeBtn = document.getElementById('chat-close');
  const messagesEl = document.getElementById('chat-messages');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  toggleBtn.addEventListener('click', () => panel.classList.toggle('open'));
  closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  function addMessage(text, who) {
    const div = document.createElement('div');
    div.className = 'chat-msg chat-msg-' + who;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function lockChat(message) {
    input.disabled = true;
    sendBtn.disabled = true;
    input.placeholder = message;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (sending) return;
    const text = input.value.trim();
    if (!text) return;

    if (userQuestionCount >= MAX_QUESTIONS) {
      lockChat('Question limit reached');
      return;
    }

    addMessage(text, 'user');
    history.push({ role: 'user', content: text });
    userQuestionCount++;
    input.value = '';
    sending = true;
    sendBtn.disabled = true;

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      const reply = res.ok ? data.reply : (data.error || "Sorry, something went wrong — call 620-617-1838.");
      addMessage(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    } catch (err) {
      addMessage("Sorry, something went wrong — call 620-617-1838.", 'bot');
    }

    sending = false;
    if (userQuestionCount >= MAX_QUESTIONS) {
      lockChat("That's the demo limit — call 620-617-1838 for more");
    } else {
      sendBtn.disabled = false;
    }
  });
})();
