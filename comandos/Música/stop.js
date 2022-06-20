const discord = require('discord.js')
module.exports = {
    nombre: 'stop',
    alias: [],
    desc: "Pará la canción que estas escuchando",
    run: async (client, message, args) => {
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`Debés estar en un canal de voz`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE2 = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No hay ningúna canción reproduciendose`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        const canal = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription("¡Necesitas unirte al canal de voz!")
        .setFooter("Etherium Security | Muisc")

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send(SyntaxE)
        }
        const queue = message.client.queue.get(message.guild.id);

        if (!queue) return message.channel.send(SyntaxE2)

        const stoped = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("GREEN")
        .setDescription(`${message.author} ha frenado y eliminado la playlist`)
        .setFooter("Etherium Security | Muisc")

        queue.songs = [];
        queue.connection.dispatcher.end();
        queue.textChannel.send(stoped)

    }
}