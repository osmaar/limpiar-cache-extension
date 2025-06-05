document.getElementById("clear").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = new URL(tabs[0].url);
    chrome.browsingData.remove({
      origins: [url.origin]
    }, {
      cache: true,
      cookies: true,
      indexedDB: true,
      localStorage: true,
      serviceWorkers: true
    }, () => {
      if (confirm("Datos del sitio limpiados. ¿Recargar página?")) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });
});
