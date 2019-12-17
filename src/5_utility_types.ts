// -- utility types --------------

interface ISuper {
    super: boolean
    very_super: boolean
    superness_lvl: number
    desc: string
}

// partial
function combine(data: Partial<ISuper>) {
    let superDefault: ISuper = {
        super: false,
        very_super: false,
        superness_lvl: 0,
        desc: ""
    }

    return {
        ...superDefault,
        ...data
    }
}

// readonly
function doSomethingSuper(data: Readonly<ISuper>) {
    data.super // read -> ok
    // data.super = false // write -> err
}

// record
type SuperMap = Record<string, ISuper>
let sm: SuperMap = {}
sm["lame"] = {
    super: false,
    very_super: false,
    superness_lvl: 3,
    desc: "civilian"
}
sm["superhero"] = {
    super: true,
    very_super: true,
    superness_lvl: 9001,
    desc: "superhero-like"
}

type KeydSuperMap = Record<"lame"|"superhero", ISuper>
let ksm = {} as KeydSuperMap
// ksm["yo"] = {} // no err
// ksm.yo doesn't exist
// ksm.lame & ksm.superhero do

type StrSuper = {
    [Key in keyof ISuper]: string
}

export {}