//Declaração de variaveis
let nome: String = "Don"
let idade: number = 21
let altura: number = 1.79
let temGato: boolean = true

//Array
let numeros: number[] = [2,7,6,8]
//Array com nome
let nomes: string[] = ['Marcos','Luan','Saulo']
//Array com letras e numeros
let coisas: any[] = ['Saulo',15,23,'Jefferson']

//Função TS
function firstLetterUpperCase (nome: string, age: number){
    let firstLetter = nome.toUpperCase()
    return firstLetter+nome
}