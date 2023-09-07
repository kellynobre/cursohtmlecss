//Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase(); //Transforme o nome para letra maiúscula: toUpperCase()
  const totalAnos = 2050 - ano; //Calcule o total de anos desde o lançamento do livro: 2050 - ano
  const frase = nome + " por " + autor; //Crie uma variável com a frase: nome + ' por ' + autor;
  const objeto = {
    //Coloque os 3 valores acima em um objeto.
    nome: nomeMaior,
    totalAnos,
    frase,
  };
  return objeto; //Retorne (return) o objeto definido.
}

/*execute a função com os seguintes argumentos:
'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien' */
/*Guarde o retorno da função executada em uma variável,
e Log a frase final da função executada no console. */
const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);

/*OU.... fazer de uma forma menor:
function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno);*/
