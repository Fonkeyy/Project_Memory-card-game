// * Helpers functions
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArr = (arr) => {
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

export const formatTime = (time) => {
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
};
