
let discord = require("discord.js");
const cpustat = require('cpu-stat');
const os = require('os');

module.exports = {
    nombre: 'botinfo',
    alias: [],
    desc: "Muestra la información del bot",
    run: async(client, message, args) => {
        cpustat.usagePercent(function (error, percent, seconds) {        

            let {version} = require("discord.js");
            let embed = new discord.MessageEmbed()
                .setAuthor("Etherium Security | Información", client.user.avatarURL)
                .setThumbnail("https://imgur.com/TEYcooG")
                .setDescription("**Hola, soy __Etherium Security__, un bot con muchas utilidades de seguridad y moderación!**")
                .addField(":clipboard: __Libreria__:", "discord.js", true)
                .addField(":flashlight: __Discord.js__:", version, true)
                .addField(":newspaper2: __Version__:", "2.0.1", true)
                .addField(":beginner: __Host__:", "https://virtualhs.us", true)
                .addField(":hammer: __Developers__:", "<@392904909231489024> <@310158154510106635> <@615360256922484757> <@634513106126766081>", true)
                .addField("📊 __Servidores__:", client.guilds.cache.size, true)
                .addField("🔎 __Usuarios__:", client.users.cache.size, true)
                .addField(":microscope: __Memoria en uso__:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}%`, true)
                .addField(":battery: __CPU__:", `${os.cpus().map(i => `${i.model}`)[0]} (${percent.toFixed(2)}% en uso)`, true)
                .setColor("#98BCDA")
                .setFooter('Etherium Security', client.user.avatarURL);
            
            message.channel.send(embed);
        })
    }
}
