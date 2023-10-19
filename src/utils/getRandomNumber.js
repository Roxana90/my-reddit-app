// Generates a number between min and max

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

export default getRandomNumber;