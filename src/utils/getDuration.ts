export const getDuration = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    const secondsFormatted = seconds.toString().length===1 ? '0' + seconds : seconds;
    return minutes + ':' + secondsFormatted
}