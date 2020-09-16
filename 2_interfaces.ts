interface Rect {
    readonly id: string // только для чтения
    color?: string //необязательный параметр
    size: {
       width: number
       height: number
    }
}

const rect1: Rect = {
    id: 'vasya',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: 'petya',
    size: {
        width: 20,
        height: 30
    },
}

rect2.color = 'red';

const rect3 = {} as Rect;
const rect4 = <Rect>{}

//Наследование интерыейсов

interface RectWithArea extends Rect{
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: '12',
    size: {
        width: 10,
        height: 10
    },
    getArea(): number {
        return this.size.height * this.size.width
    }
}

//========================

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

//========================

interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px'
}