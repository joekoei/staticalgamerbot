const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


  message.channel.send(":ping_pong: Pong! " + (Date.now() - message.createdTimestamp) + "ms")
  message.channel.send(":heart: DiscordAPI: " + bot.ping + "ms")


}

module.exports.help = {
    name: "ping"
}
