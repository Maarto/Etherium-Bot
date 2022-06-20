const discord = require('discord.js');
const db = require('megadb');
let devs = new db.crearDB('developers')

module.exports = {
    nombre: "devlist",
    alias: [],
    desc: "Mostrará todos los developers en la lista!",
    run: (client, message, args) => {
        devs.map(false, (v, key) => `developers: ${v}`).then(datos => {
            return message.channel.send(
                new discord.MessageEmbed()
                .addField("**Lista de desarrolladores**", datos)
            )
        })
    }
}