export default class Cl_Persona{
    constructor(cedula, billetes5, billetes10, billetes20){
        this._cedula = cedula;
        this._billetes5 = billetes5;
        this._billetes10 = billetes10;
        this._billetes20 = billetes20;
    }

    set cedula(c){
        this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }

    set billetes5(b5){
        this._billetes5 = +b5;
    }
    get billetes5(){
        return this._billetes5;
    }

    set billetes10(b10){
        this._billetes10 = +b10;
    }
    get billetes10(){
        return this._billetes10;
    }

    set billetes20(b20){
        this._billetes20 = +b20;
    }
    get billetes20(){
        return this._billetes20;
    }

    valorBilletes5(){
        return this.billetes5 * 5;
    }

    valorBilletes10(){
        return this.billetes10 * 10;
    }

    valorBilletes20(){
        return this.billetes20 * 20;
    }

    montoTotal(){
        return this.valorBilletes5() + this.valorBilletes10() + this.valorBilletes20();
    }
}