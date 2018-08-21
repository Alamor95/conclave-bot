const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.on('ready',function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN);
