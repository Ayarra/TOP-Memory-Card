function generateCharactersArray(goal) {
  let randomArr = [];
  for (let i = 0; i < goal; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1);
  }

  return randomArr;
}

async function test(goal) {
  let randomArr = generateCharactersArray(goal);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${randomArr}`
  );
  const body = await response.json();
  const results = body.map((el) => ({
    id: el.id,
    name: el.name,
    image: el.image,
    clicked: false,
  }));
}
