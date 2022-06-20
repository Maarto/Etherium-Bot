const discord = require('discord.js');
module.exports = {
    nombre: 'ping',
    alias: [],
    desc: "Enseñará los MS del bot!",
    run: async(client, message, args) => {
            message.delete()
            const m = await message.channel.send(
                new discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle("<a:ES_Load:770788081509859353>")
            )
            m.edit(
                new discord.MessageEmbed()
            .setTitle("<a:ES_verified:770984597437022220> **|** Latencia - Etherium **|** <a:ES_verified:770984597437022220>")
            .setDescription(`🏓 **|** Pong! > La latencia de Etherium es de ${m.createdTimestamp - message.createdTimestamp}ms`)
            .setFooter("Etherium Security", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
            )

            m.delete({timeout: 6000})
    }
}