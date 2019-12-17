// -- not so basic types -------

// enums
enum Direction {
    UP,
    DOWN,
    RIGHT,
    LEFT
}

function writeDir(d: Direction) { 
    switch (d) { 
        case Direction.UP:
            console.log("gore")
            break
        case Direction.DOWN:
            console.log("dole")
            break
        case Direction.LEFT:
            console.log("levo")
            break
        case Direction.RIGHT:
            console.log("desno")
            break
    }
}

// arrays
let brojevi: Array<number> = [1, 2, 3]
let reci: string[] = ["Srecni", "praznici"]

// tuples - "interface for array elements"
type ime_id = [string, number]
let podatak: ime_id = ["elon", 4]
podatak.push("extra :(") // <- still allowed

let podaci: ime_id[] = [
    ["ime1", 1],
    ["ime2", 2]
]
interface Person { 
    id: number
    name: string
}
let ljudi: Person[] = podaci.map(podatak => ({
    name: podatak[0],
    id: podatak[1]
}))

export {}