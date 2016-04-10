import { Subject } from './implementation';

const Timer = new Subject(new Date());

function getTime(date: Date) {
    const hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const seconds = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    console.log(`Current time is ${hours}:${minutes}:${seconds}`);
}

function getYear(date: Date) {
    console.log(`Current year is still ${date.getFullYear()}`);
}

Timer.Attach(getTime);
Timer.Attach(getYear);

setInterval(() => Timer.setState(new Date()), 1000);

// Чтобы можно было из консоли попробовать паттерн в действии
(window as any).Timer = Timer;
(window as any).getTime = getTime;
(window as any).getYear = getYear;
