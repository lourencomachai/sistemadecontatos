export class ListaContatos{

    //atributos
    _contatos //lista de contatos

    //metodos
    constructor(){
        this._contatos = []
    }

    //metodos get
    get contatos(){return [].concat(this._contatos)}

    //metodos para operacoes na lista
    adicionar(contato){
        this._contatos.push(contato)
    }

}