import os
module.exports = {
    
    app: {
        px = os.getenv('px','. / $ !p')                           # Enter trigger character to summon your bot
        token = os.getenv('token','Bot Token Here')               # Get your API ID from https://https://discord.com/developers/applications/
        playing = os.getenv('playing','-! For playing')           # Enter a sentence for bot status
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
