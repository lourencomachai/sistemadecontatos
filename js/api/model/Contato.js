export class Contato{

    //atributos
    _nome
    _numero
    _email

    //metodos
    constructor(nome, numero, email){
        this._nome = nome
        this._numero = numero
        this._email = email
    }

    //metodos get
    get nome(){return this._nome}
    get numero(){return this._numero}
    get email(){return this._email}

    //metodos set
    set nome(nome){this._nome = nome}
    set numero(numero){this._numero = numero}
    set email(email){this._email = email}

    //to String
    toString(){
        return `{
            nome: ${this._nome},
            numero: ${this._numero},
            email: ${this._email}
        }
        `
    }
}