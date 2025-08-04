// const CACHE_NAME = 'cat-app-v1';
// const urlsToCache = [
//   '/',
//   '/manifest.json',
//   '/icon-192x192.png',
//   '/icon-512x512.png'
// ];

// // Service Worker 설치 시 캐시 생성
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         console.log('캐시가 열렸습니다');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// // 네트워크 요청 가로채기
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         // 캐시에서 찾으면 반환
//         if (response) {
//           return response;
//         }
        
//         // 캐시에 없으면 네트워크에서 가져오기
//         return fetch(event.request)
//           .then((response) => {
//             // 유효한 응답이 아니면 그대로 반환
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // 응답을 복제하여 캐시에 저장
//             const responseToCache = response.clone();
//             caches.open(CACHE_NAME)
//               .then((cache) => {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           });
//       })
//   );
// });

// // 캐시 업데이트
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             console.log('이전 캐시 삭제:', cacheName);
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// }); 