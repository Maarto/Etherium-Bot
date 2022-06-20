const discord = require('discord.js')
module.exports = {
    nombre: 'loop',
    alias: [],
    desc :"Coloca una canción en Loop",
    run: async(client, message, args) => {
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

        queue.loop = !queue.loop;
        return queue.textChannel.send(`La función Loop está ${queue.loop ? "**Prendida**" : "**Apagada**"}`).catch(console.error);
    }
}