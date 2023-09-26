import { Vino } from "../models/vino";
export interface Pedido{
    _id : string
    pedido : Vino[]
    idUser : string
}