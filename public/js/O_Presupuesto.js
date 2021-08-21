class Presupuesto{
    constructor(id_presupuesto, nombre_presupuesto, usuario_id){
        this._id_presupuesto = id_presupuesto;
        this._usuario_id = usuario_id;
        this._nombre_presupuesto = nombre_presupuesto;
    }
    get id_presupuesto(){
        return this._id_presupuesto;
    }
    set id_presupuesto(id_presupuesto){
        this._id_presupuesto = id_presupuesto;
    }
    get usuario_id(){
        return this._usuario_id;
    }
    set usuario_id(usuario_id){
        this._usuario_id = usuario_id;
    }
    get nombre_presupuesto(){
        return this._nombre_presupuesto;
    }
    set nombre_presupuesto(nombre_presupuesto){
        this._nombre_presupuesto = nombre_presupuesto;
    }
}