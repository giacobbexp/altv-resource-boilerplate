import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    // do something
    alt.emitClient(player, 'resource:playerConnected'); // change to your resource name, i.e. chat:playerConnected
});
