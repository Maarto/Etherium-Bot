const { MessageEmbed } = require('discord.js')

module.exports = {
  nombre: "addrole",
  alias: ["role", "arol"],
  desc: "Agregar un rol a un user",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(":x: No tienes los suficientes permisos para ejecutar este comando");
    }
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(":x: No tienes los suficientes permisos para ejecutar este comando");
    } 
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`:x: Menciona el user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`:x: Menciona el rol a añadir!`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

      const embed = new MessageEmbed()
      .setColor("BLACK")
      .setDescription(`${arole} fue añadido a ${target}`)
      .setFooter(`Rol añadido por ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.add(arole)
    
  }
}
