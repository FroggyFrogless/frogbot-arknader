const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'ark') {
    	message.reply('Survival Evolved');
  	}
});

Client = discord.Client()
client = commands.Bot(command_prefix = "?")

chat_filter = ["PINEAPPLE", "APPLE", "CHROME"]
bypass_list = []

@client.event
async def on_ready():
    print("Bot is online and connected to Discord")

@client.event
async def on_message(message):
    contents = message.content.split(" ") #contents is a list type
    for word in contents:
        if word.upper() in chat_filter:
            if not message.author.id in bypass_list:
                try:
                    await client.delete_message(message)
                    await client.send_message(message.channel, "**Hey!** You're not allowed to use that word here!")
                except discord.errors.NotFound:
                    return

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
