/*
Given a random “stack of cards”, calculate 
the number of complete decks you can make from them
*/

const suits = "DCHS".split("");
const values = "234567890JQKA".split("");

function generateRandomCards(count) {
  return Array.from({ length: count }, () => {
    return randomItem(values) + randomItem(suits);
  });
}

function randomItem(list) {
  return list[Math.floor(list.length * Math.random())];
}

// Your Code Here