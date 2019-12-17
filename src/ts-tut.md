what are types, what is ts all about
    ensure availability of 

basic types
    string
    number
    function
    boolean
    void
    null
    undefined
    object
    array
    never
    any
    unknown

    defining new types
        enums
        tuples
            fixed array with known types
            "interface for array elements"
        interfaces, types

    type assertions (as type, <type>)

    js types
        undefined
        null
        boolean
        number
        string
        function
        object
    typeof
        simple types
    instanceof
        complex and custom types
        tests constructor in prototype chain
    don't use these

    union types (A & B)
    intersection types (A | B)
        type guards
    mapped types
        [K in keyof T]: T[K] & { extra: string }
    generics
        functions: fn<T>(param: T): T
        type Boxed<T> = {value: T}
    function overloading

types vs values

utility types
    partial
    readonly
    record
    nonnullable
advanced types
    polymorphic this
    conditional types
    parameters
    return type
cool things
    ??
    optional chaining
    asserts
    tim.js - dragomir's examples

examples
    ts + react

https://www.typescriptlang.org/play/#code/PTAEFp1AjBDBnAlgY1AFwJ4AcCm8KSFGEBQA3iaFaCKPGgE6IB2A5pdQDY5p2MBcfJm1ABeUACI0OANb0JHKrWYBXALbQcDRaG69VawQc0MxoAMw7a0APbdYzHXpg27g23ZwOzjFTitgAG42iAAmTjygwQBWoYLBYQGgqpycEfqwnEYqqWYpadQ0YABmKszIaIg2joXOxcyCAGJlFVXMZgAUsIL0wqwAlGIAfKBkoAC+STbQ0TgV6aDT0YJLc7ziY1gMNliCEoGZEhNFoA4YaAAWLKwwKrxbiGqIlYE46Nh4SWcLOMyIgmczBJfogFIVaGUZMwbAB3GpcSLMHBYGwAL2YsDQgkh0LhQNCsAJYOoyhwr20tURiBkhKMZK0JEmJFokFAyAYXkqIkwuHwxH5kHIoCSyE4CHgn0KovFoAAClp4NVQI8sNw1L80PgAJLMUKIQJhFSwUbCwqFDHqnqMa46QphbIaBm26j0TEoNk2MrSBgOkxmAAMJGdVGQ1V6KgqNgYHQtOCtfUGY2DZsuiHgADpY3lYOrk4VUxmwmZ5QxFcx06GvQyzdQmTWqPBYBgOtIAB5YoTXROm+tSsOedOcGysFtXDNZgDUkjoTfge1AU7baH6ycmhTrCPueRwMLlCuqHWBQ+YEhXhSw6cbzYkAAlEABCU9B8FgFje4qwZCS6hvrQfr+gDqeoGqERqjMm9rJOoJg6BuVDOBcfhmBQvaQeYAA0ybQqwKiCAATLBz7UKU5SVEqYQaogxTUio0QdP8gG6vqhqwImyahswircIOw6HkWszzlOiDpmEZ61kRVAUcwlTUTItEdFgYmSaElGyfJiE4CuSQ8t+ShgOmBkSScODtr8oT4AAZMqaiqjg6rSfARkQn8So6Y5L7KtJCprG07y8tpHy6M8WiZI5TIslArC-FoKB8gK8WkChP5eQw-5vAAcngaA2AAPAAKiMFCETov6pZ+GVZTYeH5aAJnSLq+C9NchVGXBJxqLAWCWaAHKhgw5lJDIOAYDYxQ6DpoAAMoxdEmT5SMGzJgA2gA0sNnmgENI3FKAeUALrxja65GSRrSuTYk2MDVdVmfgABKcxRqEOVbaNu3oaM2WXX0ggdIMohDE1bDjEMQwdASaDdLtbG9s4QOsFRiA4KEyHjKc+DTUws2cPNybFFGoAdM4a0YBtEOseBvaFPDiPI6tw17WY5P0xge3pl91psH9q6ER5p1ke0EpY5kiCorR83g5iUNKaA-O+ULiDY6L8nk4ID19c9ZwfWMHM-YT-0jPDExDDD9bOBy+DiBIxI1vjphE5EJNk1LptUz1eBM1LLNs7r1zc72a71hyaAqAw7QW4R4VgKy0K8IqMAIO6bkEMQ5BJL86judQGdqKAAAiiC9QLlP1gAqrKmG9nnADyADq6WV-Wd1agA4jeeWNzWAAyACijR5cVhRy0qMJMNIBfRnE+eFz51Tdsm8Aws8yAXIToTz27IYIG8E+z+W5f8Hm9YcVxOA8SOEisFGOBPpvZrQBysAyEfW8StPRdtOmNf14fd99pxA4hwX1CJ4W+f8qAPy8M-O+yBt7vz3umXu-df7gI9AA7iQDDzcGCGA8BkCn4vzZHA3eZ1yzNzbnlFB4CT6AN4hIFS8BoS4L-vg6B9ZA5UDarQWADAGCzgWA-GwswDSCAAIK8KbDlYwWgFqgCWgARg+nhD65g9oLF6gxeGS1GbiCWhISavU-gSA+hILYsB0QoFBGo7SKhbJ8kkKVNKssCY8L4aTHAaoNTwBtn5N4jwcAAH0iy6Phh9aRDA1GUnuDYcmMhBD+KCSjXRR5qjGNAAAFkidQFEsT0xYBUPAC4h46p8NAPwQ8gxaA5SgPQRAuRMhDhhMjIyzgcmfgYgksI2izBLWWhIfx8i0nyL2p3M0ej-F4TSXhLJVAZmeXfOVPcpYlRJlQlPcJWEcxxk7GwXmm5dDRBUHqQQJYyzdPEG05AwkOpYAUjEqWMhhiEySjWWMgg2mQxkEtf0IyIJTw+U-BRczxj9BXOMIAA