const discord = require('discord.js')
module.exports = (client, guild) => {
    let channel = client.channels.cache.get("770380248536973322")
    const msgEmbed = new discord.MessageEmbed()
    .setDescription(
        `:cry: ___¡Me removieron de un **Servidor**!___ \n \n:cactus: · ___**Nombre del Servidor**___: ${guild.name} \n:id: · ___**ID del Servidor**___: ${guild.id} \n:bust_in_silhouette: · ___**Cantidad de Miembros/as**___: __${guild.memberCount}__ ¡Miembros/as!`
      )
    .setAuthor("Etherium Security | Logs", client.user.avatarURL)
    .setColor("#98BCDA");
    channel.send({embed: msgEmbed})
}