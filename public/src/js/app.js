let deferredPrompt;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {});
}

//Hiding the banner
windiw.addEventListener('beforeinstallprompt', () => {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
});
