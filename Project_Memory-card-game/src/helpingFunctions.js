export const formatTime = (time) => {
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
};
