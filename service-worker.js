"use strict";var precacheConfig=[["/Portfolio/index.html","a76267b0ba938361588efaf3e42889d7"],["/Portfolio/static/css/main.05326ab3.css","0de6f5074dd6f891829b8bc2f2618f5e"],["/Portfolio/static/js/main.84f240a6.js","32449a80e44c75171787e93d8fa8e5fb"],["/Portfolio/static/media/adobe-xd.3ae06dd2.svg","3ae06dd212619158f864a33fe9d36df6"],["/Portfolio/static/media/bootstrap4.ca3357b9.svg","ca3357b96f34e424a8857021fb2b10db"],["/Portfolio/static/media/css3.74154c1d.svg","74154c1d611acd0c4e4a05f8da05ebc6"],["/Portfolio/static/media/electron.36ddd81d.svg","36ddd81de84ece380fce34071ce6faa4"],["/Portfolio/static/media/email.b838a12f.svg","b838a12fdb725a27de5b1a8d50193b77"],["/Portfolio/static/media/github-logo.3fba4a70.svg","3fba4a700b50020d09d24a979049818e"],["/Portfolio/static/media/github.9329315b.svg","9329315b1b1acb1ab416b8dbb86ce46b"],["/Portfolio/static/media/graphql.6901aba6.svg","6901aba68c5719f128963a626af49be0"],["/Portfolio/static/media/heroku.b88bbc07.svg","b88bbc0704fc294335f8d28695f41355"],["/Portfolio/static/media/html5.aacfe0ab.svg","aacfe0abe303e13602039a12cdc57db8"],["/Portfolio/static/media/iphone.dee92b17.svg","dee92b17a696276913ef815566dd7a3d"],["/Portfolio/static/media/javascript.69bf340b.svg","69bf340b94df4306ae56d13fb3473469"],["/Portfolio/static/media/json.4d7dd16f.svg","4d7dd16f659bdbfde6f9ee2ba79d7257"],["/Portfolio/static/media/laravel.bea042bc.svg","bea042bcda99b786241d4a1e9d80fa87"],["/Portfolio/static/media/linkedin.b1cdaf40.svg","b1cdaf4051d4d6c06241d707511f420b"],["/Portfolio/static/media/mongodb.2985235d.svg","2985235df31b8742d893d5b7e80145c5"],["/Portfolio/static/media/mysql.f80a91ba.svg","f80a91ba03fbf0e99ea6949aa3a6399e"],["/Portfolio/static/media/nodejs.8f93cff2.svg","8f93cff2691d940606becb74ce015a49"],["/Portfolio/static/media/photoshop.4f9a4473.svg","4f9a447318540c537af4661b92b799e9"],["/Portfolio/static/media/php.7634d1a3.svg","7634d1a3c06643e9394adc4ba35d7d2e"],["/Portfolio/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/Portfolio/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/Portfolio/static/media/sass.b446ca5a.svg","b446ca5a397c1ef6fb94cd02c4e94335"],["/Portfolio/static/media/swift.74ba2b9c.svg","74ba2b9c367f7d68236f83aada87fb2e"],["/Portfolio/static/media/symfony.ed9c8446.svg","ed9c8446eae6ca2ce3e757d4466eeec6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var o="/Portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(o,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});