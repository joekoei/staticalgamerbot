const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const embed = new discord.RichEmbed()
    .setTitle("Bot help")
    .addField("t!ping", "Laat de ping zien")
    .addField("t!bo4 (Naam) (platform)", "Bo4 stats")

    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}
