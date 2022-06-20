const { hugP } = require(`../../actions.json`);
const Discord = require("discord.js");
module.exports = {
    nombre: 'abrazo',
    alias: [],
    desc: "Dale un abrazo a un amigo!",
    run: async(client, message, args) => {
    //var recipient = message.content.split(/\s+/g).slice(1).join(" ");
    var hug = hugP[Math.round(Math.random() * (hugP.length - 1))];

    if (!args[0]) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes abrazarte a ti mismo, pero te abrazaré, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == message.author) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `No puedes abrazarte a ti mismo, pero yo te abrazaré, ${message.author.username}!`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first() == "725432896533299200") {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `Un abrazo tan cálido ... gracias ~~ ${message.author.username} Nyaa~~`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hug);
      return message.channel.send(embed);
    } else if (message.mentions.users.first()) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} Abraza a ${
            message.mentions.users.first().username
          }`
        )
        .setColor("RANDOM")
        .setFooter("Etherium Security | Accion" ,'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()
        .setImage(hug);
      return message.channel.send(embed);
    }
  }
};
