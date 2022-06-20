module.exports = {
    nombre: 'volume',
    alias: ["vol", "volumen"],
    desc: "Sube o baja el volúmen",
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
        const SyntaxE3 = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`Debes colocar solo números`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE4 = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`Solo números del 0 al 100`__")
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

        if (!queue) return message.textChannel.send(SyntaxE2).catch(console.error);
        if (!args[0]) return message.textChannel.send(`🔊 El volúmen actual es: **${queue.volume}%**`).catch(console.error);
        if (isNaN(args[0])) return message.textChannel.send(SyntaxE3).catch(console.error);
        if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
            return message.textChannel.send(SyntaxE4).catch(console.error);

        queue.volume = args[0];
        queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

        return queue.textChannel.send(`Volúmen colocado en **${args[0]}%**`).catch(console.error);
    }
}