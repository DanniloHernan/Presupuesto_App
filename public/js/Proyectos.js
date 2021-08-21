class Proyecto{
    static contadorProyectos = -1;

    constructor(nombre, fecha, id_proyecto){
        this._nombre = nombre;
        this._id_proyecto = id_proyecto;
        this._fecha = fecha;
        this._id = ++Proyecto.contadorProyectos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get id_proyecto(){
        return this._id_proyecto;
    }
    set id_proyecto(id_proyecto){
        this._id_proyecto = id_proyecto;
    }
    get fecha(){
        return this._fecha;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }
    get id(){
        return this._id;
    }
}