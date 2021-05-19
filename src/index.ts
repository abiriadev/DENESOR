import * as MSG from 'msg.ts'
import { promises as fs } from 'fs'
// import path from 'path'
import introCommandF from './commands/introCommand'

// console.log(Command)

const bot = new MSG.Bot()

!(async function() {
    try {
        const config = JSON.parse(
            (await fs.readFile('./settings/settings.json')).toString(),
        )
        bot.setConfig(config)

        bot.addCommand(introCommandF(config))

        bot.on('readyState', (bot: MSG.Bot) => {
            console.log(`${bot?.user?.tag} is ready!`)
        })

        if (!process.env.TOKEN) {
            console.log('token is undefined')
            process.exit(3)
        }

        bot.login(process.env.TOKEN)
    } catch (e) {
        console.error(e)
    }
})()
