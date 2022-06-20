const discord = require('discord.js')
const db = require('megadb')
const profile = new db.crearDB('profile')
const prefix_db = new db.crearDB('prefix')
module.exports = {
    nombre: 'config-sexo',
    alias: [],
    desc: "Configura la descripción de tu perfil!",
    run: async(client, message, args) => {
        const user = message.member; 

        const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
        if(!profile.tiene(`${user.id}`)){
            return message.channel.send(
                new discord.MessageEmbed()
                .setThumbnail(user.user.displayAvatarURL({dynamic: true}))
                .setTitle("Etherium Security | Perfil")
                .setDescription("Debés crearte un perfil antes de configurarlo!\n\n"+ "`" + `${prefix}crear-perfil` + "`")
                .setColor("RED")
                .setFooter("Etherium Security | Perfil", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")    
            )
        }

        const loading = new discord.MessageEmbed()
        .setDescription("<a:loading2:771589484214747176>")

        const menú = new discord.MessageEmbed()
        .setTitle("Etherium Security | Perfil")
        .setDescription("♀️ - Mujer \n ♂️ - Hombre")
        .setColor("GREEN")
        .setFooter("Selecciona el sexo con el que te defines!")
        const end = new discord.MessageEmbed()
        .setTitle("Etherium Security")
        .setColor("GREEN")
        .setDescription("¡Perfecto, ya modificaste tu sexo, puedes verlo con el comando `perfil`!")
        .setTimestamp()
        .setFooter("Etherium Security - Perfil")
        message.channel.send(loading).then(async(m) => {
            await m.react("♀️")
            await m.react("♂️")
            /*await m.react("🏳️‍⚧️")
            await m.react("🏳️‍🌈")*/
            await m.edit(menú)

            const filter = (reaction, user) => {
                return ['♀️', '♂️', '🏳️‍⚧️', '🏳️‍🌈'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            m.awaitReactions(filter, {
                max: 1,
                time: 5000,
                errors: ["time"]
            }).then(async(collected) => {
                const reaction = collected.first();

                if(reaction.emoji.name === '♀️'){
                    await m.edit(loading)
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.sexo`, "Mujer")
                    await m.edit(end)
                    await m.delete({timeout: 10000})
                }
                
                if(reaction.emoji.name === '♂️'){
                    await m.edit(loading)
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.sexo`, "Hombre")
                    await m.edit(end)
                    await m.delete({timeout: 10000})
                }

               /* if(reaction.emoji.name === '🏳️‍⚧'){
                    await m.edit(loading)
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.sexo`, "Transgénero")
                    await m.edit(end)
                    await m.delete({timeout: 10000})
                }

                if(reaction.emoji.name === '🏳️‍🌈'){
                    await m.edit(loading)
                    await m.reactions.removeAll()
                    await profile.establecer(`${user.id}.sexo`, "Indefinido")
                    await m.edit(end)
                    await m.delete({timeout: 10000})
                }*/
            }).catch(err => {
                console.log(err)
            })
        })

    }
}