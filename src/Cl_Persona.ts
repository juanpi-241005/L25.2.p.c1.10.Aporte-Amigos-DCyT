export default class Cl_Persona{
    private _cedula: string;
    private _billetes5: number;
    private _billetes10: number;
    private _billetes20: number;

    constructor(cedula: string, billetes5: number, billetes10: number, billetes20: number){
        this.cedula = cedula;
        this._billetes5 = billetes5;
        this._billetes10 = billetes10;
        this._billetes20 = billetes20;
    }

    set cedula(c: string){
        this._cedula = c;
    }
    get cedula(): string{
        return this._cedula;
    }

    set billetes5(b5: number){
        this._billetes5 = +b5;
    }
    get billetes5(): number{
        return this._billetes5;
    }

    set billetes10(b10: number){
        this._billetes10 = +b10;
    }
    get billetes10(): number{
        return this._billetes10;
    }

    set billetes20(b20: number){
        this._billetes20 = +b20;
    }
    get billetes20(): number{
        return this._billetes20;
    }

    valorBilletes5(): number{
        return this.billetes5 * 5;
    }

    valorBilletes10(): number{
        return this.billetes10 * 10;
    }

    valorBilletes20(): number{
        return this.billetes20 * 20;
    }
    
    montoTotal(): number{
        return this.valorBilletes5() + this.valorBilletes10() + this.valorBilletes20();
    }
}