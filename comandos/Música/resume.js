const discord = require('discord.js')
module.exports = {
    nombre: 'resume',
    alias: ["Resumir"],
    desc: "Podrás volvér a colocar la canción que pausaste",
    run: async (client, message, args) => {

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `covid`" + "__`<Pais>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
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

        
        const resumido = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription(`▶ | ${message.author} ha resumido la canción!`)
        .setFooter("Etherium Security | Muisc")


        if (!queue.playing) {
            queue.playing = true;
            queue.connection.dispatcher.resume();
            return queue.textChannel.send(resumido).catch(console.error);
        }

        return message.reply("La lista de reproducción no está pausada!").catch(console.error);
    }
}