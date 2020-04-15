'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/image_01.png": "0fe91ff4aa31e16b78454b97ba9c7071",
"assets/assets/image_02.jpg": "ae58488c76ebd2073d460c4d915ff3c0",
"assets/assets/image_03.jpg": "7e3296135ba4f1eeaf8f08207115e62d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d65eeda5a755043be86dd59999c57a9e",
"/": "d65eeda5a755043be86dd59999c57a9e",
"main.dart.js": "6a2abb8688223866df13448569b90e9a",
"manifest.json": "86f6cd931318067e0acc64c92976eec1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
