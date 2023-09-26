export class Usuario {
    constructor(_id = "", nombre = "", pass="") {
      this._id = _id;
      this.nombre = nombre;
      this.pass = pass; 
    }
  
    _id: string;
    nombre: string;
    pass: string;
  }