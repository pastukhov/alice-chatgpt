const { Alice, Reply } = require('yandex-dialogs-sdk');

const chatgpt = require('openai-chat-api')({
  key: 'YOUR_OPENAI_API_KEY',
  engine: 'davinci' // use the Davinci engine for the most advanced capabilities
});

const alice = new Alice();

alice.command('', async (ctx) => {
  const message = ctx.message.toLowerCase();

  if (message.includes('chatgpt')) {
    // Отправляем запрос на API OpenAI для получения ответа на вопрос пользователя
    const response = await chatgpt(message.replace('chatgpt', '').trim());

    return Reply.text(response);
  }

  return Reply.text('Привет! Спроси меня что-нибудь про ChatGPT!');
});

alice.listen(3000);
