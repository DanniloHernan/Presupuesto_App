class ingresoT extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, fecha, valor){
        super(descripcion, fecha, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}