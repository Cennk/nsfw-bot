const Discord = require('discord.js');
const Modül = require("akaneko")

exports.run = async (client, message, params) => {  

  const config = require('../config.js')

  const hata = new Discord.MessageEmbed()
  .setAuthor(`HATA!`, message.guild.iconURL())
  .setColor("7b8aff")
  .setDescription("Bu komutu kullanabilmek için öncelikle bir **NSFW** kanalına sahip olmalısınız.")
  .setFooter(`He was asked by ${message.author.tag}.`, message.author.avatarURL())
  .setTimestamp()

  if (!message.channel.nsfw) {
  message.react('❌');
  return message.reply(hata)
  }
  
  const sunucubilgi = new Discord.MessageEmbed()
  .setAuthor(`${config.bot} - Glasses!`, client.user.avatarURL())
  .setColor("7b8aff")
  .setDescription(`You can see a lot of such commands by typing **"${config.prefix}list"**.`)
  .setImage(await Modül.nsfw.glasses())
  .setFooter(`He was asked by ${message.author.tag}.`, message.author.avatarURL())
 	.setTimestamp()

  return message.channel.send(sunucubilgi);
};

exports.config = {
    name: "glasses",
    aliases: []
};