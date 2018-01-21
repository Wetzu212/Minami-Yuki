const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame(` >help ${client.guilds.size}`)
});

client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
}

client.on('message', message => {
    if (message.content.startsWIth 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content.startsWith 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
