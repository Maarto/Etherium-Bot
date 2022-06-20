/*
*    @Nombre EtheriumSecurity
*    @Author MartoOo
*    @Contributors MartoOo - Amadeus - Yashiro - Thomás
*/  

const discord = require('discord.js');
const client = new discord.Client(); 
const {token} = require('./config')
const db = require('megadb')
let prefix_db = new db.crearDB("prefix")
client.queue = new Map();
//////////////////////////////////////////////

client.comandos = new discord.Collection();
const fs = require('fs');
for(const subcarpet of fs.readdirSync('./comandos/')){
    for(const archi of fs.readdirSync(`./comandos/${subcarpet}`)){
        if(archi.endsWith('.js')){
            let fileName = archi.substring(0, archi.length - 3);
            let comando = require(`./comandos/${subcarpet}/${archi}`)
            /*let fileContents = require(`./comandos/${subcarpet}/${archi}`);*/
            client.comandos.set(comando.nombre, comando, fileName)
            console.log("\x1b[32m[✅]: "+'\x1b[35m'+fileName+'\x1b[32m'+" fue cargado con éxito " + '\x1b[0m')
        }
    }
}

for(const file of fs.readdirSync('./eventos/')){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./eventos/${file}`);

        client.on(fileName, fileContents.bind(null, client));

        console.log("\x1b[32m[✅]: "+'\x1b[35m'+fileName+'\x1b[32m'+" fue cargado con éxito " + '\x1b[0m')
    }
}

//                            Fin Comand Handler                        //




//                          Inicio Evento Mensaje                               //

client.on('message', async message => {
    if (!message.guild) return;
    const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";
    let forceban = new db.crearDB("Ids");
    let usersban = await forceban.obtener("ids");
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))

    if(usersban.includes(message.author.id)) return message.channel.send(":information_source: ``|`` **Estas en la lista negra por lo tanto no puedes usar comandos.**")

    if(cmd) {
        return cmd.run(client, message, args)
    }
})


//                          Fin Evento Mensaje                               //

//                          Mention Bot - Prefix                            //

client.on('message', async message =>{
    if (!message.guild) return;
    const prefix = prefix_db.tiene(message.guild.id) ? await prefix_db.obtener(message.guild.id) : "es/";

    if (message.content.match(`^<@!?${client.user.id}>`)){
            const msgEmbed = new discord.MessageEmbed()
            .setTitle("Etherium Security")
            .setDescription(`Mi prefix es : **${prefix}** \n Utiliza el comando ayuda para sabér mis comandos!`)
            .setColor("#20F9CB")
            .setFooter("Etherium Security | Prefix" ,"https://images-ext-2.discordapp.net/external/aDQVETPoT8vIkU-nF3gGPkpVIBbP-PmLdlZ_JkZ6vT0/https/thumbs.gfycat.com/EqualPowerfulKoodoo-size_restricted.gif")
            message.channel.send({embed: msgEmbed})
    }
})


//                          FIN Mention Bot - Prefix                            //

//                              Estados                                     //
client.on('ready', () => {
    /*
    console.log('\x1b[33m' + "===========================================" + '\x1b[0m')
    console.log("\n")
    console.log('\x1b[31m'+"╔═╗┌┬┐┬ ┬┌─┐┬─┐┬┬ ┬┌┬┐  ╔═╗┌─┐┌─┐┬ ┬┬─┐┬┌┬┐┬ ┬"+'\x1b[0m')
    console.log('\x1b[31m'+"║╣  │ ├─┤├┤ ├┬┘││ ││││  ╚═╗├┤ │  │ │├┬┘│ │ └┬┘"+'\x1b[0m')
    console.log('\x1b[31m'+"╚═╝ ┴ ┴ ┴└─┘┴└─┴└─┘┴ ┴  ╚═╝└─┘└─┘└─┘┴└─┴ ┴  ┴ "+'\x1b[0m')
    */

    setInterval(() =>{
        const estados = [
            `Etherium Security está protegiendo `+ client.guilds.cache.size +` servidores!`,
            "Contamos con "+ client.users.cache.size + " Usuarios!",
            "Mencioname para sabér mi prefix!",
            "¿Que esperas para invitarme?",
            "Etherium Security | 2.2"
        ]

        const estado = estados[Math.floor(Math.random() * estados.length)]
        client.user.setActivity(estado, {type: "WATCHING"})
    }, 10000 )
});


//                              FIN - Estados                                     //

const { GiveawaysManager } = require('discord-giveaways');
const { type } = require('os');
const { index } = require('mathjs');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});







client.login(token);