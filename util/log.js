module.exports = {
  log: (message) => {
    console.log(`${message.guild.name}#${message.channel.name}|${message.author.tag}: ${message.content}`);
  },
  emojiLog: (message, emojis, type) => {
        try{
		console.log("type: " + type);
	        console.log(`  ${type} Emojis (${emojis.length}): ${emojis.map(i => i.isDefault ? i.identifier : 			message.guild.emojis.get(i.identifier).name).join(' ')}`);
	}catch(err) { console.log(err);}
  },
  error: (message, title, description) => {
    const e = { title: title, description: description, };
    message.channel.send({ embed: e, });
    console.log(description);
  },
};
