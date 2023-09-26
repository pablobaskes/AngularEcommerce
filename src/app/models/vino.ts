export class Vino {
    constructor(
        _id = "", 
        nombre = "",       
        denominacion = "",     
        precio=0,
        color="",
        tipo="",
        imagePath = "",
        cantidad = 0,
        precioTotal = 0
        ){
      this._id = _id;
      this.nombre = nombre;   
      this.denominacion = denominacion;     
      this.precio=precio
      this.color=color
      this.tipo=tipo
      this.imagePath=imagePath
      this.cantidad = cantidad
      this.precioTotal = precioTotal
    }
  
    _id: string;
    nombre: string;   
    denominacion: string;
    precio:number;
    color:string;
    tipo:string;
    imagePath:string;
    cantidad : number;
    precioTotal : number;
  }