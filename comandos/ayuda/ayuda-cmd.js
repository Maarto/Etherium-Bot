const discord = require('discord.js');
const { valueOf } = require('ffmpeg-static');
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')
module.exports = {
  nombre: 'ayuda',
  alias: ["a", "help"],
  desc: "Te enseñará los comandos que posee el Bot!",
  run: async (client, message, args) => {
    const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
    
    //                        EMBEDS                  //

    let hr = "[==============================]"

    const ayuda2 = new discord.MessageEmbed()
    ayuda2.setColor("#DF6AF9")
    ayuda2.setTitle("🛡️ **Etherium Security - Comandos** 🛡️")
    ayuda2.setURL("https://discord.gg/Jm3hAv7")
    ayuda2.setDescription("\n🤖 | **BOT**\nEscribe en el chat `ayuda bot`\n\n⚔️ | **Administración**\nEscribe en el chat `ayuda administracion`\n\n⚙️ | **Configuración**\nEscribe en el chat `ayuda configuracion`\n\n🎈 | **Diversión**\nEscribe en el chat `ayuda Diversion`\n\n<a:CD:778114730379706388> | **Musica** *[BETA]*\nEscribe en el chat `ayuda musica`\n\n🎉 | **GiveAway** *[BETA]*\nEscribe en el chat  `ayuda Giveaway`\n\n💎 | **V.I.P**\nEscribe en el chat `ayuda vip`\n\n🎭 | **Perfil** *[BETA]* \n Escribe en el chat `ayuda perfil`\n\n 🌀 | **Soporte** \n Escribe en el chat `ayuda soporte`\n\n\<a:ES_verified:770984597437022220>  | **Verify** \n Escribe en el chat `ayuda verify`\n\n\:underage:   | **NSFW** \n Escribe en el chat `ayuda nsfw`\nEscribe en el chat `ayuda hentai`")
    ayuda2.setTimestamp()
    ayuda2.setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    ayuda2.setFooter("¡Escribe en el chat lo que necesite ayuda! ", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const loading = new discord.MessageEmbed()
    loading.setColor("#DF6AF9")
    loading.setTitle(" **Cargando** ")
    loading.setDescription("<a:loading3:771589483346788352>")
    loading.setURL("https://discord.gg/Jm3hAv7")

    const bot = new discord.MessageEmbed()
    bot.setColor("#DF6AF9")
    bot.setTitle("🤖 BOT - Comandos 🤖")
    bot.setURL("https://discord.gg/Jm3hAv7")
    bot.addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Ayuda", value:"Te enseñará los módulos y comandos\n\n**Uso:**"+"`" + `${prefix}ayuda <modulo>`+ "`\n\n"},
      {name:"Invite", value:"Te otorga el link para invitar el bot\n\n**Uso:**"+"`" + `${prefix}invite`+ "`\n\n"},
      {name:"BotInfo", value:"Enseñará la información del bot\n\n**Uso:**"+"`" + `${prefix}BotInfo`+ "`\n\n"},
      {name:"PartnerShips", value:"Se mostrarán los afiliados al bot\n\n**Uso:**"+"`" + `${prefix}PartnerShips`+ "`\n\n"},
      {name:"Ping", value:"Etherium mostrara el Ping del bot\n\n**Uso:**"+"`" + `${prefix}Ping`+ "`\n\n"},
      {name:"Stats", value:"Muestra las estadisticas del bot\n\n**Uso:**"+"`" + `${prefix}Stats`+ "`\n\n"},
      {name:"Nuevo", value:"Te enseña la lista de funciones nuevas\n\n**Uso:**"+"`" + `${prefix}Nuevo` + "`\n\n"}
    )
    bot.setTimestamp()
    bot.setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    bot.setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const administracion = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("⚔️ Administración - Comandos 🤖")
    .setDescription(`**Para ver la segunda parte escribe**\n ${prefix}ayuda administracion2`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Anunciar", value:"Podrás hacer un anuncio\n**Uso:**"+"`" + `${prefix}anunciar <#canal> <mensaje>`+ "`\n\n"+ hr},
      {name:"privado / md", value:"Enviará un mensaje al privado de un usuario (¡Asegurate que tenga los mensajes privados abiertos!)\n**Uso:**"+"`" + `${prefix}md <ID/Mención> <mensaje>`+ "`\n\n"+ hr},
      {name:"Ban", value:"Baneas a un usuario del servidor\n**Uso:**"+"`" + `${prefix}Ban <ID/Mención> [Razón]`+ "`\n\n"+ hr},
      {name:"Kick", value:"Kickearas a un usuario del servidor\n**Uso:**"+"`" + `${prefix}Kick <ID/Mención> [Razón]` + "`\n\n"+ hr},
      {name:"HackBan", value:"Puedes banear a un usuario que no se encuentre en tu servidor\n**Uso:**"+"`" + `${prefix}Hackban <ID>` + "`\n\n"+ hr},
      {name:"Clear", value:"Podrás eliminar hasta 100 mensajes\n**Uso:**"+"`" + `${prefix}Clear <Cantidad>` + "`\n\n"+ hr},
      {name:"ForceBan", value:"Baneará a todos los usuarios del servidor que esté en la BlackList de Etherium Security\n**Uso:**"+"`" + `${prefix}ForceBan` + "`\n\n"+ hr},
      {name:"Lock", value:"Bloqueara los canales para el rol everyone *[BETA]*\n**Uso:**"+"`" + `${prefix}Lock <ON/OFF>` + "`\n\n"+ hr},
      {name:"Mute", value:"Mutearas a un usuario\n**Uso:**"+"`" + `${prefix}Mute <ID/Mención>` + "`\n\n"+ hr},
      {name:"UnMute", value:"Desmutearas a un usuario\n**Uso:**"+"`" + `${prefix}UnMute <ID/Mención>` + "`\n\n"+ hr}
    )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const configuracion = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("⚙️ Configuración - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Config-filtro", value:"Puedes activar y desactivar los filtros que posee Etherium\n**Uso:**"+"`" + `${prefix}Config-filtros`+ "`\n\n"+ hr},
      {name:"Setprefix", value:"Puedes colocar el prefix que mas te guste para que Etherium responda\n**Uso:**"+"`" + `${prefix}setprefix <prefix>`+ "`\n\n"+ hr},
      {name:"SetLogs", value:"Podrás colocar un canal donde llegaran todos los Log's del servidor\n**Uso:**"+"`" + `${prefix}Setlogs <#canal>`+ "`\n\n"+ hr},
      {name:"Create-muterole", value:"Crearas el rol de mute en caso de no tenerlo\n**Uso:**"+"`" + `${prefix}Create-Muterole`+ "`\n\n"+ hr},
      {name:"Delete-muterole", value:"Eliminaras el rol seteado de mi base de datos para setear otro\n**Uso:**"+"`" + `${prefix}delete-muterole` + "`\n\n"+ hr},
      {name:"Set-muterole", value:"Seleccionarás el rol de mute para podér utilizar el comando mute\n**Uso:**"+"`" + `${prefix}set-muterole <Mención-Rol>` + "`\n\n"+ hr},)
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const diversion = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🎈 Diversión - Comandos 🤖")
    .setDescription(`**Escribe el siguiente comando para poder ver la segunda parte!**\n${prefix}ayuda diversion2\n\n **Y puedes ver la tercera parte escribiendo**\n${prefix}ayuda diversion3`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Avatar", value:"Te mostrara el avatar propio o del usuario que menciones\n**Uso:**"+"`" + `${prefix}Avatar [Mención]`+ "`\n\n"},
      {name:"Chiste", value:"Etherium Security te contará un chiste muy malo\n**Uso:**"+"`" + `${prefix}Chiste`+ "`\n\n"},
      {name:"Meme", value:"Se mostrará un meme\n**Uso:**"+"`" + `${prefix}Meme`+ "`\n\n"},
      {name:"MeMide", value:"Te dirá el estimado de tula que posees\n**Uso:**"+"`" + `${prefix}memide` + "`\n\n"},
      {name:"Pregunta", value:"Puedes hacerle una pregunta a Etherium y el te respondera\n**Uso:**"+"`" + `${prefix}Pregunta <pregunta>` + "`\n\n"},
      {name:"Covid", value:"Etherium Security te mostrara informacion sobre la pandemia que estamos viviendo en cada pais\n**Uso:**"+"`" + `${prefix}Covid <Pais>` + "`\n\n"},
      {name:"Emojify", value:"Crea textos con emojis\n**Uso:**"+"`" + `${prefix}emojify <texto>` + "`\n\n"},
      {name:"Ascii", value:"Envia un mensaje al canal en formato ascii\n**Uso:**"+"`" + `${prefix}ascii <texto>` + "`\n\n"},
      {name:"Gif", value:"Busca un gif de algo o alguien\n**Uso:**"+"`" + `${prefix}gif <referencia>` + "`\n\n"},
      {name:"Ejecutar", value:"Ejecuta alguien de la nave <AmongUS>\n**Uso:**"+"`" + `${prefix}ejecutar <menciona un user>` + "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const musica = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("💿 Musica - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Play", value:"Añadiras una canción a la PlayList\n**Uso:**"+"`" + `${prefix}Play <Link / Nombre>`+ "`\n\n"+ hr},
      {name:"Stop", value:"Eliminarás la PlayList y el Bot saldrá del canal de voz\n**Uso:**"+"`" + `${prefix}Stop`+ "`\n\n"+ hr},
      {name:"Skip", value:"Salteara la canción que esté colocada a la siguiente en la PlayList\n**Uso:**"+"`" + `${prefix}Skip`+ "`\n\n"+ hr},
      {name:"Pause", value:"Pausaras la canción que esté colocada\n**Uso:**"+"`" + `${prefix}Pause` + "`\n\n"+ hr},
      {name:"Resume", value:"Puedes hacerle una pregunta a Etherium y el te respondera\n**Uso:**"+"`" + `${prefix}Resume <pregunta>` + "`\n\n"+ hr},
      {name:"Volumen", value:"Puedes subir o bajar el volumen del bot\n**Uso:**"+"`" + `${prefix}Volumen` + "`\n\n"+ hr},
      {name:"Queue", value:"Enseñará las canciones que estén en la PlayList\n**Uso:**"+"`" + `${prefix}queue` + "`\n\n"+ hr},
      {name:"Np", value:"Enseñará la canción que esté colocada\n**Uso:**"+"`" + `${prefix}np` + "`\n\n"+ hr},
      {name:"loop", value:"Puedes activar el modo Loop y se repetira la canción que esté reproduciendose\n**Uso:**"+"`" + `${prefix}loop` + "`\n\n"+ hr}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const GiveAway = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🎉 GiveAway - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"gstart", value:"Iniciaras un sorteo en el canal que gustes\n**Uso:**"+"`" + `${prefix}gstart <#canal> <Duración> <ganadores> <Premio>`+ "`\n\n"+ hr},
      {name:"gstop", value:"Terminarás un sorteo que hayas hecho\n**Uso:**"+"`" + `${prefix}gstop <ID-Mensaje>`+ "`\n\n"+ hr},
      {name:"greroll", value:"Volveras a hacer el sorteo para buscar otro ganador\n**Uso:**"+"`" + `${prefix}greroll <ID-Mensaje>`+ "`\n\n"+ hr}, )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const VIP = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("💎 VIP - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Backup", value:"Verás los comandos de Backup\n**Uso:**"+"`" + `${prefix}backup`+ "`\n\n"+ hr},
      {name:"Backup-create", value:"Crearas un backup de tu servidor\n**Uso:**"+"`" + `${prefix}backup-create`+ "`\n\n"+ hr},
      {name:"Backup-delete", value:"Eliminaras el backup creador previamente\n**Uso:**"+"`" + `${prefix}backup-delete <ID-Backup>`+ "`\n\n"+ hr},
      {name:"Backup-load", value:"Cargaras el backup creado previamente\n**Uso:**"+"`" + `${prefix}backup-load <ID-Backup>`+ "`\n\n"+ hr},
      {name:"Vip", value:"Enseñara las funciones premium\n**Uso:**"+"`" + `${prefix}vip`+ "`\n\n"+ hr},
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const Perfil = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🎭 Perfil - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Perfil", value:"Podras ver tu perfil y el de otros\n**Uso:**"+"`" + `${prefix}perfil [Mención/ID]`+ "`\n\n"+ hr},
      {name:"Crear-perfil", value:"Crearas tu perfil\n**Uso:**"+"`" + `${prefix}Crear-perfil`+ "`\n\n"+ hr},
      {name:"Eliminar-Perfil", value:"Eliminaras tu perfil\n**Uso:**"+"`" + `${prefix}Eliminar-perfil`+ "`\n\n"+ hr},
      {name:"Config-color", value:"Puedes configurar el color de tu perfil\n**Uso:**"+"`" + `${prefix}config-color <#Codigo-Hex>`+ "`\n\n"+ hr},
      {name:"Config-desc", value:"Puedes modificar tu descripción\n**Uso:**"+"`" + `${prefix}Config-desc <texto>`+ "`\n\n"+ hr},
      {name:"Config-Titulo", value:"Podras cambiar el titulo de tu perfil\n**Uso:**"+"`" + `${prefix}Config-titulo <Titulo>`+ "`\n\n"+ hr},
      {name:"Config-edad", value:"Puedes modificar tu edad\n**Uso:**"+"`" + `${prefix}Config-edad <edad>`+ "`\n\n"+ hr},
      {name:"Config-sexo", value:"Pudes cambiar el sexo de tu perfil\n**Uso:**"+"`" + `${prefix}Config-sexo`+ "`\n\n"+ hr},
      {name:"Tienda", value:"Se mostrara la tienda de Etherium Security\n**Uso:**"+"`" + `${prefix}tienda`+ "`\n\n"+ hr}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const Soporte = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🌀 Soporte - Comandos 🤖")
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Sugerencia", value:"Puedes hacer una sugerencia que llegara al equipo de soporte\n**Uso:**"+"`" + `${prefix}Sugerencia <texto>`+ "`\n\n"+ hr},
      {name:"Soporte", value:"Te contactaras con el equipo de soporte\n**Uso:**"+"`" + `${prefix}Soporte <texto>`+ "`\n\n"+ hr},
      {name:"Reportar", value:"Puedes reportar a un usuario y l\n**Uso:**"+"`" + `${prefix}Reportar <texto>`+ "`\n\n"+ hr}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const Accion = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle(":space_invader: Accion - Comandos 🤖")
    .setDescription(`**Escribe el siguiente comando para poder ver la segunda parte!**\n${prefix}ayuda accion2`)
    .setURL("https://discord.gg/dc9QbTE3Y6")
    .addFields(
      {name: `\u200B`, value: `\u200B`},
      {name:"Lamer", value:"Lamer a un usuario/a\n**Uso:**"+"`" + `${prefix}lamer <menciona un user>`+ "`\n`"},
      {name:"Mano", value:"Darle la mano a un usuario/a\n**Uso:**"+"`" + `${prefix}mano <menciona un user>`+ "`\n"},
      {name:"Matar", value:"Asesina a un usuario/a\n**Uso:**"+"`" + `${prefix}matar <menciona un user>`+ "\n`"},
      {name:"Palmadita", value:"Darle una palmada acariciante a un usuario/a\n**Uso:**"+"`" + `${prefix}palmadita <menciona un user>`+ "`\n"},
      {name:"Presumido", value:"Envia una foto presumida aleatoria\n**Uso:**"+"`" + `${prefix}presumido`+ "\n`"},
      {name:"Sonrisa", value:"Demuestra tu sonrisa\n**Uso:**"+"`" + `${prefix}sonrisa`+ "\n`"},
      {name:"Triste", value:"Envia una foto sad alazar\n**Uso:**"+"`" + `${prefix}triste`+ "`\n`"}
    )
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setTimestamp()

    const Accion2 = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle(":space_invader: Accion 2 - Comandos 🤖")
    .setDescription(`**Escribe el siguiente comando para poder ver la primera parte!**\n${prefix}ayuda accion`)
    .setURL("https://discord.gg/dc9QbTE3Y6")
    .addFields(
      {name: `\u200B`, value: `\u200B`},
      {name:"Abrazo", value:"Abraza a un amigo/a\n**Uso:**"+"`" + `${prefix}abrazo <menciona un user>`+ "`\n`"},
      {name:"Baile", value:"Demuestra tu talento de bailar\n**Uso:**"+"`" + `${prefix}bailar`+ "\n`"},
      {name:"Beber", value:"Bebe una soda\n**Uso:**"+"`" + `${prefix}beber`+ "``\n\n``"},
      {name:"Besar", value:"Besa a un amigo/a\n**Uso:**"+"`" + `${prefix}besar <menciona un user>`+ "\n`"},
      {name:"Bofetada", value:"Darle una bofetada a una persona\n**Uso:**"+"`" + `${prefix}bofetada <menciona un user>`+ "``\n\n``"},
      {name:"Canta", value:"Canta para las personas\n**Uso:**"+"`" + `${prefix}canta`+ "\n`"},
      {name:"Comer", value:"Come algo aleatorio\n**Uso:**"+"`" + `${prefix}comer`+ "\n`"},
    )
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setTimestamp()

    const diversion2 = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🎈 Diversión 2 - Comandos 🤖")
    .setDescription(`**Escribe el siguiente comando para poder ver la primera parte!**\n${prefix}ayuda diversion\n\n**Y puedes ver la tercera parte escribiendo**\n${prefix}ayuda diversion3`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Buscaminas", value:"Buscaminas comun\n**Uso:**"+"`" + `${prefix}buscaminas`+ "`\n\n"},
      {name:"Buscaminasv2", value:"Personaliza tu propio buscaminas!\n**Uso:**"+"`" + `${prefix}buscaminasv2 <filas> <columnas> <bombas>`+ "`\n\n"},
      {name:"PPT", value:"Juega ppt con el bot!\n**Uso:**"+"`" + `${prefix}ppt <piedra | papel | tijera>`+ "`\n\n"},
      {name:"Disparar", value:"Envia una imagen apuntandole al usuario mencionado\n**Uso:**"+"`" + `${prefix}disparar <menciona al user>` + "`\n\n"},
      {name:"F - Respeto", value:"Representa tus respetos hacia un usuario/a\n**Uso:**"+"`" + `${prefix}f <menciona al user>` + "`\n\n"},
      {name:"Tonto", value:"El bot te dira un % de cuanto tonto sos\n**Uso:**"+"`" + `${prefix}tonto <menciona un user>` + "`\n\n"},
      {name:"Love", value:"El bot te dira un % de su amor\n**Uso:**"+"`" + `${prefix}love <user1> <user2>` + "`\n\n"},
      {name:"MonedaFlip", value:"Lanza la moneda y gana!\n**Uso:**"+"`" + `${prefix}monedaflip` + "`\n\n"},
      {name:"Traducir", value:"Traduce textos\n**Uso:**"+"`" + `${prefix}traducir <idioma> <texto>` + "`\n\n"},
      {name:"PhComment", value:"Ingresa textos en una pagina!\n**Uso:**"+"`" + `${prefix}ph <texto>` + "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")


    const nsfw = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle(":underage: NSFW - Comandos 🤖")
    .setDescription(`**Esto solamente se puede hacer en canales *NSFW***`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"ASS", value:"Envia imagenes-gifs de un **ASS**!\n**Uso:**"+"`" + `${prefix}ass`+ "`\n\n"},
      {name:"BOOBS", value:"Envia imagenes-gifs de **BOOBS**!\n**Uso:**"+"`" + `${prefix}boobs`+ "`\n\n"},
      {name:"UPS", value:"Envia imagenes-gifs **+18 **!\n**Uso:**"+"`" + `${prefix}ups`+ "`\n\n"},
      {name:"4K", value:"Envia imagenes **4K +18**!\n**Uso:**"+"`" + `${prefix}4k`+ "`\n\n"},
      {name:"PORN", value:"Envia imagenes-gifs de **PORN +18**!\n**Uso:**"+"`" + `${prefix}porn`+ "`\n\n"},
      {name:"PUSSY", value:"Envia imagenes-gifs **PUSSY`S +18**!\n**Uso:**"+"`" + `${prefix}pussy`+ "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const hentai = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle(":underage: HENTAI NSFW - Comandos 🤖")
    .setDescription(`**Esto solamente se puede hacer en canales *NSFW***`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"HASS", value:"Envia imagenes-gifs de un **HENTAI ASS**!\n**Uso:**"+"`" + `${prefix}hass`+ "`\n\n"},
      {name:"HANAL", value:"Envia imagenes-gifs de **HENTAI ANAL**!\n**Uso:**"+"`" + `${prefix}hanal`+ "`\n\n"},
      {name:"HENTAI", value:"Envia imagenes-gifs **HENTAI**!\n**Uso:**"+"`" + `${prefix}hentai`+ "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const diversion3 = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("🎈 Diversión 3 - Comandos 🤖")
    .setDescription(`**Escribe el siguiente comando para poder ver la primera parte!**\n${prefix}ayuda diversion\n\n**Y puedes ver la segunda parte escribiendo**\m${prefix}ayuda diversion2`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"ChangeMyMind", value:"Escribe un texto en un cartel\n**Uso:**"+"`" + `${prefix}cmm <texto>`+ "`\n\n"},
      {name:"Ship", value:"Mirar a otra persona!\n**Uso:**"+"`" + `${prefix}ship <user1> <user22>`+ "`\n\n"},
      {name:"Tweet", value:"Escribe un tweet falso!\n**Uso:**"+"`" + `${prefix}tweet <user> <texto>`+ "`\n\n"},
      {name:"Wallpaper", value:"Envia una imagen apuntandole al usuario mencionado\n**Uso:**"+"`" + `${prefix}wallpaper` + "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const verify = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle("\<a:ES_verified:770984597437022220>  Verify - Comandos 🤖")
    .setDescription(`**SISTEMA EN VERIFICACION *BETA***`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"SetVerification", value:"Activa el sistema de verificacion en un canal!\n**Uso:**"+"`" + `${prefix}sv <#canal> <rol>`+ "`\n\n"},
      {name:"Verify", value:"Verificate!\n**Uso:**"+"`" + `${prefix}verify`+ "`\n\n"},
      {name:"DisableVerification", value:"Desactiva y borra la verificacion de tu servidor de discord!\n**Uso:**"+"`" + `${prefix}dv`+ "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")

    const administracion2 = new discord.MessageEmbed()
    .setColor("#DF6AF9")
    .setTitle(":crossed_swords: Administracion 2 - Comandos 🤖")
    .setDescription(`**ADMINISTRACION 2 *BETA***\n **Para ver la primera parte escribe**\n ${prefix}ayuda administracion`)
    .setURL("https://discord.gg/Jm3hAv7")
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {name:"Añadir Rol", value:"Añadir el rol a un miembro!\n**Uso:**"+"`" + `${prefix}arol <@usuario> <@rol>`+ "`\n\n"},
      {name:"Quitar Rol", value:"Quitarle el rol a un miembro!\n**Uso:**"+"`" + `${prefix}qrol <@usuerio> <@rol>`+ "`\n\n"},
      {name:"Sugerir", value:"Escribe una sugerencia!\n**Uso:**"+"`" + `${prefix}sugerir <texto>`+ "`\n\n"},
      {name:"Reset Warns", value:"Eliminar todo los warns de un usuario!\n**Uso:**"+"`" + `${prefix}rwarns <@usuerio>`+ "`\n\n"},
      {name:"Warnear", value:"Warn por incumplir una normativa del servidor!\n**Uso:**"+"`" + `${prefix}warn <@usuario> <razòn>`+ "`\n\n"},
      {name:"Warns", value:"Mira la cantidad de warns de un usuario!\n**Uso:**"+"`" + `${prefix}warns <@usuerio>`+ "`\n\n"},
      {name:"Encuestas", value:"Crea una encuesta para tu comunidad!\n**Uso:**"+"`" + `${prefix}encuesta <#canal> <texto>`+ "`\n\n"}
      )
    .setTimestamp()
    .setThumbnail("https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
    .setFooter("<> = Obligatorio , [] = Opcional", "https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")



    //                 fin    EMBEDS                  //

    if (!args[0]) {
      message.channel.send(loading).then(async (message) => {
        await message.edit(ayuda2)
      })
    }

    if (args[0] === 'bot') {
      message.channel.send(loading).then(async (message) => {
        await message.edit(bot)
      })
    }

    if (args[0] === 'administracion'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(administracion)
      })
    }

    if(args[0] === 'configuracion'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(configuracion)
      })
    }

    if(args[0] === 'diversion'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(diversion)
      })
    }

    if(args[0] === 'musica'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(musica)
      })
    }

    if(args[0] === 'giveaway'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(GiveAway)
      })
    }

    if(args[0] === 'vip'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(VIP)
      })
    }

    if(args[0] === 'perfil'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(Perfil)
      })
    }

    if(args[0] === 'soporte'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(Soporte)
      })
    }

    if(args[0] === 'accion'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(Accion)
      })
    }
    
    if(args[0] === 'accion2'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(Accion2)
      })
    }

    if(args[0] === 'diversion2'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(diversion2)
      })
    }

    if(args[0] === 'nsfw'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(nsfw)
      })
    }

    if(args[0] === 'hentai'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(hentai)
      })
    }

    if(args[0] === 'diversion3'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(diversion3)
      })
    }

    if (args[0] === 'verify'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(verify)
      })
    }

    if (args[0] === 'administracion2'){
      message.channel.send(loading).then(async (message) => {
        await message.edit(administracion2)
      })
    }


  }
}