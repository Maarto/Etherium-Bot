const discord = require('discord.js');
module.exports = {
    nombre: 'stats',
    alias: ['Estadisticas'],
    desc:"Enseñará las estadisticas del Bot",
    run: async(client, message, args) => {
        const embedStats = new discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle('📊 Estadisticas del Bot')
        .setDescription('``Estas son las estadisticas globales del Bot, no de los servidores.``')
        .addField('🔌 Servidores totales: ', `${client.guilds.cache.size}`)
        .addField('📂 Usuarios totales: ', `${client.users.cache.size}`)
        .setFooter('Etherium Security | Stats', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        message.channel.send(embedStats)
    }
}