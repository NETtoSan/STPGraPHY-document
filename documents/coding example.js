const Discord = require('discord.js')
const bot = new Discord.Client
const token  = 'YOUR_BOT_TOKEN'
bot.login(token)

bot.on('ready',() =>{
      console.log(`${bot.user.tag} has logged on !`)
})

bot.on('message', async message => {
       let args = message.content.substring(PREFIX.length).split(" ")
       switch(args[0]){
       ##You can put your own response code here.##
       
       case 'test':
       message.reply('OK')
       break;   ##Dont forget to put the break code. Without it. it'll continue executing the rest of the code!##
}
##You can do another way without switching args

message.content.startsWith("test!"){
        message.reply('OK');
        break;
}

})
