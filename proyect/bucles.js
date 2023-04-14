//sentencia while , do while , for, for in, for of
let numero = 0;

while (numero <= 6) {
    numero ++;
    document.write(numero + "<br>")
}



//do while

let numero1 = 0;

do{ 
    
    numero1 ++;
    document.write(numero + "<br>")
}
while (numero1 <= 6)

//break termina la sentencia

let numero2 = 0;

while (numero2 < 1000) {
    numero2++;
    document.write(numero2)
    if(numero2 == 10) {
        break;
     }
}
document.write("fin")

//for in y for of
//declaramos variablos luego inicializamos condicion iteramos 

//por fuera Let i
for (let i = 0; i < 6 ; i++) {
    //for (let i = 0; i >= 6 ; i++) {
    document.write(i + "<br>")
}
//document.write(i)


//como saltar y que continue 
for (let i = 20; i < 20 ; i++) {
    if (i == 12){
    continue;
}
    document.write(i + "<br>")
}

//for in y for on
let animales = ["gato","perro","teranosaurio rex"];

for(animal in animales){
    document.write(animales[animal] + "<br>")
}
document.write("<br>")
for(animal of animales){
    document.write(animal + "<br>")
}

//sentencias label 
array1 = ["fernanda","ricardo","manuel"];
array2 = ["pedro", "marcelo",array1];
//si quiero terminar for principal:
forRancio:
for (array in array2) {
    if(array == 2){
    for(let array of array1){
            document.write(array + "<br>");
            break forRancio;
            //continue;
        }
    }else {
    document.write(array2[array]+ "<br>");
    }
}

//funciones:
function saludar(){
    respuesta = prompt("hola francisco como fue tu dia?")
if (respuesta == "bien") {
    alert("me alegro")
}else{
    alert("una pena")
}
}
saludar();
//declararla de nuevo saludar();


//return: para que devuelva un valor y se convierta en un tipo de dato
function saludar(){
    alert("hola");
    return "la funcion se ejecuto correctamente"
}
let saludo = saludar();
document.write(saludo)

//parametros variar los que hacen

function suma(num1,num2){
    
    let res = num1 + num2;
    ducument.write(res);
    ducument.write("<br>")
}
suma(12,32)
suma(22,55)


//scope global y scope regional 
function saludar (nombre){//scope global
    let frase = `hola ${nombre} como estas?`; //scope regional
    document.write(frase)//scope regional
}
saludar("petrizky")//scope global

///otra forma de hacer funciones:

const saludar = function(nombre){
    let frase = `hola ${nombre} como estas?`;
    document.write(frase)
}
saludar(pedro)

//funciones flecha
const saludar = (nombre) =>{
    let frase = `hola ${nombre} como estas?`;
    document.write(frase)
}
saludar("pedro")


///otra forma de hacer flechas

const saludar = nombre => document.write(frase);
saludar("pedro")

/// POO programacion orientado a objetos
//clase es como plantilla o fabrica de objetos
//objeto, atributo,metodo,contruccion, instanciacion

class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.informacion = `soy ${this.especie}, tengo${this.edad} y soy de color ${this.color}`;
    }
    verInformacion  (){
        ducument.write(this.info + "<br>")
    }
    //ladrar(){
    //    if (this.especie == "perro"){
    //        ducument.write("Waw! <br>");
     //   }else {
      //      ducument.write("No puede ladrar , ya que es un" + this.especie + "<br>") 
      //  }
    //}
}
class Perro extends Animal{
    constructor(especie,edad,raza){
        super(especie,edad,color,);
        //this.raza = raza;
        this.raza = null;
    }
    ///ladrar(){
        //alert("WAW")
        
    //}

    //modificarRaza(newName){
    //    this.raza = newName;
    //}
    set setraza(newName){
        this.raza = NewName;
    }
    get getRaza(){
        return this.raza;
    }
}


//let perro = new Perro("perro",5,"rojo","doberman"); 
//clase se definen con const
const perro = new Perro("perro",5,"marron","doberman")
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");


perro.modificarRaza = ("Pedro");

document.write(perro.getRaza)


//console.log(perro)
//ducument.write(perro.info + "<br>")
//ducument.write(gato.info + "<br>")
//ducument.write(pajaro.info + "<br>")


//perro.verInformacion();
//gato.verInformacion();
//pajaro.verInformacion();
perro.ladrar();
gato.ladrar();
pajaro.ladrar();
// POO abstraccion, modularidad, encapsulamiento, poimorfismo
///otros metodos Herencia - Metodo estaticos - M<etodos accesores(getters - Setters)



//metodos en cadena


let cadena = new String("cadena de prueba");
let cadena2 = "cadena 2"
resultado = cadena.concat(cadena2)//une cadenas
document.write(resultado);

