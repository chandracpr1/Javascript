//Immediatly invoked function expressions (IIFE)

(function abc() { //named iffe
    console.log('DB connected')
})(); //()()

( (name)=>{ //unnamed iffe
    console.log(`DB connected two ${name}`)
})("chandra");

// when writing two iffe's write ; semicolon after every iffe