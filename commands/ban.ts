import {ICommand} from 'wokcommands'
import {MessageEmbed} from 'discord.js'
export default {

    category: 'Moderation',
    description: 'Bans a member',
  

    expectedArgs: '<target> [reason]',
    minArgs: 1,
  

    permissions: ['BAN_MEMBERS'],
  
    guildOnly: true,
  
    callback: ({ message, args }) => {
      const target = message.mentions.members?.first()
      
      if (!target) {
        message.reply({
          content: 'Mention the member to kick'
        })
        return
      }
  
      if (!target.kickable) {
        message.reply({
          content: 'Roles unavilable enable bot perms to kick and ban'
        })
        return
      }
  
      args.shift()
      const reason = args.join(' ')
  
      target.ban()
    const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Moderation')
	.setURL('https://www.youtube.com/watch?v=cvh0nX08nRw')
	.setAuthor(message.author.username)
	.setDescription('Banned Member')
    .addField('Member Banned', target.displayName, true)
    .setTimestamp()
	.setFooter('Only for sphs pay adcrs#2465 to make custom bots 2k robux per bot');

      message.reply({ embeds: [exampleEmbed] })
    },
  } as ICommand