const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directReverse) {
    this.directReverse = directReverse === false ? "reverse" : "direct";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Error");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    message = message.toUpperCase();
    key = key.toUpperCase();

    let i = 0;
    for (let j = 0; j < message.length; j++) {
      if (alphabet.indexOf(message[j]) < 0) {
        result += message[j];
        i++;
      } else {
        const msgIndex = alphabet.indexOf(message[j]);
        const keyIndex = alphabet.indexOf(key[(j - i) % key.length]);
        result =
          result + alphabet.charAt((msgIndex + keyIndex) % alphabet.length);
      }
    }
    return this.directReverse === "reverse"
      ? result.split("").reverse().join("")
      : result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Error");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let i = 0;

    for (let j = 0; j < encryptedMessage.length; j++) {
      if (alphabet.indexOf(encryptedMessage[j]) < 0) {
        result += encryptedMessage[j];
        i++;
      } else {
        const msgIndex = alphabet.indexOf(encryptedMessage[j]);
        const keyIndex = alphabet.indexOf(key[(j - i) % key.length]);
        result =
          result +
          alphabet.charAt(
            (msgIndex + alphabet.length - keyIndex) % alphabet.length
          );
      }
    }
    return this.directReverse === "reverse"
      ? result.split("").reverse().join("")
      : result;
  }
}

module.exports = VigenereCipheringMachine;
