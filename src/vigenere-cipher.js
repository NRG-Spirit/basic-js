const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(rev) {
    this.reverse = false;
    if (rev == false) {this.reverse = true};
  }

  encrypt(str, key) {
    if(!str || !key) {
      throw new Error('Incorrect arguments!')
    };
    
    let encrypted = '';
    let count = 0;

    while (key.length < str.length) {
      key += key;
    }

    for (let i = 0; i < str.length; i++) {
      let currentLetter = str[i];
        currentLetter = currentLetter.toUpperCase();

      if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
          let p = (currentLetter.charCodeAt());
          let k = (key[count].toUpperCase().charCodeAt());
          let upperLetter = ((p + k) % 26);
          encrypted += String.fromCharCode(upperLetter + 65);
          count++;
      } else  {
          encrypted += currentLetter;
      }
    }

    if (this.reverse == false) {
      return encrypted;
    } else {
      return encrypted.split('').reverse().join('');
    }
  }
  
  decrypt(str, key) {
    if(str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let decrypted = '';
    let count = 0;

    while (key.length < str.length) {
      key += key;
    }

    for (let i = 0; i < str.length; i++) {
      let currentLetter = str[i];
        currentLetter = currentLetter.toUpperCase();

      if (currentLetter.charCodeAt() > 64 && currentLetter.charCodeAt() < 91) {
        let c = (currentLetter.charCodeAt());
        let k = (key[count].toUpperCase()).charCodeAt();
        let upperLetter = ((c - k) + 26) % 26;
        decrypted += String.fromCharCode(upperLetter + 65);
        count++;
      } else {
          decrypted += currentLetter;
        }
    }
    
    if (this.reverse == false) {
      return decrypted;
    } else {
      return decrypted.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
