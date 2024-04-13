let contentContainer = null;

if (window.alt === undefined) {
    window.alt = {
        emit: () => { },
        on: () => { },
    };
}

window.addEventListener('load', () => {
    contentContainer = document.querySelector('.content');
    alt.emit('resource:resourceLoaded'); // change to use your resource name, i.e. chat:chatLoaded
});
