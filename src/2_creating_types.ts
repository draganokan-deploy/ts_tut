// -- creating types -------------

// classes
class Person implements Individua { 
    name: string
    id: number

    static counter: number = 0

    constructor(name: string) { 
        this.name = name
        this.id = Person.counter
    }

    say(text: string) { 
        console.log(this.name + " says: " + text)
    }
}

let p = new Person("elon")
p.say("Hi!")

// interfaces
interface Individua {
    id: number
}

let hue = {
    id: 3,
    nogu: 2
}

function identifikuj(i: Individua) {
    console.log("id je: " + i.id)
}

identifikuj(p)
identifikuj(hue)

// types
// ...

// extends & implements

// optionals
// union types
// intersection types
// type literals

export {}