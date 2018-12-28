
class Topic{
    text:string;
    value:number|string;
    tag:string;
}

export class Qas {
    q:string;
    A:Topic;
    B:Topic;

    constructor(_q:string,_A:Topic,_B:Topic){
        this.q = _q;
        this.A = _A;
        this.B = _B;    
    }
}


export let result = {
    "E": 0,
    "I": 0,
    "N": 0,
    "S": 0,
    "T": 0,
    "F": 0,
    "P": 0,
    "J": 0
}

