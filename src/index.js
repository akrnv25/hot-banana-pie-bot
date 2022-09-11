const express = require('express');
const config = require('./config');
const apiRouter = require('./routers/api');
const { Telegraf, Markup } = require('telegraf');
const { REGISTER_BOT_ACTION } = require('./consts/bot-actions');
const i18n = require('./i18n');

const bot = new Telegraf(config.botToken);
bot.start(ctx => {
  const registerKeyboard = Markup.inlineKeyboard([
    Markup.button.callback(i18n('REGISTER_BUTTON'), REGISTER_BOT_ACTION)
  ]);
  ctx.reply(i18n('START_MESSAGE'), registerKeyboard);
});
bot.action(REGISTER_BOT_ACTION, ctx => ctx.sendMessage(i18n('REGISTER_SUCCESS_MESSAGE')));
bot.launch();

const app = express();
app.use('/api', apiRouter);
app.listen(config.port);
