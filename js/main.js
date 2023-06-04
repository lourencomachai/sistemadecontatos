import { ContatoController } from './api/controller/ContatoController.js'

//instancia do contacto controller
const contatoController = new ContatoController()



//formulario
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    contatoController.adicionar()
})