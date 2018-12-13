const discord = require("discord.js");
const snekfetch = require("snekfetch")

module.exports.run = async(bot, message, args) => {
    let api = `https://cod-api.theapinetwork.com/api/stats/bo4/${args[0]}/${args[1]}?type=multiplayer`
		
		snekfetch.get(api).then(r => {
			const embed = new discord.RichEmbed()
			.setTitle(`Black ops 4 stats from ${args[0]}`)
			.setColor("#fa521c")
			.addField("Wins", `${r.body.stats.wins}`, true)
			.addBlankField(true)
			.addField("Loses", `${r.body.stats.losses}`, true)
			.addField("Kills", `${r.body.stats.kills}`, true)
			.addBlankField(true)
			.addField("Deaths", `${r.body.stats.deaths}`, true)
			.addField("Prestige", `${r.body.stats.prestige}`, true)
			.addBlankField(true)
			.addField("Level", `${r.body.stats.level}`, true)
			message.channel.send(embed)
		})
}

module.exports.help = {
    name: "bo4"
}