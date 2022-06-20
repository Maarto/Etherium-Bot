const discord = require('discord.js')
module.exports = {
    nombre: 'skip',
    alias: ["s"],
    desc: "Saltea una canción que estés escuchando",
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

        const skiped = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("GREEN")
        .setDescription(`⏭ | ${message.author} ha saltado la canción!`)
        .setFooter("Etherium Security | Muisc")
        if (!queue)
            return message.channel.send(SyntaxE2).catch(console.error);

        queue.playing = true;
        queue.connection.dispatcher.end();
        queue.textChannel.send(skiped).catch(console.error);
    }
}