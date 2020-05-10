//INITIZE BOT SEQUENCE AND LOGIN. GETTING BOT ONLINE
const Discord = require('discord.js')
const fs = require('fs')
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
bot.on('message' , async message =>{
    let args = message.content.substring(PREFIX.length).split(" ")
    switch(args[0]){
        case 'system' :
            if(args[1] == 'browse'){
                const filter = m => m.author.id = message.author.id
                message.channel.send("Please enter the query")
                message.channel.awaitMessages(filter , {max : 1 , time : 100000}).then(collected =>{
                    if(collected.first().content){
                        message.channel.send(`Containing files :
                        fs.readdirSync(collected.first().content)
                        `)
                        
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
            else if(args[1] == 'get'){
                const filter = m=> m.author.id = message.author.id
                message.channel.send("Please enter the query")
                message.channel.awaitMessages(filter , {max : 1 , time : 100000}).then(collected =>{
                    if(collected.first().content){
                        const attachment = new Discord.messageAttachment()
                        .setFile(collected.first().content)
                        const embed = new Discord.messageEmbed()
                        .setTitle("Download")
                        .setDescription(`${message.author.username} Has downloaded ${collected.first().content`)
                        message.channel.send(embed , attachment)
                    }
                }).catch(err => {
                    console.log(err)
                })
                
            }
            else{
                //You can set your own custom statement here
            }
    break;
    }
})
