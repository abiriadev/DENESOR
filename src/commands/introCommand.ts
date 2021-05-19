import * as MSG from 'msg.ts'
import discord from 'discord.js'

// @ts-ignore
function introGen(ctx: MSG.Context) {
    const embed = new discord.MessageEmbed({
        title: '환영합니다!',
    })
    return embed
}

export default function introCommand(config: any) {
    return new MSG.Command(
        (ctx: MSG.Context) => ctx.ex?.content === config.prefix,
        (ctx: MSG.Context) => {
            ctx.msg.channel.send(introGen(ctx))

            return ctx.finish()
        },
    )
}
