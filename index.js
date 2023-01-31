import inquirer from 'inquirer'
import chalk from 'chalk' 


let array = ["color", "  margin-left", "font-size"] 

menu()
function menu() {
    inquirer.prompt([{
        type: 'list',
        name: 'choices',
        message: 'O que deseja fazer?',
        choices: [
            'Adicionar',
            'Remover',
            'Consultar',
            'Exit'
        ]
    }])
    .then((answer) => {
        let choices = answer['choices']

        if (choices === 'Adicionar'){
            incluirRegra()
        } else if (choices === 'Remover'){
            ExcluirRegra()
        } else if (choices === 'Consultar'){
            consultarLista()
        } else if (choices === 'Exit'){
            console.log(Exit)
            Exit()
        }
    })
}

function voltar(){
    inquirer.prompt([{
        type: 'list',
        name: 'voltar',
        message: 'retornar ao menu principal?',
        choices: [
            'Sim',
            'Não',
        ]
    }])
    .then((answer) => {
        let voltar = answer['voltar']

        if (voltar === 'Sim'){
            menu()
        }else if (voltar === 'Não'){
            console.log('Sair')
            Exit()
        }
    })
}


function incluirRegra() {
    inquirer.prompt([{
        name: 'inserir',
        message: 'Digite um comando'
    }])
    .then((answer) => {
        let comandoCSS = answer['inserir']

        if (!array.includes(comandoCSS)){
            array.push(comandoCSS)
            console.log('O comando foi inserido com sucesso!')
            console.log("CSS:", array.sort())
            return voltar()

        }else{
            console.log(chalk.red('Esse comando já existe'))
            incluirRegra()
        }
    })
}


function ExcluirRegra(){
    inquirer.prompt([{
        name: 'remover',
        message: 'Digite qual comando você gostaria de Excluir: '
    }])
    .then((answer) => {
        let excluirComando = answer['remover']

        if (array.includes(excluirComando)){
            let index = array.indexOf(excluirComando);
            while(index >= 0){
                array.splice(index, 1);
                index = array.indexOf(findFor);
            }
            console.log('O comando foi Excluido com sucesso')
            console.log("CSS: ", array.sort())
            return voltar()
        } else {
            console.log(chalk.red('Esse comando foi Excluido !'))
            console.log("CSS: ", array.sort())
            return voltar()
        }
    })
}


function consultarLista(){
    console.log("CSS: ", array.sort())
    voltar()
}

function Exit(){
    console.log("Até a próxima!")
    process.exit()
}