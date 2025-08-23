export default class Cl_Asociacion{
    constructor(){
        this.acMontoTotal = 0;
        this.acBilletes5 = 0;
        this.acBilletes10 = 0;
        this.acBilletes20 = 0;
    }

    procesarPersona(per){
        this.acMontoTotal += per.montoTotal();

        this.acBilletes5 += per.billetes5

        this.acBilletes10 += per.billetes10

        this.acBilletes20 += per.billetes20;
    }

    totalReunido(){
        return this.acMontoTotal;
    }

    totalReunidoDA(){
        return this.acMontoTotal + 225;
    }

    totalBilletes5(){
        return this.acBilletes5 + 5;
    }

    totalBilletes10(){
        return this.acBilletes10 + 10;
    }

    totalBilletes20(){
        return this.acBilletes20 + 5;
    }

    totalBiletesDA(){
        return this.totalBilletes5() + this.totalBilletes10() + this.totalBilletes20();
    }

    porcBilletes20(){
        return (this.totalBilletes20() * 100) / this.totalBiletesDA();
    }
}