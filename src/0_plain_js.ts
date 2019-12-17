// -- plain JS types ----------------
{
    // typeof <some object>
    // <some object> instanceof <constructor>

    let str = "txt"
    typeof str // "string"
    str as any instanceof String // false

    let str2 = new String("txt")
    typeof str2 // "object"
    str2 instanceof String // true

    let num = 3
    typeof num // "number"
    num as any instanceof Number // false

    let num2 = new Number(3)
    typeof num2 // "object"
    num2 instanceof Number // true

    let bool = true
    typeof bool // "boolean"

    let nal = null
    typeof nal // "object"

    let undef = undefined
    typeof undef // "undefined"

    let fn = () => { }
    typeof fn // "function"
    fn instanceof Function // true

    let fn_constr = function () { }
    let fn_i = new (fn_constr as any)()
    typeof fn_i // "object"
    fn_i instanceof fn_constr // true

    let obj = { prop: "val" }
    typeof obj // "object"
    obj instanceof Object // true

    class MyClass {
        val = "val"
    }
    let mc = new MyClass()
    typeof mc // "object"
    mc instanceof MyClass // true

    let arr = [1, 2, "tri"]
    typeof arr // "object"
    arr instanceof Array // true

    // typeof
    // is "object" unless some primitive type (e.g. string, number, function...)

    // instanceof
    // search prototype chain to see if constructor matches
}

export {}