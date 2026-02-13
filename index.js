const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Bot is running successfully ✅");
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Available commands:\n/start\n/help\n/ping");
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, "Pong 🏓");
});
