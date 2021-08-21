class Ingreso extends DatoDB{
    static contadorIngresos = 0;

    constructor(descripcion, fecha, valor,id_db){
        super(descripcion, fecha, valor,id_db);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}