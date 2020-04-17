const Discord = require('discord.js')

module.exports={
    name: 'projects',

    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setTitle("STPgraphy Projects")
        .setDescription("Data by STPGRaphy initiative files")
        .addField("Total projects for STPGraphy", "4")
        .addField("Big projects", "3")
        .addField("Major projects" , "1")
        .addField("--------------")
        .addField("Big projects" , "Drone , Camera , Gimbal")
        .addField("Major projects" , "STPGraphy bot")
        .addField("Drone" , "Paused. Program retired. Exploits. Harrasments")
        .addField("Camera" , "Paused. Not enough budget")
        .addField("Gimbal" , "Paused. 3D printer needed")
        .addField("STPGraphy bot" , "In progress")
        .setColor(0x01ECFF)

        message.channel.send(embed)
    }
}