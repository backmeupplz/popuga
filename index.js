const TelegramBot = require('node-telegram-bot-api');
const token = '612475171:AAFUZHwocef3w5vLF5lYR3ti8XRS1alKrXA';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  if (!msg.sticker) {
    bot.deleteMessage(msg.chat.id, msg.message_id);
  }
});
