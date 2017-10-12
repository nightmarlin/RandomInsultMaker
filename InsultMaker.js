// Generates a random insult based on the contents of the InsultPt1 and InsultPt2 files
const InsultSet = require('Insults.JSON')

function RandomInsult (Numbers) {
  if (Numbers === undefined) {
    Numbers = 2
  } else if (typeof Numbers !== `number`) {
    return `ERR: Invalid argument - arguments must be positive integers`
  } else if (Numbers < 0) {
    Numbers *= -1
    Numbers = Numbers.ceil()
  } else if (Numbers === 0) {
    Numbers = 2
  } else {
    Numbers = Numbers.ceil()
  }
  var Insult = 'You '
  //
  var LastAdj = ''
  for (var Looper = 1; Looper < Numbers; Looper++) {
    var RepeatedCheck = false
    //
    while (RepeatedCheck === false) {
      //
      var InsultNumber = Math.random() * (InsultSet.Adjectives.length - 1)
      var InsultAdjective = InsultSet.Adjectives1[InsultNumber]
      //
      if (InsultAdjective === LastAdj) {
        InsultNumber = Math.random() * (InsultSet.Adjectives.length - 1)
        InsultAdjective = InsultSet.Adjectives1[InsultNumber]
      }
      RepeatedCheck = true
    }
    LastAdj = InsultAdjective
    Insult += InsultAdjective + ' '
  }
  //
  InsultNumber = Math.random() * (InsultSet.Adjectives.length - 1)
  var InsultNoun = InsultSet.Nouns[InsultNumber]
  Insult += InsultNoun + '!'
  return Insult
}

module.exports = RandomInsult
// © Nightmarlin 12.10.2017

// Some insult credits to:
// -> https://www.nosweatshakespeare.com/resources/shakespeare-insults/

// Designed by Nightmarlin for Strideynet

// Part of the Nightmarlin collective
