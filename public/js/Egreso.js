class Egreso extends DatoDB{
    static contadorEgresos = 0;

    constructor(descripcion, fecha, valor, id_db){
        super(descripcion, fecha, valor, id_db);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}