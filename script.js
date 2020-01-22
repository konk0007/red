document.body.style.backgroundColor = '#f3f3f3'
document.body.style.backgroundImage = "url('img/tale.PNG')"
document.body.style.backgroundRepeat = 'no-repeat'

// Part 1

let littleRed = {
  color: 'red',
  sillyWord: 'goosey',
  adjective: 'terrible',
  exclamation: 'Wow, How nice to see you here!',
  pluralNouns: ['cakes', 'teeth', 'eyes', 'ears'],
  threeVerbs: ['ran', 'speak', 'see']
}

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNouns[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

" I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.threeVerbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."

"The better to ${littleRed.threeVerbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."

The wolf said, "The better to ${littleRed.threeVerbs[2]} you with."

And then she said, "What big ${littleRed.pluralNouns[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother.`)

// Part 2

littleRed.color = 'purple'
littleRed.pluralNouns[2] = 'eyelashes'
littleRed.exclamation = 'Wow, You are so nice!!!'
littleRed.threeVerbs[1] = 'hear'

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
 basket of ${littleRed.pluralNouns[0]} for her grandmother. Suddenly, she met a big 
 ${littleRed.adjective} wolf.

 "${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

 " I'm going to my grandmother's house," she said. Then the wolf 
 ${littleRed.threeVerbs[0]} away.

 When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
 dressed like her grandmother.

 "My, Grandmother," she said. "What big ${littleRed.pluralNouns[1]} you have."

 "The better to ${littleRed.threeVerbs[1]} you with," said the wolf.

 "And, Grandmother," she said, "what big ${littleRed.pluralNouns[2]}" you have."

 The wolf said, "The better to ${littleRed.threeVerbs[2]} you with."

 And then she said, "What big ${littleRed.pluralNouns[3]}" you have, Grandmother." But 
 the wolf said nothing. He had just died of indigestion from eating Grandmother.`)

// Snow White
// Part1
let snowWhite = {
  snowColor: 'White',
  herBody: 'face',
  snowAdjective: ['unique', 'wild', 'small'],
  adverbSnow: 'happy',
  snowNouns: ['tales', 'dwarfs'],
  myNumber: 7,
  noun: ['palace', 'forest', 'world', 'kiss', 'apple']
}

console.log(`One of the most popular fairy ${snowWhite.snowNouns[0]} of all time is Snow White and the 
${snowWhite.myNumber} ${snowWhite.snowNouns[1]}.

Snow White is a princess whose ${snowWhite.snowAdjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.snowAdjective[1]} animals who guide her to the ${snowWhite.snowAdjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.snowColor}, arrives and gives her a magical ${snowWhite.noun[3]} on her ${snowWhite.herBody}
, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverbSnow} ever after.`)

// Part 2

snowWhite.myNumber = 8
snowWhite.snowAdjective[0] = 'adorable'
snowWhite.noun[1] = 'woods'
snowWhite.noun[3] = 'touch'
snowWhite.snowColor = 'Silver'

console.log(`One of the most popular fairy ${snowWhite.snowNouns[0]} of all time is Snow White and the 
${snowWhite.myNumber} ${snowWhite.snowNouns[1]}.

Snow White is a princess whose ${snowWhite.snowAdjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.snowAdjective[1]} animals who guide her to the ${snowWhite.snowAdjective[2]} cottage of the eight dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.snowColor}, arrives and gives her a magical ${snowWhite.noun[3]} on her ${snowWhite.herBody}
, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverbSnow} ever after.`)
