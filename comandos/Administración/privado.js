const discord = require('discord.js');
module.exports = {
    nombre: 'privado',
    alias: ["dm", "md"],
    descripción: "Envía un mensaje al privado de un usuario!",
    run: async(client, message, args) => {
        let permisos = message.member.hasPermission("ADMINISTRATOR");

        const SyntaxM = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `privado`" + "__`<Mencion/ID>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `privado <Mencion/ID>`" + "__`<Texto>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`No tienes permisos para utilizar este comando`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        
        if(!permisos)
        return message.channel.send(SyntaxE)
        
        let id = args[0]
        let user = message.guild.members.resolve(id) || message.mentions.users.first()
        let texto = args.slice(1).join(" ");

        if(!user) return message.channel.send(SyntaxM)

        if(!texto) return message.channel.send(SyntaxA)

        user.send(
            new discord.MessageEmbed()
            .setDescription("**📧 | __Tienes un nuevo mensaje!__**\n\n" +texto)
            .setColor("BLACK")
            .setFooter("Etherium Security | MD","https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            .setTimestamp()
        )
        message.channel.send("✅ **Mensaje enviado!**")
    }
}