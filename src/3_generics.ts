// -- generics -------------------

// enable types to be parameters when defining classes, interfaces and methods


type LinkedList<T> = {
    data: T
    next: LinkedList<T>
}

type Node<T> = {
    data: T
    left: Node<T> | null
    right: Node<T> | null
}

function list2map<T extends {id: number}>(data: T[]) {
    return data.reduce((prevVal: {[id: number]: T}, currVal: T) => {
        return {
            ...prevVal,
            [currVal.id]: currVal,
        }
    }, {})
}

let ljudi = [
    {
        id: 0,
        name: "Dragan"
    }, {
        id: 1,
    name: "Pera"
    }, {
        id: 2,
        name: "djura"
    }
]

let indeksLjudi = list2map(ljudi)



// maps & records
// keyof
type Serijal<T> = {
    [Key in keyof T]: string
}

function toStr<T extends Record<keyof T, {toString: () =>string}>>(data: T) {
    let stringified = {} as Serijal<T>
    for (let Key in data) {
        stringified[Key] = data[Key].toString()
    }
}
// function serijalizuj<T>(data: )
function serijalizuj(data: Record<any, { toString: () => string }>) {
    let res = ""
    for (let Key in data) {
        res = data[Key].toString()
    }
    return res
}

// pros:
// - stronger type checks
// - less casting
// - enabling implementing of generic algorithms
// cons:
// - can introduce longer compilation time
// - can sometime lead astray

export {}