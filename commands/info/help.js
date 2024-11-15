const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",
    description: "Helps",
    run: async (client, message, args) => {
        message.delete()
        
        let inline = true
        let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("**__COMMANDS__**")
            .setDescription("**PREFIX:** \`/\`")
            .addField("Fun✨", "\`meme\` \`8ball\` \`avatar\` \`fn store\` \`geton\` \`insta\` \`urban\` \`fn stats\` \`joke\`", inline) 
            .addField("Photo📷", "\`cat\` \`cars\` \`dog\` \`cheese\` \`cursed\`", inline)
            .addField("Moderation👮", "\`warn\` \`report\` \`purge\` \`say\` `ban\` \`kick\`", inline)
            .addField("Developer👨‍💻", "\`suggest\` \`botinfo\` \`bug\` \`support\` \`talk\` \`changelog\`", inline)
            .addField("Weather⛅", "\`weatherc\` \*<-- Celcius\* \`weatherf\` \*<-- Fahrenheit\* ")
        message.author.send(embed);
    }
}