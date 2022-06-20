const discord = require('discord.js')
const {
    play
} = require("../../include/play");
const YoutubeAPI = require('simple-youtube-api')
const ytdl = require('ytdl-core')
let Youtube_Api_Key = "AIzaSyBM8Sd3g9_5wxTdNVRCrFMl3RCAEgOXki0"
const youtube = new YoutubeAPI(Youtube_Api_Key);

module.exports = {
    nombre: 'play',
    alias: ["p"],
    desc: "Inicia una canción que mas te guste",
    run: async (client, message, args) => {

        const SyntaxA = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Syntax Error: `play`" + "__`<URL/Nombre>`__")
        .setTimestamp()
        .setFooter("Etherium Security")
        const SyntaxE = new discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Etherium Security")
        .setDescription("Error:" + "__`Debés estar en un canal de voz`__")
        .setTimestamp()
        .setFooter("Etherium Security")

        const canal = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription("¡Necesitas unirte al canal de voz!")
        .setFooter("Etherium Security | Muisc")

        const uso = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription("Modo de uso: play <YouTube URL | Video Name>")
        .setFooter("Etherium Security | Muisc")


        const {
            channel
        } = message.member.voice;

        const serverQueue = message.client.queue.get(message.guild.id);

        if (!channel) return message.channel.send(SyntaxE)

        if (!args.length)
            return message.channel.send(SyntaxA)

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT"))
            return message.reply("No puedo conectarme al canal de voz, asegurate que tengo permisos!");
        if (!permissions.has("SPEAK"))
            return message.reply("No puedo hablar en el canal de voz, asegurate que tengo permisos!");

        const search = args.join(" ");
        const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
        const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
        const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
        const url = args[0];
        const urlValid = videoPattern.test(args[0]);

        if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
            return message.client.commands.get("playlist").execute(message, args);
        }

        const queueConstruct = {
            textChannel: message.channel,
            channel,
            connection: null,
            songs: [],
            loop: false,
            volume: 100,
            playing: true
        };

        let songInfo = null;
        let song = null;

        if (urlValid) {
            try {
                songInfo = await ytdl.getInfo(url);
                song = {
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    duration: songInfo.videoDetails.lengthSeconds
                };
            } catch (error) {
                console.error(error);
                return message.reply(error.message).catch(console.error);
            }
        } else if (scRegex.test(url)) {
            try {
                const trackInfo = await scdl.getInfo(url, SOUNDCLOUD_CLIENT_ID);
                song = {
                    title: trackInfo.title,
                    url: trackInfo.permalink_url,
                    duration: Math.ceil(trackInfo.duration / 1000)
                };
            } catch (error) {
                console.error(error);
                return message.reply(error.message).catch(console.error);
            }
        } else {
            try {
                const results = await youtube.searchVideos(search, 1);
                songInfo = await ytdl.getInfo(results[0].url);
                song = {
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    duration: songInfo.videoDetails.lengthSeconds
                };
            } catch (error) {
                console.error(error);
                return message.reply(error.message).catch(console.error);
            }
        }

        const playliston = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RED")
        .setDescription(`**${song.title}**\n Fue añadido a la lista de reproducción por ${message.author}`)
        .setFooter("Etherium Security | Muisc")

        if (serverQueue) {
            serverQueue.songs.push(song);
            return serverQueue.textChannel
                .send(playliston)
                .catch(console.error);
        }

        queueConstruct.songs.push(song);
        message.client.queue.set(message.guild.id, queueConstruct);

        const reprodu = new discord.MessageEmbed()
        .setTitle("Etherium Security | Music")
        .setColor("RANDOM")
        .setDescription(`🎶 Reproduciendo **${song.title}**\n${song.url}`)
        .setFooter("Etherium Security | Muisc")

        try {
            queueConstruct.connection = await channel.join();
            await queueConstruct.connection.voice.setSelfDeaf(true);
            play(queueConstruct.songs[0], message);
            queueConstruct.textChannel.send(reprodu).catch(console.error);
        } catch (error) {
            console.error(error);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return message.channel.send(`No me puedo unir al canal ${error}`).catch(console.error);
        }
    }
}