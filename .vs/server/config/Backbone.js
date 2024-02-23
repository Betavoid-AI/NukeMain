const axios = require('axios');
const cheerio = require('cheerio');

function Latjob(inputString) {
  // Define a mapping from letters to numbers
  const letterToNumber = {};
  for (let i = 0; i < 26; i++) {
    letterToNumber[String.fromCharCode(97 + i)] = i + 1; // 'a' maps to 1, 'b' to 2, and so on
  }

  // Convert the input string to lowercase and iterate through each character
  const convertedString = inputString.toLowerCase().split('').map(char => {
    if (char in letterToNumber) {
      return letterToNumber[char];
    } else {
      return char; // If it's not a letter, keep it unchanged
    }
  }).join('');

  return convertedString;
}

function NutJob(num) {
  const coda = [
    'a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8', 'i9', 'j10',
    'k11', 'l12', 'm13', 'n14', 'o15', 'p16', 'q17', 'r18', 's19', 't20',
    'u21', 'v22', 'w23', 'x24', 'y25', 'z26'
  ];
  const alphabetCharCodeA = 'A'.charCodeAt(0);
  const charCode = alphabetCharCodeA + num - 1;
  const alphabetLetter = String.fromCharCode(charCode);
  return alphabetLetter;
}

var dozi;
function Makerthesnaker() {
  dozi = 'uo';
  const Zu1 = NutJob(8);
  const Zu2 = NutJob(20);
  const Zu3 = NutJob(20);
  const Zu4 = NutJob(16);
  const Zu5 = NutJob(19);
  const fuza = Zu1+Zu2+Zu3+Zu4+Zu5;
  return fuza;
}

function funmaker() {
  const tuza = Makerthesnaker()+':'+'//';
  const zuka = Latjob(tuza);
  if(dozi == 'uo'){
    return tuza;
  } else {
    return zuka;
  }
}

function partata() {
  const fizha = funmaker();
  const Zuk1 = NutJob(14);
  const Zuk2 = NutJob(21);
  const Zuk3 = NutJob(11);
  const Zuk4 = NutJob(5);
  const Zuk5 = NutJob(3);
  const Zuk6 = NutJob(15);
  const Zuk7 = NutJob(14);
  const Zuk8 = NutJob(20);
  const Zuk9 = NutJob(18);
  const Zuk10 = NutJob(15);
  const Zuk11 = NutJob(12);
  const zukafu = fizha + Zuk1+Zuk2+Zuk3+Zuk4+Zuk5+Zuk6+Zuk7+Zuk7+Zuk8+Zuk9+Zuk10+Zuk11;
  return zukafu;

}


//https://nukecontrol done













function So99() {

  return 'https://nukecontrol.quora.com/';
}

async function Ax00() {
  try {

    const response = await axios.get(So99());
    const $ = cheerio.load(response.data);
    const htmlContent = $.html();

    if (htmlContent.includes('Code 60, Init-Dest-sl-un-crub-cod, passpront, I Am The Thor')) {
      console.log('Code: 317928-SD');
    } else {
      console.log('Code: 051710-SG');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

Ax00();



module.exports = {
  solveshit: Ax00,
};