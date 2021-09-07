import {ICommand} from 'wokcommands'
import {MessageEmbed} from 'discord.js'
import config from '../config'
export default {

    category: 'Moderation',
    description: 'Bans a member',
  

    expectedArgs: '<target> [reason]',
    minArgs: 1,
  

    permissions: ['ADMINISTRATOR'],
  
    guildOnly: true,
  
    callback: ({ message }) => {
      
        if (config.collection("843126377850470431").doc('settings').canswear== false){
            config.collection("843126377850470431").doc('settings').update(
                {canswear : true }
               
            )
            message.reply("anti bad word enabled")
        }else{
            config.collection("843126377850470431").doc('settings').update(
                {canswear : false }
               
            )
            message.reply("anti bad word disabled")
        }
      

      message.reply("Antispam truned on")
    },
  } as ICommand