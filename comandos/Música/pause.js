const discord = require('discord.js')
module.exports = {
    nombre: 'pause',
    alias: ["Pausa"],
    desc: "Pausá la canción que estás escuchando",
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
        if (!queue) return message.reply(SyntaxE2).catch(console.error);

        const pausa = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription(`⏸ | ${message.author} ha pasuado la canción!`)
        .setFooter("Etherium Security | Muisc")

        if (queue.playing) {
            queue.playing = false;
            queue.connection.dispatcher.pause(true);
            return queue.textChannel.send(pausa).catch(console.error);
        }
    }
}