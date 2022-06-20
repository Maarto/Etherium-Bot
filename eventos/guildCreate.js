const discord = require('discord.js')
module.exports = (client, guild) => {
    let canal = client.channels.cache.get("770380248536973322")

    const msgEmbed = new discord.MessageEmbed()
    .setThumbnail(guild.iconURL)
    .setTitle("Me añadieron en un Nuevo Servidor")
    .addField("ID", guild.id, true)
    .addField("Region", guild.region, true)
    .addField("Roles", guild.roles.size, true)
    .addField("Miembros", guild.memberCount, true)
    .addField(
      "Dueño",
      guild.owner.user.username +
        "#" +
        guild.owner.user.discriminator +
        "\n(" +
        guild.owner.user.id +
        ")",
      true
    )
    .setTimestamp()
    .setColor("#98BCDA")
    .setFooter(guild.name, guild.iconURL);

    canal.send({embed: msgEmbed})
}