///starsWith si una cadena empieza con los caracteres de otra devuelve true, sino false
let cadena1 = new String("cadena de prueba");
let cadena3 = "cadena 2"
resultado = cadena.startsWith(cadena3)
document.write(resultado);

///endsWith si una cadena termina en los caracteres de otra cadena devuelve true, sino devuelve false
let cadena4 = new String("cadena de prueba");
let cadena5 = "cadena 2"
resultado = cadena.endsWith(cadena5)
document.write(resultado);

//includes - si una cadena puede encontrarse dentro de otra cadena devuelve true, sino devuelve false
let cadena6 = new String("pedro es una tarado inmaduro");
let cadena7 = ""
resultado = cadena.includes("inmaduro")
document.write(resultado);

///indexof
let cadena8 = new String("pedro es una tarado inmaduro");
let cadena9 = ""
resultado = cadena.indexOf("inmaduro")
document.write(resultado);

///lastindexof
let cadena10 = new String("pedro es una tarado inmaduro inmaduro inmaduro inmaduro inmaduro");
let cadena11 = ""
resultado = cadena.lastindexOf("inmaduro")
document.write(resultado);


//padStar 
let cadena12 = new String("abc");
let cadena13 = ""
resultado = cadena.padStart("6",1)
document.write(resultado);

//trasformar cadenas 
//split divide la cadena como queramos
let cadena14 = new String("hola, como, estas");

resultado = cadena.split(",")//un array
document.write(resultado[1]);

//substring agregamos la posicion en un rango
let cadena15 = new String("ABCDEF");

resultado = cadena.substring(0,2)
document.write(resultado);

//toLowerCase convierte todo en minuscula
let cadena16 = new String("ABCDEF");

resultado = cadena.toLowerCase()
document.write(resultado);

//toUpperCase convierte todo en mayuscula
let cadena17 = new String("ABCDEF");

resultado = cadena.toUpperCase()
document.write(resultado);

//toString convierte a string
let cadena18 = new String("2123");

resultado = cadena.toString();
document.write(resultado);

//elimina espcion con trim
let cadena19 = new String("    2123   ");

resultado = cadena.trim();
document.write(resultado);

//elimina los espacio del fial trimEnd
let cadena20 = new String("2123   ");

resultado = cadena.trimEnd();
document.write(resultado);

//elimina los espacio del principio trimEnd
let cadena21 = new String("    2123");

resultado = cadena.trimStart();
document.write(resultado);


//pop elimina el ultimo elemento de un array y lo devuelve

let cadena23 = new String("jorge" , "maria" , "pedro");

resultado = nombres.pop()
document.write(nombres);

//shift elimina el primer elemento de array y lo devuelve
let cadena24 = new String("jorge" , "maria" , "pedro");

resultado = nombres.shift()
document.write(nombres);

//push agregar un elemento al final de la lista al array
let cadena25 = new String("jorge" , "maria" , "pedro");

resultado = nombres.push("juancito","michael")
document.write(nombres);

//reverse invierte el orden de los elementos de un array
let numero11 = [1,2,3,4,5];

resultado = numero11.reverse()
document.write(numero11);

// unshift agrega al principio
let numeros = [1,2,3,4,5];
numeros.unshift(0,1,2)
document.write(numeros);

//sort - ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado/
let numeros7 = [2,6,5,1,3,4];
numeros7.sort()
document.write(numeros7);

//splice - cambia el contenido de un array eliminando elementos existentes y/o agregamos nuevos elementos
let numero5 = ["manzana", "pedro", " dedo","bobo"];
numeros5.splice(1,3,"roberto","gustavo","maximo")
document.write(numeros5);


//accesores
//join  crea un nuevo array
let numero6 = ["manzana", "pedro", " dedo","bobo"];
let resultado = numeros5.join()
document.write(numeros5);
//splice devuelve una parte del array
let numero12 = ["manzana", "pedro", " dedo","bobo"];
let resultado1 = numeros5.slice(0,2);
document.write(resultado1);
//include indica si esta el texto
let numero13 = ["manzana", "pedro", " dedo","bobo"];
let resultado2 = numeros4.include("pedro");//indexof tambien funciona asi
document.write(resultado2);

//de repeticion
//Filter crea un nuevo array con todos los elementos que cumplan la condicion como un bucle
let caddenas = ["manzana", "pedro", " dedo","bobo"];
caddenas.filter(numero =>document.write(numero + "<br>"))
///condicion: filter:
resultado = numero.filter(numero => numero.length > 4)
document.write(resultado) 
//forEach - ejecuta la funcion indicada una vez por cada elemento del array
resultado = numero.forEach(numero => numero.length > 4)
document.write(resultado) 

//objeto de math - basico
