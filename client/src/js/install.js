const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA, stores triggered  event
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompts = event;
    butInstall.classList.toggle('hiden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompts;
    if (!promptEvent) {
        return;
       }
promptEvent.prompt();
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);

});

// clears the prompt
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

});
