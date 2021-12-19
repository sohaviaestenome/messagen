function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num)
}

const bumpingExchange = {
  bump: ['hey!', 'watch it!', 'hey buddy!'],
  wordExchange: ['what, punk!?', "what's your problem?!", 'do I know you!?'],
  retort: ['bam!', 'pow!', 'pufff', "I'm terribly sorry, it was my fault!"]
}

// Store the 'wisdom' in an array
let fightScene = []

// Iterate over the object
for (let prop in bumpingExchange) {
  let optionIdx = generateRandomNumber(bumpingExchange[prop].length)

  // use the object's properties to customize the message being added to fightScene
  switch (prop) {
    case 'bump':
      fightScene.push(`You bumped into a stranger and you say: "${bumpingExchange[prop][optionIdx]}".`)
      break
    case 'wordExchange':
      fightScene.push(`He retorts: "${bumpingExchange[prop][optionIdx]}".`)
      break
    case 'retort':
      fightScene.push(`Ends up: "${bumpingExchange[prop][optionIdx]}".`)
      break
    default:
      fightScene.push('Nothing to see here, move along.')
  }
}

function formatWisdom(wisdom) {
  const formatted = fightScene.join('\n')
  console.log(formatted)
}

formatWisdom(fightScene);
