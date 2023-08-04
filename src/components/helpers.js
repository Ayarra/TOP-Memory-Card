function generateCharactersArray(scoreGoal) {
  let randomArr = [];
  for (let i = 0; i < scoreGoal; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1);
  }

  return randomArr;
}

export { generateCharactersArray };
