//INITIZE BOT SEQUENCE AND LOGIN. GETTING BOT ONLINE
const Discord = require('discord.js')
var bot = new Discord.client
const PREFIX = '>!'
const token = 'YOUR_TOKEN_HERE'
bot.login(token)


//SYSTEM LOG AND CUSTOM DATA TO DISPLAY AS BOT GO ONLINE
bot.on('ready',() =>{
    console.log(`Bot goes online!. Logged in as ${bot.user.tag}`)
    bot.user.setActivity(SET_YOUR_ACTIVITY_HERE)
    })

//LET BOT READ YOUR MESSAGES
bot.on('message', async message =>{
    let args = message.content.subString(PREFIX.length).split(" ")
    
    switch(args[0]){
    
    case 'test':
       message.reply('hello!)
       break;
    }
    //STPGRAPHY COMMANDS GOES HERE
    if(message.content.startsWith(PREFIX+"stpgraphy"){
    
    //PUT YOUR CUSTOM COMMANDS HERE
    if(args[1] == 'test'){
       message.reply("You bot is working correctly. Delete this code")
    }
    else{
       message.reply("Type >!stpgraphy test")
    }
    }
}
