export class Turno {

    // tslint:disable-next-line: variable-name
    constructor( _id = '', idt = 0, turno = '') {

        this._id = _id;
        this.idt =  idt;
        this.turno = turno;

    }

    _id: string;
    idt: number;
    turno: string;

}
