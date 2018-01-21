  if(message.author.bot) return;
  var prefix = settings.prefix
 
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
 
  if(command === "ping") {
    const m = await message.channel.send("`Please wait...`");
    m.edit(`*Pong!* Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms `);
  }
 
  if (command == "8ball") { // creates the command 8ball
    if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
    else message.channel.send("Please type a specific question."); // if not, error
  }
 
  if (command == "cookie") { // creates the command cookie
    if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
    else message.channel.send("Who do you want to give a cookie to?") // sends the error message if no-one is mentioned
  }
   
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
 
  if(command === "purge") {    
 
    const deleteCount = parseInt(args[0], 10);
   
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
   
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
 
if (message.content.startsWith(prefix + 'avatar')) {
  message.reply(message.author.avatarURL)
}
 
 
if (message.content.startsWith(prefix + 'help')) {
  message.reply(":white_check_mark: Check your DMs~")
  message.author.send({embed: {
      color: 3447003,
      description: "`Here are my commands!`\n**MISC**\n`help - Shows this menu`\n`invite - Gives your a link to invite me to your server!` \n`ping - To test if your bot is alive`\n`shrug - Shows a shrug picture`\n` 8ball - ??? It's random!`\n `cookie - Give a cookie to someone! (only one words: ex: (random thing) Wetzu~`\n `say - Make the bot say something (removed your command :^))`\n **MODERATION**\n `purge - purges text 1 - 100`\n `kick - kicks a member!`\n `ban - bans the user mentioned!`\n `mute - muted the mentioned user`\n `unmute - unmutes the mentioned user`\n"
  }});
 
}
 
if (command === "roll") {
  message.channel.send(Math.floor(Math.random() * 100));
 }

 if (command === "kms") {
  message.channel.sendMessage(`:knife: I have successfully killed ${message.author}. :knife:`)
}
 
 if (command === "mydinfo") {
 
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setDescription("This is **_YOUR_** info!")
  .setColor("0x008B8B")
  .addField("Username", `${message.author.username}#${message.author.discriminator}`)
  .addField("ID", message.author.id)
  .addField("Created on/at", message.author.createdAt)
 
  message.channel.sendEmbed(embed);
 
 }

if (message.content.startsWith (prefix + 'setstatus')) {
  if (message.author.id == "391451008124846080") {
  var argresult = args.join(' ');
  bot.user.setStatus(argresult);
  message.reply("It has been set..");
  } else {
    message.reply("You shouldn't even try :^)");
  }
}

if (command === "cusannounce") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let args = message.content.split(" ").slice(1).join(" ");
let split = args.split("-");
let url = args[2];
    message.channel.send("@everyone", {
      embed: {
        color: 0xFF0000,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        title: split[0],
        description: split[1],
        url: split[2],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: message.author.username
        }
      }
  });
}
}

if (message.content.startsWith(prefix + 'invite')) {
 message.reply(":white_check_mark: Check yours DMs~")
 message.author.send({embed: {
  "color": 3447003,
  "description": "Use this to invite me!\n https://discordapp.com/oauth2/authorize?&bot_id=401967891869597697&scope=bot&permissions=0"
  }});
}

if (command === "announce") {
  if (message.member.hasPermission("ADMINISTRATOR")) {
   let args = message.content.split(" ").slice(1).join(" ");
let split = args.split("-");
let url = args[2];
    message.channel.send("@everyone", {
      embed: {
        color: 0xFFFF00,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        title: ":information_source: Announcement",
        description: split[0],
        url: split[1],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: message.author.username
        }
      }
  });
}
}

 
if (message.content.startsWith(prefix + 'shrug')) {
  message.reply(' https://imgur.com/Zx9EboQ ');
}
 
if (command === "setgame") {
  if (message.author.id == "391451008124846080") {
  var argresult = args.join(' ');
  if (!argresult) argresult = null;
  bot.user.setGame(argresult);
  message.reply("It has been set..");
  } else {
    message.reply("You shouldn't even try :^)");
  }
  };
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
