module.exports = {
    app: {
        px: '-!',
        token: 'OTc5ODMyODY2MDY0MTk1NjE0.Gz-KXT.PSKKtXKtH6xlxB3Fwgu_kOWtRZOEVV05A-8eoI',
        playing: '-! For Playing 🤖'
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
