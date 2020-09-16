class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} -> TS version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class Car1 {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {
    }
}

//=================== про модификаторы
class Animal {
    protected voice: string = ''
    public color: string = 'red'

    constructor() {
        this.go()
    }

    private go() {
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('meow')
console.log(cat.color)

//===============Abstract classes

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('render')
    }

    info(): string {
        return 'info'
    }
}

