const { MessageEmbed } = require('discord.js')

module.exports = {
  nombre: "removerole",
  alias: ["qrol", "-role"],
  desc: "Remove rol user",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(":x: No tienes los suficientes permisos para ejecutar este comando");
    }
    
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`:x: Menciona el usuerio!`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`:x: Menciona el rol a añadir!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`${rrole} fue removido de ${target}`)
      .setFooter(`Rol removido por ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)
    
  }
}