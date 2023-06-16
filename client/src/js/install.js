const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
if (!promptEvent) {
  return;
}
promptEvent.prompt();
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log("appinstalled", event);
});
