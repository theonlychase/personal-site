import { gradients } from '~/static/data/data';

export function validateEmail(email: string) {
  const regex =
    // eslint-disable-next-line
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(email);
}

export const shuffle = ([...arr] = gradients) => {
  let m = arr.length;
  while (m) {
    const i = ~~(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

export function injectScript({
  src = '',
  id = '',
  async = true,
}): Promise<boolean> {
  const scriptEl = document.getElementById(id);

  return new Promise((resolve, reject) => {
    if (id && scriptEl) {
      resolve(true);
    }
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = async;
    if (id) {
      script.id = id;
    }

    document.body.appendChild(script);

    script.onload = () => resolve(true);
    script.onerror = () => reject(false);
  });
}
