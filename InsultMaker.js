// Generates a random insult based on the contents of the Insults file
const InsultSet = require('Insults.JSON')
function RandomInsult (Numbers) {
  const HelpLink = `discord.gg/j9Z3Qc7`// FIRAbot test server because stridey didn't give me the MHOC one
  try {
    if (Numbers === undefined) {
      Numbers = 2
    } else if (typeof Numbers !== `number`) {
      return `ERR: Invalid argument - arguments must be positive integers`
    } else if (Numbers < 0) {
      Numbers *= -1
      Numbers = Numbers.ceil()
    } else if (Numbers === 0) {
      return `Your mother!`
    } else {
      Numbers = Math.ceil(Numbers)
    }
    var Insult = 'You '
    //
    var LastAdj = ''
    for (var Looper = 1; Looper < Numbers; Looper++) {
      var RepeatedCheck = false
      //
      while (RepeatedCheck === false) {
        //
        var InsultNumber = Math.random() * (InsultSet.Romeo.Adjectives.length - 1)
        var InsultAdjective = InsultSet.Romeo.Adjectives[InsultNumber]
        //
        if (InsultAdjective === LastAdj) {
          InsultNumber = Math.random() * (InsultSet.Romeo.Adjectives.length - 1)
          InsultAdjective = InsultSet.Romeo.Adjectives[InsultNumber]
        }
        RepeatedCheck = true
      }
      LastAdj = InsultAdjective
      Insult += InsultAdjective + ' '
    }
    //
    InsultNumber = Math.random() * (InsultSet.Romeo.Adjectives.length - 1)
    var InsultNoun = InsultSet.Romeo.Nouns[InsultNumber]
    Insult += InsultNoun + '!'
    return Insult
  } catch (err) {
    var ErrorMsg = `The insult was not generated because of the following error: ${err}
    If you want to help prevent this from happening again, please contact Nightmarlin or Strideynet at ${HelpLink}`
    return ErrorMsg
  }
}

module.exports = RandomInsult

/*
© Nightmarlin 12.10.2017

Some insult credits to:
 -> https://www.nosweatshakespeare.com/resources/shakespeare-insults/

Designed by Nightmarlin for Strideynet
Part of the Nightmarlin collective
*/
