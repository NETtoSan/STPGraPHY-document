const Discord = require('discord.js')
const bot = new Discord.CLient()
const token = 'YOUR_BOT_TOKEN'

##Your local system integration
const fs = require('fs')

bot.login

##This is how you set up file import codes##

bot.commands = new Discord.Collection //The keyword "commands" can be anything you like to name

##Read files from the directory

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))      //The directory can be any directory you like And the code filter(file => ) you can filter whatever you like

##For setting up commands##

for (const file of commandFiles){
const command = require(`./commands/${file}`); // Can be any directory you want
bot.commands.set(command.name , command)
}

bot.on('ready',() =>{
console.log(`${bot.user.tag} is online!)
})

bot.on('message',async message =>{
  //Enter your custom response code here
})
