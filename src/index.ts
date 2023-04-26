/*let nome: string = 'Rogerio';
let ano: number = 21;

function retornaNome(): string{
    return nome;
}

function digaOi(): void{
    console.log("Oi");
}
digaOi();
console.log(retornaNome());

function multiplicar(a: number, b: number): number{
    return a * b; 
}
console.log(multiplicar(5,5));


let calculo;
calculo = digaOi;
calculo();

calculo = multiplicar;
console.log(calculo(6,6));*/

let funcionario: { supervisores: string[], baterPonto: (horas: number) => string } = {supervisores: ['Ana', 'Fernado'], baterPonto(horario: number): string {
    if(horario <= 8){
        return 'Ponto normal'
    }else{
        return 'Fora do Horário'
    }
}}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));


