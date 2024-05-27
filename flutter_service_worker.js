'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a821b707e8a8f3850d8ba4632d47f79f",
"version.json": "45e11e1d73a6a7722b1b9c03dbf49a46",
"index.html": "3176e7190912eb1050d6d130c14c597a",
"/": "3176e7190912eb1050d6d130c14c597a",
"main.dart.js": "04d2263a0d71dc7273f1e1a660e3fe66",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1dbe4820140ad9ffba82eeeacb19954e",
"assets/AssetManifest.json": "501faff71b79ca552a1216fe94189ff9",
"assets/NOTICES": "fc0ca3d69de2700b51d608e29a4118ab",
"assets/FontManifest.json": "0e110bc66854bc83e6332feab794ee7e",
"assets/AssetManifest.bin.json": "2900fbb158539ad243b4b4e27264af9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0912d7cb71e56166d5c3e89512ae890b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/javascript.svg": "ca60a139a15167ae52f9d9b65cb718ad",
"assets/assets/images/linkedin_icon.svg": "42e40b74bc1ce4394563f8ab1e984d1e",
"assets/assets/images/android.svg": "9cc578aa85ba67ef0c901459df7273d6",
"assets/assets/images/gitlab.svg": "47efa8fd5840f1f6fbe20afc6956d4d5",
"assets/assets/images/aws.svg": "062bec94b490f38be3f7dd7691892ea5",
"assets/assets/images/github.svg": "623a63e306e6fb67f5221d2dc4c443b0",
"assets/assets/images/android_icon.svg": "5a63cacf11a6994ed01c25c23fe12ed9",
"assets/assets/images/youtube_icon.svg": "4e86fe5b92e4aff015cd0c010d43bdfe",
"assets/assets/images/google_play_icon.svg": "4b9aa68e69116da6172d135b253143b8",
"assets/assets/images/instagram_icon.svg": "efb0ba653912e67015f43efc4c32904e",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/instagram.svg": "5e649b505f7ae95df7a78a83b258def4",
"assets/assets/images/python.svg": "8dc878284c9524c80011871c32cef6e5",
"assets/assets/images/docker.svg": "fdd26c3ca18dc7c6befedb8b7e1e0081",
"assets/assets/images/git.svg": "cd2c31aaa08144624cf84c9111ce2a1f",
"assets/assets/images/blogger.svg": "b32291e54cb3aeb02e45aaad600560ad",
"assets/assets/images/google_icon.svg": "aad5f33a68ea920929d322e774d3b409",
"assets/assets/images/svg_1.svg": "69338d29983949dac46524c5ab3480dd",
"assets/assets/images/svg_2.svg": "d3712c77e5043793e4a43ad5057d529f",
"assets/assets/images/nodejs.svg": "bf75f8511058ebb1b513d0141fd744de",
"assets/assets/images/kotlin.svg": "a7735a82bb1788b6356ba6f03f8ebfc3",
"assets/assets/images/github_icon.svg": "ab4728c21190b20f51ca654cc9ba5983",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/facebook.svg": "0bf00931479d1bb618509537c0ce324b",
"assets/assets/images/google_play.svg": "cc2863d3beb2e8d998b9b52b70101284",
"assets/assets/images/google.svg": "f74e943ff2ee8f841e85ebf5fb0170df",
"assets/assets/images/stripe.svg": "36c1d377befd0e7c89c1dc7bed28f2bc",
"assets/assets/images/fastlane.svg": "e373a0e609f18eca174dfc9ffb5df096",
"assets/assets/images/azure_icon.svg": "2d47407f1b108a292b94ba245988967e",
"assets/assets/images/youtube.svg": "be76d558022df8ccb9e2639645c02592",
"assets/assets/images/django_icon.svg": "da233e2d2eb2fa886848d04ef1665456",
"assets/assets/images/linkedin.svg": "ef36ee3742237d55a06406a46774f433",
"assets/assets/images/docker_icon.svg": "3ec90c521690cf6463cd14603da551e0",
"assets/assets/images/macos.svg": "3317eb2e24c58b3605d3586a25b3cb36",
"assets/assets/images/html.svg": "55be2f7fd3025e8b3d07c2bb4da85824",
"assets/assets/images/logo_white.svg": "6a7ba8dc7fa6fce7e8ea973ed6349cf4",
"assets/assets/images/wave.svg": "8aa58c26eac0e0248e35207104c0cb75",
"assets/assets/images/logo.svg": "e0c7aadbc3d429b51317320fbe4e44fc",
"assets/assets/images/django.svg": "75d32b993a896d92d03d5a32d029a131",
"assets/assets/images/bg_img.jpg": "5a59df09f522091f8b07be2cd0fc25c9",
"assets/assets/fonts/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
