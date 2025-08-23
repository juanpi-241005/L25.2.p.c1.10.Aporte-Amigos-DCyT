import Cl_Persona from "./Cl_Persona";

export default class Cl_Asociacion{
    private acMontoTotal: number = 0;
    private acBilletes5: number = 0;
    private acBilletes10: number = 0;
    private acBilletes20: number = 0;
    constructor(){}

    procesarPersona(per: Cl_Persona): void{
        this.acMontoTotal += per.montoTotal();

        this.acBilletes5 += per.billetes5

        this.acBilletes10 += per.billetes10

        this.acBilletes20 += per.billetes20;
    }

    totalReunido(): number{
        return this.acMontoTotal;
    }

    totalReunidoDA(): number{
        return this.acMontoTotal + 225;
    }

    totalBilletes5(): number{
        return this.acBilletes5 + 5;
    }

    totalBilletes10(): number{
        return this.acBilletes10 + 6;
    }

    totalBilletes20(): number{
        return this.acBilletes20 + 5;
    }

    totalBiletesDA(): number{
        return this.totalBilletes5() + this.totalBilletes10() + this.totalBilletes20();
    }

    porcBilletes20(): number{
        return (this.totalBilletes20() * 100) / this.totalBiletesDA();
    }
}
