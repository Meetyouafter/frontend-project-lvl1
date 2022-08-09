const getRandomNumber = (min, max) => {
  const randomNumber = min + Math.floor(Math.random() * (max + 1 - min));

  return randomNumber;
};

export default getRandomNumber;
