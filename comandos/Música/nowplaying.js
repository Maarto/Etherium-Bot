const discord = require ("discord.js")
const createBar = require("string-progressbar");
module.exports = {
    nombre: 'np',
    alias: [],
    desc: "Observa que está reproduciendose!",
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

        const queue = message.client.queue.get(message.guild.id);
        
        if (!queue) return message.channel.send(SyntaxE2).catch(console.error);

        const song = queue.songs[0];
        const seek = (queue.connection.dispatcher.streamTime - queue.connection.dispatcher.pausedTime) / 1000;
        const left = song.duration - seek;

        let nowPlaying = new discord.MessageEmbed()
            .setTitle("Reproduciendo ahora")
            .setDescription(`${song.title}\n${song.url}`)
            .setColor("#F8AA2A")
            .setAuthor("Etherium Security");

        if (song.duration > 0) {
            nowPlaying.addField(
                "\u200b",
                new Date(seek * 1000).toISOString().substr(11, 8) +
                "[" +
                createBar(song.duration == 0 ? seek : song.duration, seek, 20)[0] +
                "]" +
                (song.duration == 0 ? " ◉ LIVE" : new Date(song.duration * 1000).toISOString().substr(11, 8)),
                false
            );
            nowPlaying.setFooter("Tiempo Restante: " + new Date(left * 1000).toISOString().substr(11, 8));
        }

        return message.channel.send(nowPlaying);
    }
}