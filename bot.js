const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot up and Running!');


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'ark') {
    	message.reply('Survival Evolved');
  	}
    if (message.content === 'ark!help') {
    	message.reply('Work in Progress');
  	}
    if (message.content === 'ark!') {
    	message.reply('Try >ark!help<');
  	}
    if (message.content === 'ark!subscribe') {
    	message.reply('Yeah dont forget to subscribe https://www.youtube.com/channel/UCH7NFZ4nEoLwSAV3x-pwccw');
  	}
    if (message.content === 'ribbit') {
    	message.reply('Ribbit :frog:');
  	}
    if (message.content === 'frog!help') {
    	message.reply('Work in Progress');
  	}
    if (message.content === 'frog!') {
    	message.reply('Try >frog!help<');
  	}
    if (message.content === 'frog!subscribe') {
    	message.reply('Yeah dont forget to subscribe https://www.youtube.com/c/froggyfrogarmy');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
