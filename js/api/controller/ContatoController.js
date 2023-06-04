import { Contato } from '../model/Contato.js'
import { ListaContatos } from '../model/ListaContatos.js'
import { ContatoView } from '../view/ContatoView.js'

export class ContatoController{

    //atributos
    _inputNome
    _inputNumero
    _inputEmail

    _listaDeContatos
    _contatoView


    //metodos
    constructor(){
        this._inputNome = document.querySelector('#nome')
        this._inputNumero = document.querySelector('#numero')
        this._inputEmail = document.querySelector('#email')

        this._listaDeContatos = new ListaContatos()

        //instancia de contato view
        this._contatoView = new ContatoView(document.querySelector('.dados'))

        this._contatoView.update(this._listaDeContatos)
        
    }

    //metodo para adicionar novo contato e atualizar na lista
    adicionar(){
        const contato = this._criarContato()
        console.log(contato)
        this._listaDeContatos.adicionar(contato)
        this._contatoView.update(this._listaDeContatos)
        this._limpar()
    }

    //metodo para criar um novo contato
    _criarContato(){
        return new Contato(
            this._inputNome.value,
            this._inputNumero.value,
            this._inputEmail.value
        )
    }

    //metodo para limpar os inputs e focar novamente no nome
    _limpar(){
        this._inputNome.value = ''
        this._inputNumero.value = ''
        this._inputEmail.value = ''

        this._inputNome.focus()
    }

    



}