const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    nombre: 'queue',
    alias: ["list", "Songs-list", "l"],
    desc: "Mirá la lista de reproducción que está colocada!",
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

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel){
            return message.channel.send(SyntaxE)
        }

        const serverQueue = message.client.queue.get(message.guild.id);

        if (!serverQueue) return message.channel.send(SyntaxE2);

        let i = 1

        let list = serverQueue.songs.slice(1).map((m) => {
            if (i > 16) return // Lista solo 15 canciones
            i++;
            return `[${i}] - 🎵 ${m.title} ` // Construimos la info por cada canción

        }).join('\n')

        let hr = "---------------------------------------------"

        let time = Math.trunc(serverQueue.connection.dispatcher.streamTime / 1000)

        let playName = `${hr}\n🔊 Ahora: ${serverQueue.songs[0].title}\n🕐 Tiempo: ${time} segundos.\n${hr}`
        let countSong = `\n${hr}\n📒 Lista ${serverQueue.songs.length}/15 canciones.`

        message.channel.send('```xl\n[LISTA DE CANCIONES PARA: '+message.guild.name.toUpperCase()+']\n'+playName+'\n\n'+ list +'\n'+countSong+'\n```')
    }
}