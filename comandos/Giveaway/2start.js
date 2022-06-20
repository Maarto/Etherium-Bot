const ms = require('ms');

module.exports = {
    nombre: 'gstart',
    alias: [],
    desc: "Crea un sorteo!",
    run: async(client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':warning: Il vous manque la permission `administrateur` pour pouvoir utiliser cette commande.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(`:x: ¡Tienes que mencionar un canal válido!`);
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('¡Tienes que especificar una duración válida!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(':x: ¡Tienes que especificar un número válido de ganadores!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: ¡Tienes que especificar un premio válido!');
    }

    // Start the giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
      // Messages
        messages: {
            giveaway: ("@everyone\n\n")+"\<a:es_giveaways:790430082333671444>   **GIVEAWAY** \<a:es_giveaways:790430082333671444>  ",
            giveawayEnded: ("@everyone\n\n")+"\<a:es_giveaways:790430082333671444>   **GIVEAWAY TERMINADO** \<a:es_giveaways:790430082333671444>  ",
            timeRemaining: "Tiempo restante: **{duration}**!",
            inviteToParticipate: "Reacciona con 🎉 para participar",
            winners: "ganador(s)",
            winMessage: "Felicitaciones, **{winners}**! Tu ganaste **{prize}**!",
            embedFooter: "Giveaways",
            noWinner: "Giveaway anulado, no hay participantes validos",
            endedAt: "Termino",
            units: {
                seconds: "segundos",
                minutes: "minutos",
                hours: "horas",
                days: "dias",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`El sorteo inicio en ${giveawayChannel}!`);

}
}
