const discord = require('discord.js')
const db = require('megadb')
const vip = new db.crearDB('vip')
module.exports = {
    nombre: 'removevip',
    alias: [],
    desc: "Se le quitará el VIP al usuario que se taggee",
    run: async(client, message, args) => {
        const devs = new db.crearDB('developers')
        if(!devs.has(message.author.id)) return;

        let user = message.mentions.members.first() || message.guild.members.resolve(args[0]);
        if(!user) return message.channel.send("**__Menciona a una persona primero!__**");
        if(!vip.tiene(`${user.id}`)) return message.reply("Ese usuario no esta en la lista.")
        vip.eliminar(`${user.id}`)
        return message.channel.send("<@"+user + ">"+" ha sido eliminado de la lista vip!.");
    }
}