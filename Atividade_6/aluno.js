const aluno = {
    nome: "Pedro",
    idade: 20,
    notas: [8, 7, 9]
};

let soma = 0;

for (let i = 0; i < aluno.notas.length; i++) {
    soma += aluno.notas[i];
}

let media = soma / aluno.notas.length;

let situacao = media >= 7 ? "Aprovado" : "Reprovado";

console.log("Nome:", aluno.nome);
console.log("Média:", media.toFixed(2));
console.log("Situação:", situacao);