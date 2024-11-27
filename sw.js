self.addEventListener('install', (event) => {
  console.log('Service Worker: დაინსტალირდა');
});
self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
});
