dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRobeto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert ("cofla; comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla; comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
 else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("cofla; comprate el helado de heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
 }

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
   alert("cofla; comprate el helado de heladovich");
   alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && (dineroCofla < 2.9)){
    alert("cofla; comprate el helado de helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
 }
 else if (dineroCofla >= 2.9){
    alert("cofla; comprate el helado de comfites o el pote de 1/4kg");
    alert("y te sobran " + (dineroCofla - 2.9));
 }

 



 ///practicas 
 let free = false;

 const validarCliente = (time)=>{
   let edad = prompt("cual es tu edad");
   if (edad > 18){
      if(time >= 2 && time <7 && free == false){
         alert("podes pasar gratis porque sos la primer persona despues de las 2 AM");
         free= true;
      }else{
         alert(`son las ${time}:Hs y podes pasar, pero tenes que pagar la entrada`)
      }
   
   }else {
      alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
   }
 }

 validarCliente(23)
 validarCliente(24)
 validarCliente(1)
 validarCliente(2)
 validarCliente(2.4)
 validarCliente(3)



 //problema 2 registro de alumnos

 let cantidad = prompt("cuantos alumnos son?");
 let alumnosTotales = [];

 for (i = o; i < cantidad; i++){
   alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0]

 }
 const tomarAsistaencia = (nombre,p)=>{
   let presencia = prompt(nombre);
   if (presencia == "p"|| presencia == "P"){
      alumnosTotales[i][1]++;
   }
 }

for (i = 0; i < 30; i++){
   for(alumno in alumnosTotales){
      tomarAsistaencia(alumnosTotales[alumno][0],alumno)
   }
}
for (alumno in alumnosTotales){
   let resultado = `${alumnosTotales[alumno][0]}:<br>
              Asistencias: ${alumnosTotales[alumno][1]} <br>
              Ausencias: ${30 - parseInt( alumnosTotales[alumno][1])}
}`;
if (30 - alumnosTotales[alumno][1] > 18){
   resultado+= "<b style='color: red'>Reprobado por inasitecias<b></br><br>";
}else {
   resultado += "<br><br>"
}document.write(resultado)
}



//problema numero dos
const sumar = (num1, num2) =>{
   return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) =>{
   return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) =>{
   return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) =>{
   return parseInt(num1) * parseInt(num2);
}
alert("que operacion deseas realizar?");
let operacion = promot("1: suma , 2:resta, 3:division, 4:multiplicacion");
if (operacion == 1) {
   let numero1 = prompt("primer numero para sumar ");
   let numero2 = prompt("segundo numero para sumar ");
   resultado = sumar(numero1,numero2)
   alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 1) {
   let numero1 = prompt("primer numero para restar ");
   let numero2 = prompt("segundo numero para restar ");
   resultado = restar(numero1,numero2)
   alert(`tu resultado es ${resultado}`);
}
else if (operacion == 1) {
   let numero1 = prompt("primer numero para dividir ");
   let numero2 = prompt("segundo numero para dividir ");
   resultado = dividir(numero1,numero2)
   alert(`tu resultado es ${resultado}`);
}
else if (operacion == 1) {
   let numero1 = prompt("primer numero para multiplicar ");
   let numero2 = prompt("segundo numero para multiplicar ");
   resultado = multiplicar(numero1,numero2)
   alert(`tu resultado es ${resultado}`);
}
else {
   alert("no se ha encontrado la operacion")
}



//problema numero 3
class celulares {
   constructor(color,peso,rdp,rdc,ram){
      this.color = color;
      this.peso = peso;
      this.resolucionDePantalla = rdp;
      this.resolucionDeCamara = rdc;
      this.memoriaRam = ram;
      this.encendido = false;
   }
   presionarBotonEncendido(){
      if (this.encendido == false) {
         alert("celular prendido");
         this.encendido = true;
      }else {
         alert("Celular apagado")
         this.encendido = false;
      }
   }

      reiniciar(){
         if (this.encendido == true) {
            alert("reiniciando celular");
         }else {
            alert("el celular esta apagado")
         }
      }
      tomarFoto(){
         alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
      }
      grabarVideo(){
         alert(`grabando video en: ${this.resolucionDeCamara}`)
      }
      mobileInfo(){
         return`
         Color: <b>${this.color}</b><br>
         Peso: <b>${this.peso}</b><br>
         Tamaño: <b>${this.resolucionDePantalla}</b><br>
         Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
         Memoria ram:<b>${this.memoriaRam}</b> <br>
         `;
      }
   }
class celularAltaGama extends celular{
   constructor(color,peso,tamaño,rdc,ram,rdce){
      super(color,peso,tamaño,rdc,ram)
      this.resolucionDeCamaraExtra = rdce;
   } grabarVideoLento(){
      alert("estas grabando en camara lenta")
   }
   reconocimientoFacial(){
      alert("vamos a iniciar un reconocimiento facial")
   }
   infoAltaGama(){
      return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`

   }
}

   //celular1 = new celular("rojo","150g","5'","hd","2GB")
   //celular2= new celular("negro","150g","6'","full hd","4GB")
   //celular3 = new celular("blanco","150g","6.6'","full hd","6GB")
  
   //celular1.presionarBotonEncendido();
   //celular1.tomarFoto();
   //celular1.grabarVideo();
   //celular1.reiniciar();
   //celular1.presionarBotonEncendido();

celular1 = new celularAltaGama("rojo","130g","5.2","4K","8GB","full hd")
celular2 = new celularAltaGama("rojo","130g","5.2","4K","8GB","hd")

//ducument.write(`
//${celular1.mobileInfo}<br>
//${celular2.mobileInfo}<br>
//${celular3.mobileInfo}<br>
//`)

ducument.write(`
${celular1.infoAltaGama()} <br><br>
${celular2.infoAltaGama()} <br>
`)


////programa para saber que app descargar
class App {
   constructor(descargas,puntuacion,peso){
      this.descargas = descargas;
      this.puntuacion = puntuacion;
      this.peso = peso;
      this.iniciada =  false;
      this.instalada = false;
   }
   instalar(){
   if (this.instalada == false){
      this.instalada = true;
       alert("instalada correctamente")


   }if (this.instalada == true){
      this.instalada = false;
      alert("app desinstalada correctamente")
      
   }
}
   abrir(){
      if (this.iniciada == false && this.instalada == true){
         this.iniciada = true;
         alert("app encendida");
      }
   }cerrar(){
   if (this.iniciada == true && this.instalada == true){
         this.iniciada = false;
         alert("app cerrada");
      }
}
appInfo(){
   return`
   Descargas: <b>${this.descargas}</b><br>
   Puntuacion: <b>${this.puntucacion}</b><br>
   Peso: <b>${this.peso}</b><br>
   `
}
}

app = new App("16.000","5 estrellas","900MB");
app1 = new App("1.000","2 estrellas","400MB");
app2 = new App("6.000","4.5 estrellas","100MB");
app3 = new App("23.000","4 estrellas","1GB");
app4 = new App("900","4.8 estrellas","250MB");
app5 = new App("17","3 estrellas","522MB");
app6 = new App("4200","3.7 estrellas","723MB");
app7 = new App("42.981","2.9 estrellas","800MB");


document.write(`
${app.appInfo()}<br>
${app1.appInfo()}<br>
${app2.appInfo()}<br>
${app3.appInfo()}<br>
${app4.appInfo()}<br>
${app5.appInfo()}<br>
${app6.appInfo()}<br>
${app7.appInfo()}<br>
`);


//app.instalar()
//app.abrir()
//app.cerrar()
//app.desinstalar()


