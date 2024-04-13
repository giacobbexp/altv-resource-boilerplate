import * as alt from 'alt-client';

const view = new alt.WebView('http://resource/client/html/index.html');

alt.onServer('resource:playerConnected', playerConnected); // change to your resource name, i.e. chat:playerConnected

const playerConnected = () => {
    // do something on the client
}