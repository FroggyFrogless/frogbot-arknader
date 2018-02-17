const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot up and Running!');

GUILD_ID = 0 # your guild id here

import discord
from discord.ext import commands
from urllib.parse import urlparse
import asyncio
import textwrap
import datetime
import time
import json
import sys
import os
import re
import string
import traceback
import io
import inspect
from contextlib import redirect_stdout


class Modmail(commands.Bot):
    def __init__(self):
        super().__init__(command_prefix=self.get_pre)
        self.uptime = datetime.datetime.utcnow()
        self._add_commands()

    def _add_commands(self):
        '''Adds commands automatically'''
        for attr in dir(self):
            cmd = getattr(self, attr)
            if isinstance(cmd, commands.Command):
                self.add_command(cmd)
    
    @staticmethod
    async def get_pre(bot, message):
        '''Returns the prefix.'''
        with open('config.json') as f:
            prefix = json.load(f).get('PREFIX')
        return os.environ.get('PREFIX') or prefix or 'm.'
});

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

    @classmethod
    def init(cls, token=None):
        '''Starts the actual bot'''
        bot = cls()
        if token:
            to_use = token.strip('"')
        else:
            to_use = bot.token.strip('"')
        try:
            bot.run(to_use, reconnect=True)
        except Exception as e:
            raise e

    async def on_connect(self):
        print('---------------')
        print('Modmail connected!')
        status = os.getenv('STATUS')
        if status:   
            await self.change_presence(game=discord.Game(name=status))
            print(f'Setting Status to {status}')
        else:
            print('No status set.')

    @property
    def guild_id(self):
        from_heroku = os.environ.get('GUILD_ID')
        return int(from_heroku) if from_heroku else GUILD_ID

    async def on_ready(self):
        '''Bot startup, sets uptime.'''
        self.guild = discord.utils.get(self.guilds, id=self.guild_id)
        print(textwrap.dedent(f'''
        ---------------
        Client is ready!
        ---------------
        Author: Kyb3r#7220
        ---------------
        Logged in as: {self.user}
        User ID: {self.user.id}
        ---------------
        '''))

    def overwrites(self, ctx, modrole=None):
        '''Permision overwrites for the guild.'''
        overwrites = {
            ctx.guild.default_role: discord.PermissionOverwrite(read_messages=False)
        }

        if modrole:
            overwrites[modrole] = discord.PermissionOverwrite(read_messages=True)
        else:
            for role in self.guess_modroles(ctx):
                overwrites[role] = discord.PermissionOverwrite(read_messages=True)

        return overwrites

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
