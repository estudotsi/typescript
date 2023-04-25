let nome: string = 'Rogerio';
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