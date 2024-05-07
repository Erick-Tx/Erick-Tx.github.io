
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.a5bb3660b691ff554299.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/707.baseline.en.378a1721f084da90bb10.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/398.baseline.en.cd9721ecb74b38edac70.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.baseline.en.cb7c0dd878319bcdfa65.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a78d66dee25dac20f8f2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.baseline.en.b034168d5d5932189976.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.243513ba08910ff6857f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2.baseline.en.c9d37e98faa0a0d26ddd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.baseline.en.a4f86ac8f0bbf8d9ab36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.3691b35ae40bc78dd48b.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/707.baseline.en.fb7a89f9509cae3c5e21.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.f79e630f70b79519e81e.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.baseline.en.d9dea636e91db7e4b650.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.en.43634e2f9ff4e578fca7.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0273/2346/5866/files/logo_34de519a-799b-4336-8310-774183dcf548_x320.png?v=1613674408"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  