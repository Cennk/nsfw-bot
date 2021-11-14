const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
  
  const config = require('../config.js')   
   
  let pages = [`**Ass:** \`${config.prefix}ass\`\nI know you like anime ass~ uwu\n**Bdsm:** \`${config.prefix}bdsm\`\n	If you don't know what it is, search it up\n**Blowjob:** \`${config.prefix}blowjob\`\n Basically an image of a girl sucking on a sharp blade!\n**Cum:** \`${config.prefix}cum\`\n	Basically sticky white stuff that is usually milked from sharpies.\n**Doujin:** \`${config.prefix}doujin\`\n	Sends a random doujin page imageURL!\n**Feet:** \`${config.prefix}feet\`\n	So you like smelly feet huh?\n**Femdom:** \`${config.prefix}femdom\`\n	Female Domination?\n**Foxgirl:** \`${config.prefix}foxgirl\`\n	Girl's that are wannabe foxes, yes\n**Gifs:** \`${config.prefix}gifs\`\n	Basically an animated image, so yes :3\n**Glasses:** \`${config.prefix}glasses\`\n	Girls that wear glasses, uwu~\n**Hentai:** \`${config.prefix}hentai\`\n	Sends a random vanilla hentai imageURL~\n**Netorare:** \`${config.prefix}netorare\`\n	Wow, I won't even question your fetishes.\n**Maid:** \`${config.prefix}maid\`\n	Maids, Maid Uniforms, etc, you know what maids are :3`, `**Masturbation:** \`${config.prefix}masturbation\`\n	Solo Queue in CSGO!\n**Orgy** \`${config.prefix}orgy\`\n	Group Lewd Acts\n**Panties** \`${config.prefix}panties\`\n	I mean... just why? You like underwear?\n**Pussy** \`${config.prefix}pussy\`\n	The genitals of a female, or a cat, you give the meaning.\n**School** \`${config.prefix}school\`\n	School Uniforms!~ Yatta~!\n**Succubus** \`${config.prefix}succubus\`\n	Spooky Succubus, oh I'm so scared~ Totally don't suck me~\n**Tentacles** \`${config.prefix}tentacles\`\n	I'm sorry but, why do they look like intestines?\n**Thighs** \`${config.prefix}thighs\`\n	The top part of your legs, very hot, isn't it?\n**UglyBastard** \`${config.prefix}uglybastard\`\n	The one thing most of us can all agree to hate :)\n**Uniform:** \`${config.prefix}uniform\`\n	Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~\n**Yuri:** \`${config.prefix}yuri\`\n	Girls on Girls, and Girl's only!<3\n**ZettaiRyouiki:** \`${config.prefix}zettairyouiki\`\n	That one part of the flesh being squeeze in thigh-highs~<3`]; 
  let page = 1; 
 
  const aktali = new Discord.MessageEmbed()
    .setAuthor(`${config.bot} - Help Menu!`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setColor("5b9dbc")
    .setFooter(`Page: ${page} - ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(aktali).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        aktali.setAuthor(`${config.bot} - Help Menu!`, client.user.avatarURL())
        aktali.setDescription(pages[page-1]); 
        aktali.setThumbnail(client.user.avatarURL())
        aktali.setFooter(`Page: ${page} - ${pages.length}`);
        aktali.setImage("https://media.discordapp.net/attachments/903036787499356171/903037029967888404/unknown.png")
        aktali.setColor("5b9dbc") 
        msg.edit(aktali)
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        aktali.setAuthor(`${config.bot} - Help Menu!`, client.user.avatarURL())
        aktali.setDescription(pages[page-1]); 
        aktali.setThumbnail(client.user.avatarURL())
        aktali.setFooter(`Page: ${page} - ${pages.length}`);
        aktali.setColor("5b9dbc") 
        msg.edit(aktali) 
      })
   
    })
 
  })
 
}

exports.config = {
  name: "list",
  aliases: []
};
