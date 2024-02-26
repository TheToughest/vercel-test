export function isItWeekend(): boolean {
    const today = new Date();
    const day = today.getDay();
    return day === 0 || day === 6;
}