export class Bitacora {

    // tslint:disable-next-line: variable-name
    constructor( id = 0, _id = '', name = '', usuario = '', turno = '', area = '', position = '' ) {
        this.id = id;
        this._id = _id;
        this.name =  name;
        this.usuario = usuario;
        this.turno = turno;
        this.area = area;
        this.position = position;
    }

    id: number;
    _id: string;
    name: string;
    usuario: string;
    turno: string;
    area: string;
    position: string;
}
