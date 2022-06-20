const discord = require('discord.js')
module.exports = {
    nombre: 'ban',
    alias: [],
    desc: "Podrás expulsar permanentemente al usuario que menciones",
    run: (client, message, args) => {

        let reason = args.join(" ").slice(22);

        var member = message.mentions.members.first() || message.guild.roles.resolve(args[0]);
        var perms = message.member.hasPermission("ADMINISTRATOR");

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Pirados RP")
        .setDescription("Syntax Error: `ban`" + "__`<Mencion/ID>`__")
        .setTimestamp()
        .setFooter("Pirados RP")
        const SyntaxB = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Pirados RP")
        .setDescription("Error:" + "__`No puedo banear a este usuario`__")
        .setTimestamp()
        .setFooter("Pirados RP")
        const SyntaxP = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Pirados RP")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Pirados RP")

        if (!perms) return message.channel.send(SyntaxP)
        if (!member) return message.channel.send(SyntaxM)
        if (!message.guild.member(member).bannable) {
            return message.channel.send(SyntaxB);
        }

        const msgEmbed = new discord.MessageEmbed()
        .setThumbnail(member.user.avatarURL)
        .setAuthor("PiradosRP", client.user.avatarURL)
        .setTitle(":mute: ¡Has sido baneado! :mute:")
        .setDescription(":point_right: **>> | Has recibido un baneo proveniente de** " + message.guild.name)
        .setColor("BLACK")
        .addField("Personal Responsable:", message.author.tag)
        .addField("Motivo:", `${reason ? reason : "Ninguna."}`)
        .setFooter("Pirados RP", "https://cdn.discordapp.com/attachments/858002529719418891/864748398799093760/IMG_20210709_190316_854.jpg")
        .setTimestamp()

        member.send(msgEmbed)
        member.ban().then((member) => {
            message.channel.send(":information_source: `|` El usuario __**" + member.displayName + "**__ ha sido baneado correctamente.").then(m => m.delete({timeout: 5000}))
        })
    }
}