function injectScript({ src = '', id = '', async = true }) {
  const scriptEl = document.getElementById(id);
  if (id && scriptEl) {
    return;
  }

  return new Promise(function (resolve, reject) {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    if (id) {
      script.id = id;
    }

    document.body.appendChild(script);

    script.onload = () => resolve(true);
    script.onerror = () => reject(false);
  });
}
