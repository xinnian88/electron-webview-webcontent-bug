console.log(2222);

window.addEventListener('load', () => {
  const webview = document.createElement('webview');
  webview.id='test222';
  webview.setAttribute('src', 'https://www.google.com/');
  webview.style='display:inline-flex; width:640px; height:480px';
  window.testWebview = webview;
  document.body.appendChild(webview);
  console.time('loadWebViewCost');
  webview.addEventListener('did-finish-load', () => {
    console.timeEnd('loadWebViewCost');
    const webContent1 = testWebview.getWebContents();
    webContent1.executeJavaScript('console.log(document.body.style.border == "10px solid red")');
    webContent1.openDevTools();
  });
  const webContent1 = testWebview.getWebContents();
  webContent1.executeJavaScript('document.body.style.border="10px solid red";');
  webContent1.executeJavaScript('console.log(document.body.style.border)');
});