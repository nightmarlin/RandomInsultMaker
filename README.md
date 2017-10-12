# RandomInsultMaker
Randomly generates an insult from a list. May or may not work

## How to use
> 1) Require the module
> 2) Call the module to a variable
```JS
var GenerateInsult = require('InsultMaker.JS').RandomInsult

var NewInsult =  GenerateInsult()
```
> 3) Enjoy the wrath of insults

### Parameters
RandomInsult() will return
```JS
"You [ADJ] [ADJ] [NOUN]!"
```
RandomInsult(X [integer]) will return
```JS
"You {X [ADJ]s} [NOUN]!"
```

### Errors
If something bad happens, the code will return
```JS
`The insult was not generated because of the following error: ${ERROR}
If you want to help prevent this from happening again, please contact Nightmarlin or Strideynet at ${DiscordServerLink}`
```
Where ERROR is the error details and DiscordServerLink is the current most applicable link.

## Credits
> "I'd just like to point out that I have written this twice now in two different languages. Maybe I should ask for money next time..."
>> -Nightmarlin


> "No I'm going to bed now you can't have the MHOC Discord link"
>> -Strideynet


> "We provided the basis for a whole host of beautiful insults. You're welcome"
>> -https://www.nosweatshakespeare.com/resources/shakespeare-insults/
