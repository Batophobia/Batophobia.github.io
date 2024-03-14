// credit for code - https://rosettacode.org/wiki/Vigen%C3%A8re_cipher#JavaScript
function ordA(a) {
  return a.charCodeAt(0) - 65;
}

// vigenere
function vigenere(text, key) {
  if (key == null || key == "") {
    return text;
  }

  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[A-Z]/g, function (a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (26 - ordA(b))) % 26 + 65));
  });
}

// Encryption function
async function encrypt(text, key) {
  const encodedText = new TextEncoder().encode(text);
  const encodedKey = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key));
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-CBC', iv }, encodedKey, encodedText);
  return iv.toString() + ':' + Array.from(new Uint8Array(encrypted)).map(b => String.fromCharCode(b)).join('');
}

// Decryption function
async function decrypt(encryptedText, key) {
  const parts = encryptedText.split(':');
  const iv = new Uint8Array(parts.shift().split(',').map(Number));
  const ciphertext = new Uint8Array(parts.join(':').split('').map(c => c.charCodeAt(0)));
  const encodedKey = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key));
  const decrypted = await crypto.subtle.decrypt({ name: 'AES-CBC', iv }, encodedKey, ciphertext);
  return new TextDecoder().decode(decrypted);
}