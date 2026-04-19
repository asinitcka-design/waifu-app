const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('ТВОЙ_ТОКЕН');

bot.start((ctx) => {
  ctx.reply(
    '💖 Открой свою вайфу',
    Markup.inlineKeyboard([
      Markup.button.webApp('🚀 Открыть', 'https://ТВОЙ_САЙТ.vercel.app')
    ])
  );
});

bot.launch();
console.log("Bot started");