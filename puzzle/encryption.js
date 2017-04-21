// credit for code - https://rosettacode.org/wiki/Vigen%C3%A8re_cipher#JavaScript
// helpers
// helper
function ordA(a) {
  return a.charCodeAt(0) - 65;
}
 
// vigenere
function vigenere(text, key) {
  if(key==null || key==""){
    return text;
  }
  
  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[A-Z]/g, function(a) {
    b = key[i++ % key.length];
    return String.fromCharCode( ordA(a) + (26 - ordA(b)) );
  });
}
