const discord = require('discord.js')
module.exports = {
    nombre: "nuevo",
    alias: [],
    desc: "Se podrá ver todas las actualizaciones!",
    run: (client, message, args) => {
        const msgEmbed = new discord.MessageEmbed()
        .setTitle("📰 Actualizaciones 2 Etherium Security 📰")
        .setColor("BLACK")
        .addFields(
            {name: "Acciones", value: "`Podras hacer cualquier tipo de acciones para poder rolear con tus amigos y tu comunidad.` `ayuda accion - accion2`"},
            {name: "Pregunta", value: "Fue modificado y cambiado a otro estilo y mejor! `pregunta`"},
            {name: "Diversion", value: "Implementamos mas cosas al diversion para que puedan entretenerse `ayuda diversion - diversion2 - diversion3`"},
            {name: "Encuestas", value: "¡Podrás hacer tus encuestas en tu servidor de Discord! `ayuda administracion2`"},
            {name: "Giveaways", value: "Fue cambiado a embed rainbow, espero les guste! `ayuda giveaway`"},
            {name: "NSFW - HENTAI", value: "+18 Añadido, disfrutalo! `ayuda hentai - nsfw`"},
            {name: "Verificacion", value: "Sistema de verificacion **añadida**! `ayuda verify`"},
            {name: "Sugerir", value: "Sistema de sugerencias **añadido**! `ayuda administracion2`"},
            {name: "Sistema de Warns", value: "Sistema de warns **añadido**! `ayuda administracion2`"},
            {name: "Arol - Qrol", value: "Sistema de roles **añadido**! `ayuda administracion2`"}
        )
        .setFooter('Etherium Security | 2.2', 'https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif')
        .setTimestamp()

        message.channel.send({embed: msgEmbed})
    }
}