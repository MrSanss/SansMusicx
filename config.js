module.exports = {
    app: {
        px: '-!',
        token: 'OTc5ODMyODY2MDY0MTk1NjE0.G32UXx.Uelol4zdLtJ8Affp5sNnG3SdHdPlQVw5VchJqA',
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
