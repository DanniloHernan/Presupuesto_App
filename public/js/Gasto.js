class Gasto extends DatoDB{
    static contadorGastos = 0;

    constructor(descripcion, fecha, valor,id_db){
        super(descripcion, fecha, valor,id_db);
        this._id = ++Egreso.contadorGastos;
    }
    get id(){
        return this._id;
    }
}