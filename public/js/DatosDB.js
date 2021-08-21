class DatoDB{
    constructor(descripcion, fecha, valor, id_db){
        this._descripcion = descripcion;
        this._valor = valor;
        this._fecha = fecha;
        this._id_db = id_db;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }
    get id_db(){
        return this._id_db;
    }
    set id(id){
        this._id_db = id_db;
    }
}