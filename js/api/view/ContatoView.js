export class ContatoView{

    //atributos
    _elemento

    //metodos
    constructor(elemento){
        this._elemento = elemento
    }

    _templete(model){
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Numero</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.contatos.map((contato)=>{
                        return `
                            <tr>
                                <td>${contato.nome}</td>
                                <td>${contato.numero}</td>
                                <td>${contato.email}</td>
                            <tr>
                        `
                    }
                    ).join('')}
                </tbody>
            </table>
        `
    }

    update(model){
        this._elemento.innerHTML = this._templete(model)
    }

}