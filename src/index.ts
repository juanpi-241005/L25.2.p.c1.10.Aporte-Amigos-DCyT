/*10. APORTES AMIGOS DCyT
Los aportes a la asociación egresados del decanato se realizan en billetes de $5, $10 y $20.
Cuando llega una persona a aportar proporciona su cédula y la cantidad de billetes que entregará
de cada denominación. La administración guarda la cantidad de billetes por denominación
acumulados hasta el día anterior. Se desea conocer el monto total aportado por cada persona, el
total reunido en el día, el total incluyendo lo de días anteriores y el porcentaje de billetes de 20
en relación a la cantidad total de billetes.

La salida corresponde a los siguientes datos de la persona que aporta (cedula, cantidad billetes
de 5$, cantidad de billetes de 10$, cantidad de billetes de 20$): (12122344, 2, 1, 0)
(33144567,2,3,2) (31123456,1,2,3).
Cantidad de billetes de 5$ acumulados hasta el día anterior: 5
Cantidad de billetes de 10$ acumulados hasta el día anterior: 10
Cantidad de billetes de 20$ acumulados hasta el día anterior: 5 */

import Cl_Persona from "./Cl_Persona.js";
import Cl_Asociacion from "./Cl_Asociacion.js";

let persona1: Cl_Persona = new Cl_Persona("V12122344", 2, 1, 0);
let persona2: Cl_Persona = new Cl_Persona("V33144567", 2, 3, 2);
let persona3: Cl_Persona = new Cl_Persona("V32123456", 1, 2, 3);
let asociacion: Cl_Asociacion = new Cl_Asociacion();

asociacion.procesarPersona(persona1);
asociacion.procesarPersona(persona2);
asociacion.procesarPersona(persona3);

let salida: HTMLElement | null = document.getElementById("salida");
if(salida){
    salida.innerHTML += `<p>Monto total aportado por la persona con cedula ${persona1.cedula} es $${persona1.montoTotal()}</p>`;
    salida.innerHTML += `<p>Monto total aportado por la persona con cedula ${persona2.cedula} es $${persona2.montoTotal()}</p>`;
    salida.innerHTML += `<p>Monto total aportado por la persona con cedula ${persona3.cedula} es $${persona3.montoTotal()}</p>`;
    salida.innerHTML += `<p>Total reunido en el día: $${asociacion.totalReunido()}</p>`;
    salida.innerHTML += `<p>Total reunido en el día incluyendo lo de dias anteriores: $${asociacion.totalReunidoDA()}</p>`;
    salida.innerHTML += `<p>Porcentaje de billetes de 20: ${asociacion.porcBilletes20()}</p>`;
}
else {
    console.log("No se encontró el elemento con el id 'salida'");
}