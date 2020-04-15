'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dee65982bc039d3251b38df6f1f9e265",
"assets/assets/Calibre%2520Semibold.otf": "85d899ede90fe5568dad1b0438022ab3",
"assets/assets/custom_icons.ttf": "fa69a076bf31b2b94c13b62f7e61deaf",
"assets/assets/image_01.png": "11e0115482c2152e0d5d189d05779df0",
"assets/assets/image_02.jpg": "f6342d4e8aaa9e3073dbaeb190f89aa7",
"assets/assets/image_03.jpg": "055e6e96ec934b93037dc5037f4cdad2",
"assets/assets/image_04.jpg": "ccb0274837f8afa57d748ebe9cccfab2",
"assets/assets/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"assets/assets/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/FontManifest.json": "9856dea07860f4b80340256c9a48946d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
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
