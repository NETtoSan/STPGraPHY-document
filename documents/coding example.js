const Discord = require('discord.js')
const bot = new Discord.Client
const token  = 'YOUR_BOT_TOKEN'
bot.login(token)

bot.on('ready',() =>{
      //Add something that tells you that the bot has go online
      
      console.log(`${bot.user.tag} has logged on !`)
})

bot.on('message', async message => {
       let args = message.content.substring(PREFIX.length).split(" ")
       switch(args[0]){
       //You can add a custom commands here as a case
       
       case 'test':
                   //Add the response you wanted to add associated with a case
       message.reply('OK')
       break;   //Always add a break. Otherwise it'll loop through every commands
}
      
//Alternative way to have a response

message.content.startsWith("test!"){
      //Add the response you wanted to add associated with a case
        message.reply('OK');
        break;
}

})
