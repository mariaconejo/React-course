// Las variables declaradas con var son ejecutatas de primero hoisting
// scope vive en su contexto de ejecucion y let vive en el contexto de su bloque
// por ejemplo si se declaran variables con var dentro de if o ciclos pueden leerse ya que viven en 
// un enterno mas global
// se recomienda usar mas const

var name = "jose";
let car = "tesla";
const model = "roadster";

function explainVar(){
    var a = 10;
    console.log("a", a)
    if (true){
        var a = 20;
        console.log("a dentro del if", a)
    }
    console.log("al final", a);
}

explainVar();