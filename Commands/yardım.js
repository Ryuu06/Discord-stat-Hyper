const { dc, MessageEmbed } = require('discord.js')
const Settings = require('../Settings/Settings.json')
const Other = require('../Settings/Other.json')
var prefix = Settings.BotSettings.prefix
exports.run = async (client, message, args) => {

    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTitle("Register Komutları")
    .setDescription(`• \`${prefix}erkek/kadın @Üye İsim Yaş\` Üye Kaydı Yapar.
• \`${prefix}isim @Üye İsim Yaş\` Üye'nin İsmini Değiştirir.
• \`${prefix}isimler @Üye\` Eski İsimleri Gösterir.
• \`${prefix}stat @Üye\` Kayıt Bilgisini Gösterir.
• \`${prefix}kayıtsız @Üye\` Kullanıcıyı Kayıtsıza Atar.`)
    .setTimestamp()
    .setFooter(`HyperFamily`)
    .setColor(Settings.Colors.RED)
    .setImage("https://cdn.discordapp.com/attachments/874236767534972928/878058261629243442/poyrazdanhediye.gif")

  message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım"]
};

module.exports.help = {
  name: 'yardım'
};