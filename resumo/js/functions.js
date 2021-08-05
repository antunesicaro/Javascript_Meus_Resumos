/*
let num1 = prompt("Diz o primeiro numero ai");
let num2 = prompt("Diz o segundo numero numero ai");
const resultado = Number(num1) + Number(num2);
alert(`o resultado da de num1 + num2 eh ${resultado}` );
*/

/*
const nome = prompt('Digite seu nome completo');
document.body.innerHTML += `O seu nome é ${nome} <br/> `
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é:${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA a no seu nome?${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;
*/


/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jsteste</title>
</head>
<body>
    <h1>Número escolhido: <span id="numero-escolhido"></span></h1>
    <div id="texto">besteira</div>
    <script src="js/functions.js"></script>
</body>
</html>

---------------


const numero = Number(prompt("Digite um número"));
const escolha = document.getElementById('numero-escolhido');
const divTexto = document.getElementById('texto');

escolha.innerHTML += numero;
divTexto.innerHTML = '';//zera tudo q tem no html antes de c0meçar a botar os novos
divTexto.innerHTML += `<p>Seu número + 2 é ${numero + 2}</p>`;
divTexto.innerHTML += `<p>Raiz quadrada é ${Math.sqrt(numero)}</p>`;
divTexto.innerHTML += `<p>É inteiro?: ${Number.isInteger(numero)}</p>`;
divTexto.innerHTML += `<p>arredonda p baixo ${Math.floor(numero)}</p>`;
divTexto.innerHTML += `<p>arredonda p cima ${Math.ceil(numero)}</p>`;
divTexto.innerHTML += `<p>duas casas ${numero.toFixed(2)}</p>`;
*/



/*<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jsteste</title>
</head>
<body>
    <form class="form" action="" method="get">
            <p>Nome:<input type="text" class="nome" /> </p>
            <p>Sobrenome:<input type="text" class="sobrenome" /> </p>
            <p>Peso:<input type="text" class="peso" /> </p>
            <p>Altura:<input type="text" class="altura" /> </p>
            <button>Enviar!</button>
    </form>

    <div class="resultado">
        
    </div>


    <script src="js/functions.js"></script>
</body>
</html> 
function meuEscopo(){
    
    //previnir que ao enviar o formulário, a página seja atualiza, pois se for, perderemos os dados enviados
 //const form = document.querySelector('.form');  //seleciona o formulário e joga essa seleção pra variavel form
    //form.onsubmit = function(evento){ //ao enviar o formulário, executa uma função que vai fazer algo... o evento da function é o onclick, ai podemos nomear pra modificar seus comportamentos
        //evento.preventDefault();//evita o comportamento padrão do navegador, dai faz com que não atualize a página e os dados sejam perdidos.
        //console.log('foi enviado po');
    //};
    
    //MANEIRA ATUALIZADA DE previnir que ao enviar o formulário, a página seja atualiza, pois se for, perderemos os dados enviados
    
    const form = document.querySelector('.form');  //seleciona o formulário e joga essa seleção pra variavel form
    const resultado = document.querySelector('.resultado'); //seleciona a div resultado que é pra onde vai os valores digitados no input
    const pessoas = []; //array vazio, pra poder abrigar os dados
    function recebeEventoForm(evento){//essa função só é executada quando há um evento, esse evento vai ter seu padrão que é enviar automaticamente previnido, assim não vai enviar automático e perder dados
        evento.preventDefault();
        //pegando do html pra gravar na variável aqui e poder usar posteriormente
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //cria objeto q já retorna valores
        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        };
        //adiciona cada pessoa em pessoas
        pessoas.push(pessoa);
        //motra como tá ficando o array
        console.log(pessoas);
        //joga na div resultado cada valor do input
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    form.addEventListener('submit',recebeEventoForm); //escuta um evento, quando houver submit, executa a função recebeEventoForm 
}

meuEscopo();













APLICAÇÃO CONHECIMENTO PESO EM IMC FEITO POR MIM

HTML
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modelo</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>

  <section class="container">
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Repellendus nisi explicabo saepe voluptatibus consequuntur et corporis
      maxime quos, doloribus vitae voluptatum quisquam necessitatibus
      pariatur veritatis exercitationem beatae officiis suscipit Ea!
    </p>

    <form class="form" action="" method="get">
      <p>Peso:<input type="text" class="peso" /> </p>
      <p>Altura:<input type="text" class="altura" /> </p>

      <div class="resultado">
      
      </div>
      <button>Enviar!</button>
</form>



  </section>

  <script src="./assets/js/main.js"></script>
</body>

</html>

CSS
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
:root {
  --primary-color: rgb(17, 86, 102);
  --primary-color-darker: rgb(9, 48, 56);
}

* {
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0;
  padding: 0;
  background: var(--primary-color);
  font-family: 'Open sans', sans-serif;
  font-size: 1.3em;
  line-height: 1.5em;
}

.container {
  max-width: 640px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

form input, form label, form button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

form input {
  font-size: 24px;
  height: 50px;
  padding: 0 20px;
}

form input:focus {
  outline: 1px solid var(--primary-color);
}

form button {
  border: none;
  background: var(--primary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
}

form button:hover {
  background: var(--primary-color-darker);
}




JS
function meuEscopo(){
        //MANEIRA ATUALIZADA DE previnir que ao enviar o formulário, a página seja atualiza, pois se for, perderemos os dados enviados
        const form = document.querySelector('.form');  //seleciona o formulário e joga essa seleção pra variavel form
        const resultado = document.querySelector('.resultado');
        function recebeEventoForm(evento){//essa função só é executada quando há um evento, esse evento vai ter seu padrão que é enviar automaticamente previnido, assim não vai enviar automático e perder dados
           
            evento.preventDefault();
            //pegando do html pra gravar na variável aqui e poder usar posteriormente
            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');
            const conta = Number(peso.value) / (Number(altura.value) ** 2);

            if(conta < 18.5){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está abaixo do peso.</p>`;
            }else if(conta >= 18.5 && conta <= 24.9){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está com peso normal.</p>`;
            }else if(conta >= 25 && conta <= 29.9){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está em sobrepeso.</p>`;
            }else if(conta >= 30 && conta <= 34.9){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está com obesidade grau 1.</p>`;
            }else if(conta >= 35 && conta <= 39.9){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está em obesidade grau 2.</p>`;
            }else if(conta >= 40){
                resultado.innerHTML = `<p>O IMC é de ${conta} e está em obesidade grau 3.</p>`;
            }    
    
        }
        form.addEventListener('submit',recebeEventoForm); //escuta um evento, quando houver submit, executa a função recebeEventoForm 
    }
meuEscopo();











//Operação ternária = serve para casos que usa-se um if e um else e só, ai pra n ficar grande o código, usa isso.
//exemplo: (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'O usuário é VIP' : 'O usuário é normal'; //guarda em const nivelUsuario se a pontuaão do usuário for maior ou igual a 1000, mostra na tela a msg entre aspas, se n for, mostra  a outra... o if e else são meio q o ? e :   .... a vantagem disso é q posso usar a variavel q ta o dizendo se é vip ou normal em qualquer lugar

//também posso fazer isso com || (ou)

const corUsuario = null; // se n escolher nenhuma, é nulo, ai a cor vai ser a padrão pois embaixo tá dizendo isso
const corPadrao = corUsuario || 'preta'; //ou é preta q é padrão pois corUsuario tá nulo, ou se ele escolher, vai ler a primeira verdadeira q vai ser a cor escolhida por ele e parar de ler e concluir q a cor é a dele esclhida
console.log(nivelUsuario,corPadrao);














//Objeto date e função construtora
const data = new Date(2020,10,16,30,50,100);//ano,mes(começa do mes 0), hora, minutos,segundos
console.log(data.toString());

//outro modo mais conhecido de mostrar data:


//Objeto date e função construtora
const data = new Date('2021-06-08 12:30:42');//ano,mes(começa do mes 0), hora, minutos,segundos
console.log('Dia' , data.getDate()); //aqui vai obter o dia... ai pode obter todo o resto tb
console.log(data.toString());
















//objeto date com datas para usar nos projetos.. já formatado
function zeroEsquerda(numero){ //paramentro numero, vai recever o numero lá do zero à esquerda embaixo q tá entre parenteses, que é o argumento pra esse paramentro aqui
  return numero >= 10 ? numero : `0${numero}` //função retorna o numero normal q leu se for maior ou igual a 10, se n for, vai botar um zero à esquerda pra formatação da data não ficar feia.
}

function formataData(data){ //parametro data q vai ser recebido do argumento data lá de baaixo
  const dia = zeroEsquerda(data.getDate());//salva na variavel o número já com 0 à esquerda a data.alguma info
  const mes = zeroEsquerda( data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());

  return `${dia}/${mes}/${ano} `; //retorna os valores nesse formato
}

const data = new Date(); //cria nova data q já tem nela a data tudo e salva na constante data
const dataBrasil = formataData(data); //entrega como argumento de formata data e lá faz todos processos, vem retornado pra cá os valores no formato formatado e salva em na const dataBrasil
console.log(dataBrasil);




















HORAS APARECENDO NA TELA 
HTML:
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modelo</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>

  <section class="container">
    <h1 class="sub">Lorem ipsum dolor sit amet</h1>






  </section>

  <script src="./assets/js/main.js"></script>
</body>

</html>



JS:^
function meuEscopo(){
const substituir = document.querySelector('.sub');
const data = new Date(); //tudo da data está aqui e vai pra const data pra tratar

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'seg';
                return diaSemanaTexto;
                case 2:
                    diaSemanaTexto = 'ter';
                    return diaSemanaTexto;
                    case 3:
                        diaSemanaTexto = 'qua';
                        return diaSemanaTexto;
                        case 4:
                            diaSemanaTexto = 'quin';
                            return diaSemanaTexto;
                            case 5:
                                diaSemanaTexto = 'sex';
                                return diaSemanaTexto;
                                case 6:
                                    diaSemanaTexto = 'sabad';
                                    return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes){
    let nomeMes;
    switch(numeroMes){
        case 0:
            nomeMes = 'jan';
            return nomeMes;
            case 1:
            nomeMes = 'fev';
            return nomeMes;
            case 2:
            nomeMes = 'mar';
            return nomeMes;
            case 3:
            nomeMes = 'abr';
            return nomeMes;
            case 4:
            nomeMes = 'mai';
            return nomeMes;
            case 5:
            nomeMes = 'junh';
            return nomeMes;
            case 6:
            nomeMes = 'julh';
            return nomeMes;
            case 7:
            nomeMes = 'ago';
            return nomeMes;
            case 8:
            nomeMes = 'set';
            return nomeMes;
            case 9:
            nomeMes = 'out';
            return nomeMes;
            case 10:
            nomeMes = 'nov';
            return nomeMes;
            case 11:
            nomeMes = 'dez';
            return nomeMes;

       
    }
}

function zeroEsquerda(numero){ //paramentro numero, vai recever o numero lá do zero à esquerda embaixo q tá entre parenteses, que é o argumento pra esse paramentro aqui
    return numero >= 10 ? numero : `0${numero}` //função retorna o numero normal q leu se for maior ou igual a 10, se n for, vai botar um zero à esquerda pra formatação da data não ficar feia.
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return( `${nomeDia}, ${data.getDate()} de ${nomeMes}`+ 
    ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}

    substituir.innerHTML = criaData(data);
}
meuEscopo();






























HORAS DE MANEIRA SIMPLES

const h1ht = document.querySelector('.container h1');
const data = new Date();
h1ht.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' , timeStyle: 'short'});























//pegar valores de array e jogar em uma variável:atribuição via desestruturação
const arrayNumeros = [100, 200, 300, 400, 500]
const [primeiroNumero, segundoNumero, , quartoNumero, ...resto] = arrayNumeros; //como se o 1,2,3,4,5 viesse pra cá e dei nome(atribuição para eles já declarando a const, ai ja vai direto pra lá o valor)  .......  se eu quiser pegar só alguns valores pode, ai pra pegar o resto usa-se ...nomeResto , dai a fica em nomeResto todo o resto do array.
//console.log(resto);
console.log(primeiroNumero,segundoNumero,quartoNumero);

//atribuição via desestruturação em array
const arrayNumeros = [[10,20,30],[40,50,60],[70,80,90]];
const [lista1,lista2,lista3] = arrayNumeros;
console.log(lista1[2]); //se eu quiser o 30

//atribuição via desestruturação em objetos

const pessoa = {
    nome:'icaro',
    idade:19,
    sobrenome: 'antunes',
    endereco: {
      rua:'passagem triangulo',
      numero: 22
    } ,
    peso: 20,
    altura: 1.80
};

//const sobrenome = pessoa.sobrenome; //atribuição normal
//via desestruturação:
const { nome,idade,sobrenome:novoNomeDevariavelParaSobrenome,endereco,endereco:{rua,numero}, ...resto} = pessoa; //pessoa é o objeto todo q vem pra cá e na atribuição via desestruturação já se cria uma const com mesmo nome da chave q tá no objeto, dai ela já é salva automático. OBS: precisa ser o mesmo do objetto... posso definir na hora tb o valor, mas só se nao tiver no objeto
console.log(nome,novoNomeDevariavelParaSobrenome,rua,numero, endereco);
console.log('');
console.log(resto);














DOM
const elementos = [
    {tag:'p', texto:'frase1'},
    {tag:'div', texto:'frase2'},
    {tag:'section', texto:'frase3'},
    {tag:'footer', texto:'frase4'}
]; //cria os objetos dentro de um array

const container = document.querySelector('.container');//seleciona o container
const novaDiv = document.createElement('div'); //cria uma nova div

for(let i = 0 ; i < elementos.length ; i++){//faz um looping
    let {tag,texto} = elementos[i];// na primeira passada vem paragrafo e frase1 //atribuição via desestruturação, ou seja, já cria variaveis com o nome que tá no objeto q vamos relacionar, q ai o valor já vem automático!  importante lembrar q q relacioanamos com objeto em looping[i] para percorrer todos os objetos dentro do array
    let tagCriada = document.createElement(tag);//pega a primeira tag q foi passada q no caso é a tag 'p' e joga pra variavel tag criada uma criação de um paragrafo.
    //let textoCriado = document.createTextNode(texto) // aqui tb cria um texto, forma um pouco mais moderna e guarda na variavel textoCriado
    tagCriada.innerText = texto; //pega a tag criada e adiciona nela um texto... um texto no paragrafo
    //tagCriada.appendChild(textoCriado); //poderia mandar um filho pra tag criada com o textoCriado tb, ai depois de estarem juntos mandava pra novaDiv e depois pro container
    novaDiv.appendChild(tagCriada); //pega a div q foi criada pra abrigar tudo e joga no final dela a tagCriada, que no caso é um parágrafo com um texto... ai depois vai pro [1] do looping e se faz o mesmo processo.
}

container.appendChild(novaDiv);//depois de terminar o looping, adiciona no final do container a novaDiv criada q engloba todas outras coisas feitas.



























FOR

const frutas = ['icaro','gui','freir'];
//modo tradicional
for(let i = 0 ; i < frutas.length ; i++){
  console.log(frutas[i]);
}
//modo com for in
for( let indice in frutas){ //for in lê os indices do array. quando for um objetvo vai ler as chaves
  console.log(frutas[indice]);
}


FOR IN COM OBJ
const pessoa = {
  nome:'icaeo',
  sobrenome:'antunes',
  idade:18
};

//pode acessar dessas duas formar, é útil quando queremos algo dinamico
//console.log(pessoa.nome);
//console.log(pessoa['nome']);

//const chave = 'sobrenome';
//console.log(pessoa[chave]);

for(let chave in pessoa){
  console.log(chave, pessoa[chave]) //chave  trás o nome do objeto em si, no caso nome,sobremno e idade... e o pessoa[chave] trás o valor de nome q é icaro, o valor de sobrenome que é antunes .. etc
}



FOR OF
//(já nos retorna direto o valor)

const nomes = ['icaro', 'pedro', 'mikael','sidney'];

for(let nome of nomes){ //declara e já chama .. nome é cada nome de nomes, for com valor retornado já
  console.log(nome);
}






















//ALTERANDO ESTILO DE CSS E POR JAVASCRIPT E APRENDENDO A COMO PEGAR DO CSS EM JS
HTML
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modelo</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>

  <section class="container">
    <h1>Lorem ipsum dolor sit amet</h1>
      
    <div class="paragrafos">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> <p>Nobis, a reiciendis veritatis saepe excepturi quia ipsum</p> <p>delectus natus maiores tempora eius, ratione cupiditate</p> <p>soluta. Minus veritatis inventore alias!</p>
    </div>
    
  </section>

  <script src="./assets/js/main.js"></script>
</body>

</html>

CSS
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
:root {
  --primary-color: rgb(17, 86, 102);
  --primary-color-darker: rgb(9, 48, 56);
}

* {
  box-sizing: border-box;
  outline: 0;
}

body {
  margin: 0;
  padding: 0;
  background: var(--primary-color);
  font-family: 'Open sans', sans-serif;
  font-size: 1.3em;
  line-height: 1.5em;
}

.container {
  max-width: 640px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

form input, form label, form button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

form input {
  font-size: 24px;
  height: 50px;
  padding: 0 20px;
}

form input:focus {
  outline: 1px solid var(--primary-color);
}

form button {
  border: none;
  background: var(--primary-color);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
}

form button:hover {
  background: var(--primary-color-darker);
}


JS
const paragrafos = document.querySelector('.paragrafos'); //seleciono a div parágrafos
const ps = paragrafos.querySelectorAll('p');// seleciono os p dentro da div paragrafos(todos)

const estilosBody = getComputedStyle(document.body);  //pego todos estilos do body e salvo em estilosBody
const backgroundColorDoBody = estilosBody.backgroundColor;



for(p of ps){//chamo cada tag p de ps(cada paragrafo de paragrafos q tao dentro daa div paragrafos)
    p.style.backgroundColor = backgroundColorDoBody; //posso alterar qualquer coisa do seu estilo pelo looping q vai mexer em todos, chamando p.style.propriedade
    p.style.color = 'white';
    p.style.fontSize = '40px';














/*
    
//WHILE

function random(min,max){
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min,max);

while(rand !== 10){
  rand = random(min,max);
  console.log(rand)
}

console.log('###########');
//do while

do{
  rand = random(min,max);
  console.log(rand)
}while(rand !== 10);













//continue
const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let numero of numeros){
  if(numero === 2 || numero === 3){//se for chegar no número, pula ele e continua o ciclo
    continue;
  }

  console.log(numero);
}



//break
const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let numero of numeros){

  console.log(numero); //mostra tudo, até o número q vai ser excluido
  if(numero === 7 ){ //se o número for 7, para nele e n procura mais nenhum(economiza memória)
    console.log('7 encontrado, ai sai');
    break;
  }
  console.log(numero);
  }

*/

/*

function ePaisagem(largura,altura){
  return largura > altura; //quando o código já retorna true ou false, pode deixar só a chekagem q elas já retornam automático
}

console.log(ePaisagem(Number(10),Number(2)));


//arrow funjction: 

const ePaisagem = (largura,altura) => largura > altura;
console.log(ePaisagem(Number(100),Number(200)));













//onload
function funcaoChamar(){
  alert('chamando!');
}


window.onload = function(){

  const divTeste = document.querySelector('.teste');
  divTeste.innerHTML = '<p onclick = "funcaoChamar()">Botei isso aqui dentro de um parágrafo , dentro de uma div chamada divTeste... dinamicamente</p>'
}


*/




/*
//MANIPULAÇÃO DE ERROS
//bloco try 
try{
  console.log(nexiste);
} catch(error){
  console.log('Erro!')//NAO MOSTRAR ISSO PRO USUÁRIO, QUESTAO DE SEGURANÇA! se tentar exexutar acima e der um erro, vai disparar essa mensagem de erro pra que o usuário saiba oq aconteuceu.
  console.log(error);//erro completo
}

----

//lançar erro

function soma(x,y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw('x e y precisam ser números!'); //lança o erro(eu mesmo crio o meu erro)
    //throw new Error('erro q desejo informar' e vem junto com onde é e pq tá dando)
  } 

  return x + y;
}

try{//se ocorrer algum erro no try, catch é exxecutado, se não, try é exectuado normalmente
  console.log(soma(1,'a')); //se tiver certo a função executa normal, se n vai catar um erro e mostrar o erro q eu mesmo lancei
}catch(error){
  console.log(error);
  console.log('deu erro gente')
}finally{
  console.log('FINALLY SEMPRE É EXECUTADO, não importa se tem erro ou não!');// exemplo de uso: quando vc abre um app ou sistema, e dá um erro, ele sempre  terá q fechar ou voltar para alguma página, então usamos isso o finnaly para: de qualquer forma fechar o app/sistema
}

//aplicação try catch finally
function retornaHora(data){
  if(data && !(data instanceof Date)) {//se a data for enviada e for diferente de alguma instancia de Date(que já é pronto)
    throw new TypeError('espera instancia de date');
  }

  if(!data){//se a data nao for enviada
    data = new Date(); // se nao enviar data, é gerado uma data automático
  }

  return data.toLocaleTimeString('pt-BR',{
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12: false
  });
}

try{
const data = new Date('01/02/1920');
const hora = retornaHora();
console.log('   ',hora);
}catch(error){
    //tratar erro
}finally{
  console.log(' tenha um bom dia')
}



















//set interval mostrando hora de tempo em tempo
function mostraHora(){ //função que contrói mostraHora, mas não mostra.
  let data = new Date();

  return data.toLocaleTimeString('pt-BR',{
  hour12:false
  });
} 

function funcaoDoInterval(){ //função que executa outra, dai pode ser usada no setInterval
  console.log(mostraHora());
}


//console.log(mostraHora());
setInterval(funcaoDoInterval,3000);// passa funcaoDoInterval como parametro de  referência e depois de quanto em quanto tempo que deseja q seja executado.//em determinado momento uma função é executada...




















//funçao anonima
function mostraHora(){ //função que contrói mostraHora, mas não mostra.
  let data = new Date();

  return data.toLocaleTimeString('pt-BR',{
  hour12:false
  });
} 

setInterval(function(){ //executa uma funcao dentro do set interval e diz de quanto tempo em tempo ela vai ser executadaa
    console.log(mostraHora());
},3000);


//funçao anonima
function mostraHora(){ //função que contrói mostraHora, mas não mostra.
  let data = new Date();

  return data.toLocaleTimeString('pt-BR',{
  hour12:false
  });
} 

const timer = setInterval(function(){ //executa uma funcao dentro do set interval e diz de quanto tempo em tempo ela vai ser executadaa
    console.log(mostraHora());
},3000);

setTimeout(function(){
    clearInterval(timer); //LIMPA O INTERVALO,ENCERRA O CICLO ... quero que o timer(que contém a função de de 3 em 3 segundos aparecer a hora) pare quando se passar 12 segundos
},12000)















//arrow function
const dizDale = function(){
  console.log('dale');
};

function executaUmaFuncao(funcao){ //função que recebe o argumento funcao
    funcao();//argumento funcao é uma função
}

executaUmaFuncao(dizDale);//chama a função e dá como argumento o dizDale, que vai ser executado em executa função sem precisar ser chamado.


const arrowFunction = () => {
  console.log('sou uma arrow function');
}

arrowFunction();








//ARGUMENTOS E PARAMETROS
function mostraArgumento(){//recebe parametro da execução de mostraArgumento
  console.log(arguments); // mostra tudo que foi recebido
  console.log(arguments[3]);//mostra um incdice dos recebidos
}

mostraArgumento('valor',1,2,30); //passa argumento pra função mostraArgumento













//arguments , funçao especial... pode ou não criar parametro em mostraArgumento
function mostraArgumento(a,b,c,d){//recebe parametro da execução de mostraArgumento
 let total = 0;
 for(let argumento of arguments){//varre cada argumento
    total = total + argumento;// pega o total q começa em 0 e vai somando ele com todos arguments
 }

 console.log(total,'###',a,b,c,d);
}

mostraArgumento(40,1,2,30); //passa argumento pra função mostraArgumento














function funcao(a,b=5,c=10){ //se eu não enviar argumento pra esses parametros, eles vao ter o valor padrao q eu igualei aqui.
  console.log(a + b + c);
}
funcao(20,30);//manda argumento pro parametro, n precisa ter todos argumentos se lá estiver um valor padrão








//desestruturação de objeto em função
function funcao({nome,sobrenome,idade}){ //no parametro é recebido o argumento de objeto enviado
  console.log(nome, sobrenome, idade);
}
funcao({nome:'icaro',sobrenome:'antunes',idade:19});//passo com argumento um objeto























FUNCAO CONTA 
function conta(operador,acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+')acumulador = acumulador + numero;
    if(operador === '-')acumulador = acumulador - numero;
    if(operador === '/')acumulador = acumulador / numero;
    if(operador === '*')acumulador = acumulador * numero;

    }

  console.log(acumulador);
}
conta('+',0, 20, 30,70,90);

//ou 


const conta = function(operador,acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+')acumulador = acumulador + numero;
    if(operador === '-')acumulador = acumulador - numero;
    if(operador === '/')acumulador = acumulador / numero;
    if(operador === '*')acumulador = acumulador * numero;

    }

  console.log(acumulador);
};
conta('+',0, 20, 30,70,90);












//rest operator
const funcaoArrowCom = (...args) =>{ //mostra todo resto q tem
  console.log(args)
};

funcaoArrowCom(1,2,3,7,9,0);//passa tudo como argumento pro ...args o '...' significa q vai pegar tudo daqui(resto)






















//RETORNO DE FUNÇÕES
function criaPessoa(nome,sobrenome){
  return {nome:nome,sobrenome:sobrenome}
}

p1 = criaPessoa('icaro','antunes');

//p1 manda p cria pessoa
//p2 manda p cria pessoa
//as duas sao mesma coisa

p2= {
  nome:'robson',
  sobrenome: 'aguusto'
}

console.log(p1,p2);
















function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Oi,começo!');
const resto = fala('Oi,final"');

console.log(resto);



//aplicação:
//pra reduzir o duplica,triplica,etc
    function duplica(n){
      return n * 2;
    }

    function triplica(n){
      return n * 3;
    }

    function quadriplica(n){
      return n * 4;
    }













    //RETORNO AVANNÇADO DE FUNÇÃO
function criaMultiplicador(multipilicador){//aqui recebe como argumento do parentese do cria multiplicador
  return function(n){
    return n * multipilicador;
  }
}

const duplica = criaMultiplicador(2);//cria uma variavel duplica  e manda o dois pro cria multiplicador, dai já retorna pra cá um função com parametro n e essa funnção com parametro n fica salvo em duplica
console.log(duplica(10)); //duplica vem pra cá sendo uma funcao com parametro n , tipo assim : duplica(n), dai a gente só faz escolher o valor pra ser  duplicado, ai essa função já retorna o resultado duplicado uma vez q o multiplicador escolhido foi o dois

const triplica = criaMultiplicador(3);
console.log(triplica(3));















//função dentro de função
function retornaFuncao(nome){
  return function(){
    return nome;
  };
}

const funcao = retornaFuncao('icaro');
const funcao2 = retornaFuncao('antunes');
console.log(funcao());
console.log(funcao2());














//CALLBACK e ORDEM DE EXECUÇÃO... CALLBACK HELL´S

//funcao que gera numero randomico aletario entre 1 e 3 segundos
function rand(min = 1000, max = 3000){
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback){
  setTimeout(function(){//executar f1 significa que depois de um tempo, o que estiver aqui dentro será executado
    console.log('f1');
    if(callback) callback();//se callback existir como função, execute-o, execute a funcao callback
  },rand());
}

function f2(callback){
  setTimeout(function(){//executar f1 significa que depois de um tempo, o que estiver aqui dentro será executado
    console.log('f2');
    if(callback) callback();//se callback existir, execute a funcao callback
  },rand());
}

function f3(callback){
  setTimeout(function(){//executar f1 significa que depois de um tempo, o que estiver aqui dentro será executado
    console.log('f3');
    if(callback) callback();//se callback existir, execute a funcao callback
  },rand());
}


//essa parte pode ser substituida para nao ficar mt info arvore de natal
f1(function(){//manda como argumento pro callback de f1, uma função callback q é executada logo depois de f1(f2 é executada)... e assim vai dando ordem
  f2(function(){
    f3(function(){
      console.log('Fui executado depois de f3');
    });
  });
})


//transforma-se em:
f1(f1Callback);//manda como argumento pro parametro callback uma função q executa f2 se mandar como argumento uma funcao... e assim vai indo na ordem

function f1Callback(){
  f2(f2Callback);
}

function f2Callback(){
  f3(f3Callback);
}

function f3Callback(){
  console.log('sou executado depois de f3');;
}






















//iife --> funcao invocade imediatamente
(function(){
  console.log('imediatamente executado')
  const nome  = 'icar';
})(); //cria função entre parenteses e dps bota (); pra executala

  const nome = 'antunes';//nao se tem conflito pois não IIFE nao toca escopo global



































//IIEE aplicação
(function(idade,peso,altura){//parametro daqui recebe argumento dos parenteses lá de baixo
  const sobrenome = 'antunes';

  function criaNome(nome){ //também posso executar funções dentro dessas funç~eops normamemente
    return nome + ' ' + sobrenome;
  }

  function falaNome(){
  console.log(criaNome('icaro'));
}

  falaNome();
  console.log(idade,peso,altura);
})(19,55.5,1.80);//arugumento é passado pro parametro de dentro da funcao



























//INTRODUCAO AO THIS E FUNCAO FÁBRICA
function criaPessoa(nome,sobrenome){
  return{
    nome,
    sobrenome,
    peso:80,
    //this referencia o obejto que tá chamando ele, no caso se p1 chamar pra executar a funcao q ele tá, ele vai fazer refericia ao parametro/argumento de p1, se for p2 de p2... etc. (p1 é pessoa1, p2 é pessoa2aaaaaaaaaaaaaaaaaaaaa)
    fala: function(assunto){//método, posso pegar ele fora daqui chaamndo com ponto(.)
      return `${nome} diz ${assunto} e tem ${this.peso} kilos` //se nao tiver o mesmo valor no parametro e eu queira usar o esse nome que tá aqui dentro desse escopo(exemplo é quando modifico aqui), ai posso botar this.nome, ou this.algo
    }
  };
}

const pessoa1 = criaPessoa('Icaro','Antunes');
const pessoa2 = criaPessoa('Nadir','Amanajas');
//console.log(pessoa1.fala('dale falando aqui po'));
console.log(pessoa1.fala('assunto'));//pessoa1 q tem o nome de icaro executa a funcao de fábrica e cria o icaro, executa o peso pq  o this fica em referencia essa, mas quando outra pessoa é executada como a 2, o this referencia a 2...
console.log(pessoa2.fala('assunto'));






























FUNCAO FACTORY PARA REDUZIR MUITOS OBJETOS LONGOS E CRIA UMA FABRICA DE OBJETOS


function criaPessoa(nome,sobrenome,altura,peso){
  return{
    nome,
    sobrenome,
    altura: altura,
    peso:peso,

    //this referencia o obejto que tá chamando ele, no caso se p1 chamar pra executar a funcao q ele tá, ele vai fazer refericia ao parametro/argumento de p1, se for p2 de p2... etc. (p1 é pessoa1, p2 é pessoa2aaaaaaaaaaaaaaaaaaaaa)
    fala: function(assunto){//método, posso pegar ele fora daqui chaamndo com ponto(.)
      return `${nome} diz ${assunto} e tem ${this.peso} kilos` //se nao tiver o mesmo valor no parametro e eu queira usar o esse nome que tá aqui dentro desse escopo(exemplo é quando modifico aqui), ai posso botar this.nome, ou this.algo
    },
    imc(){
      const indice = this.peso / (this.altura ** 2)//pega esse peso daqui de dentro q foi recebido por parametro e pode ter sido modificado aqui dentro ou nao e faz conta com ele
      return indice.toFixed(2);//duas casas decimais
    }
  };
}

const pessoa1 = criaPessoa('Icaro','Antunes',1.80,100);
const pessoa2 = criaPessoa('Nadir','Amanajas',1.60,40);
//console.log(pessoa1.fala('dale falando aqui po'));
console.log(pessoa1.fala('assunto'));//pessoa1 q tem o nome de icaro executa a funcao de fábrica e cria o icaro, executa o peso pq  o this fica em referencia essa, mas quando outra pessoa é executada como a 2, o this referencia a 2...
console.log(pessoa2.fala('assunto'));

console.log('###### IMC´s: ########');
console.log(pessoa1.imc());
console.log(pessoa2.imc());//dependendo de qual pessoa, o this refencia o valor pra cada uma e executa a função imc pegando o this.informacoes da pessoa certa(q foi escolhida) e faz as contas com ele 





























//GETTER 
function criaPessoa(nome,sobrenome,altura,peso){
  return{
    nome,
    sobrenome,
    altura: altura,
    peso:peso,

    //this referencia o obejto que tá chamando ele, no caso se p1 chamar pra executar a funcao q ele tá, ele vai fazer refericia ao parametro/argumento de p1, se for p2 de p2... etc. (p1 é pessoa1, p2 é pessoa2aaaaaaaaaaaaaaaaaaaaa)
    fala: function(assunto){//método, posso pegar ele fora daqui chaamndo com ponto(.)
      return `${nome} diz ${assunto} e tem ${this.peso} kilos` //se nao tiver o mesmo valor no parametro e eu queira usar o esse nome que tá aqui dentro desse escopo(exemplo é quando modifico aqui), ai posso botar this.nome, ou this.algo
    },
    get imc(){
      const indice = this.peso / (this.altura ** 2)//pega esse peso daqui de dentro q foi recebido por parametro e pode ter sido modificado aqui dentro ou nao e faz conta com ele
      return indice.toFixed(2);//duas casas decimais
    }
  };
}

const pessoa1 = criaPessoa('Icaro','Antunes',1.80,100);
//console.log(pessoa1.nome);
//console.log(pessoa1.imc());
console.log(pessoa1.imc);// GETTER: finge ser um dos objetos da função cria pessoa, porém precisa ter o get antes da função pra q se torne um objeto(atributo) q obtem o valor da funcao em si... 

















GETTER mais um exemplo

function criaPessoa(nome,sobrenome,altura,peso){
  return{
    nome,
    sobrenome,
    altura: altura,
    peso:peso,
    nomeCompleto(){
      return `${this.nome} ${this.sobrenome} `
    },
    //this referencia o obejto que tá chamando ele, no caso se p1 chamar pra executar a funcao q ele tá, ele vai fazer refericia ao parametro/argumento de p1, se for p2 de p2... etc. (p1 é pessoa1, p2 é pessoa2aaaaaaaaaaaaaaaaaaaaa)
    fala: function(assunto){//método, posso pegar ele fora daqui chaamndo com ponto(.)
      return `${nome} diz ${assunto} e tem ${this.peso} kilos` //se nao tiver o mesmo valor no parametro e eu queira usar o esse nome que tá aqui dentro desse escopo(exemplo é quando modifico aqui), ai posso botar this.nome, ou this.algo
    },
    get imc(){
      const indice = this.peso / (this.altura ** 2)//pega esse peso daqui de dentro q foi recebido por parametro e pode ter sido modificado aqui dentro ou nao e faz conta com ele
      return indice.toFixed(2);//duas casas decimais
    }
  };
}

const pessoa1 = criaPessoa('Icaro','Antunes',1.80,100);
//console.log(pessoa1.nome + ' ' +pessoa1.sobrenome);//mt trabalho se tiver mts objetos, pra reduzior o trabalho cria-se uma função lá na fabrica
console.log(pessoa1.nomeCompleto());//é um metodo e retorna o nome
//console.log(pessoa1.nomeCompleto);//se tranformar em um getter botando um get antes do nome da funcao, funciona tb... são só maneiras de chamar a 'chave' ou um método do objeto




















THIS EXEMPLO
function criaPessoa(nome,sobrenome,altura,peso){
  return{
    nome,
    sobrenome,
    altura: altura,
    peso:peso,
    //getter
    nomeCompleto(){
      return `${this.nome} ${this.sobrenome} `
    },
    //setter
    set nomeCompleto(valor){
      valor = valor.split(' ');
      this.nome = valor.shift();//remove o primeiro nome do nome que veio por argumento
      this.sobrenome = valor.join(' ');
      
    },


    //this referencia o obejto que tá chamando ele, no caso se p1 chamar pra executar a funcao q ele tá, ele vai fazer refericia ao parametro/argumento de p1, se for p2 de p2... etc. (p1 é pessoa1, p2 é pessoa2aaaaaaaaaaaaaaaaaaaaa)
    fala: function(assunto){//método, posso pegar ele fora daqui chaamndo com ponto(.)
      return `${nome} diz ${assunto} e tem ${this.peso} kilos` //se nao tiver o mesmo valor no parametro e eu queira usar o esse nome que tá aqui dentro desse escopo(exemplo é quando modifico aqui), ai posso botar this.nome, ou this.algo
    },
    get imc(){
      const indice = this.peso / (this.altura ** 2)//pega esse peso daqui de dentro q foi recebido por parametro e pode ter sido modificado aqui dentro ou nao e faz conta com ele
      return indice.toFixed(2);//duas casas decimais
    }
  };
}

const pessoa1 = criaPessoa('Icaro','Antunes',1.80,100);
pessoa1.nomeCompleto = 'Icaro da Silva Antunes';































//FUNCAO CONSTRUTORA = constroi objetos... precisa iniciar com letra maiscula... uso do new .. Variavel = new Variavel...'molde';

function Pessoa(nome,sobrenome){//molde de função construtora, ai em baixo disso criamos com new novas pessoas,por exemplo... novas cópias dessa construtora
  //IMPORTANTE...se eu quiser q a pessoa tenha algo mas que não seja mostrado: um id por exemplo:
  const ID = 1234; //cria uma const aqui dentro q ela n sera disponibilzada fora desse escopo..n vai poder ser chamada por ponto(.)
  const metodoInterno = function(){
    //esse metodo só fica aqui dentro,  n vai dar pra manipular fora daqui
  }

  
  //FIM DA OBS IMPORTANTE
  
  //atributos ou metodos publicos...estao displniveis para maniuplar fora daqui do escopo de molde
  this.nome = nome;
  this.sobrenome = sobrenome;
  //também podemos criar métodos... q são funções... 
  this.metodo = function(){//eesse metodo daqui cria uma função
    console.log(this.nome +': chama pra onde this tá apontando na hora de executar')
    //nesse this.nome, vai aparecer o nome de acordo com qual pessoa lá embaixo escolhemos pra executar... se for pessoa1.metodo() vai exibir o nome da pessoa1
  }
 
  //return nao eh preciso pois ja faz automatico
}

//o new cria um novo objeto vazio e faz o this apontar pra esse q ta sendo criado...no caso, quando criamos p1, o this apontou pra la... ai cria outra e o this aponta novamente para a nova... e assim vai indo
const pessoa1 = new Pessoa('Icaro','Antunes'); //precisa sempre usar o new e assim criar quantas pessoas quisermos
const pessoa2 = new Pessoa('Ailton','Freire');

pessoa1.metodo();













//RECURSIVIDADE = FUNÇÃO QUE CHAMA ELA MESMA DE VOLTA, NO ENTANTO É PRECISO SE ATENTAR NA CONDICAO DE PARA SENAO ELA VAI FICAR SEM FIM

function recursiva(max){//cria funcao que recebe parametro
 if(max > 10){//para no 10 //vai só até 10 pra n ter mt recursividade e bugar o navegador.
   return;
 }
 max++;//vai adicionando um ao max(que comecou sendo -10 pois enviamos como parametro)
 console.log(max);//mostra na tela
 recursiva(max);//chama novamente a funcao, só q o max já vai ser um a mais...ai vai fazendo isso até chegar na condicao de paarada...vai passando como argumento pro max da funcao o max modificado
}

recursiva(-10);//envia um parametro pro max




























//funcao geradora e codigo pausado... entrega um valor de pausa
  function* geradora1(){
    //codigo aqui if alguma coisa,faça algo e retorna valor 1 
    yield 'valor 1';//yield é como se fosse o return, mas ele nao encerra a funcao
    //codigo aaqui tb... e assim por diante
    yield 'valor 2';
    //codigo aqui
    yield 'valor 3';
  }

  const g1 = geradora1();//passa a funcao pra const g1
  //console.log(g1.next());//usa um método next em g1 pra ver o valor em si da funcao
  console.log(g1.next().value);//aqui sai o valor 1, ai da uma pausa. se executar novamente, sairá o valor dois... e assim sucessivamente até acabar e dar unfefined pela chave done
  console.log(g1.next().value);
  console.log(g1.next().value);
  console.log(g1.next().value);

  //ciclo em geradora
  //funcao geradora e codigo pausado... entrega um valor de pausa
function* geradora1(){
  //codigo aqui if alguma coisa,faça algo e retorna valor 1 
  yield 'valor 1';//yield é como se fosse o return, mas ele nao encerra a funcao
  //codigo aaqui tb... e assim por diante
  yield 'valor 2';
  //codigo aqui
  yield 'valor 3';
}

const g1 = geradora1();//passa a funcao pra const g1
//iterar(ciclo);
for(let valor of g1){
  console.log(valor);
}






//geraçao infinita de valores

//entrega valor infinitamente
function* geradora2(){
  let i = 0;
   
  while(true){
    yield i;
    i++;
  }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);









//gerado usando outra geradora
function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4(){
  yield* geradora3();//pega como referencia a geradora 3 e dá proseguimento de onde ela parou aqui na geradora4
  yield 3;
  yield 4;
}
//g4 passa a ter yield 0,1,2... pdendo incluir o 3 e 4 nela mesmo... podemos chamar coisas de outras fuincoes usando o *; é como se fosse o endereço de memória com valor
const g4 = geradora4();
  for(let valor of g4){
    console.log(valor);
  }



















  //funcao geradora e codigo pausado... entrega um valor de pausa
function* geradora1(){
  //codigo aqui if alguma coisa,faça algo e retorna valor 1 
  yield 'valor 1';//yield é como se fosse o return, mas ele nao encerra a funcao
  //codigo aaqui tb... e assim por diante
  yield 'valor 2';
  //codigo aqui
  yield 'valor 3';
}



//IMPORTANTE!!!!!!!!!!//quando preciso chamar funcoes na ordem... cada funcao executa algo, entao posso fazer isso aqui:
function* geradora5(){
  yield function(){
    console.log('vim do yield1');
  }
  //... codi

  //obs: se botar return por aqui, não executa o resto do código.. pois return finaliza a funcao do escopo



  yield function(){
    console.log('vim do yield2')
  }
}

//executando primeiro yield1 e depois yield 2;
const g5 = geradora5();
const func1 = g5.next().value;//valor do primeiro yield que é uam função.. entao vai executar primeiro yield1
const func2 = g5.next().value;//pega o valor do outro yuield q é a funcao2 e a executa tambem
func1();
func2();













//ARRAY, MODIFICANDO SEM ALTERAR INDICES
const nomes = ['icaro','gio','ramas'];
console.log(nomes);
delete nomes[1];//remover elemento do array sem alterar indice
console.log(nomes);















//array é passado por referencia
const nomes = ['icaro','gio','ramas'];
const novo = nomes;//tudo que é feito em novo ou em nomes se alteram um dos dois
novo.pop();
novo.push('joanino');
novo.push('joanino2');

console.log(novo);




















//SPREAD em array: serve pra espalhar um array dentro de outro, sem fazer dependência entre eles
const nomes = ['icaro','gio','ramas'];
const novo = [...nomes];//espalha todos objetos de nomes(todo resto) e joga pra const novo, podendo modificala sem fazer alteração no outro

novo.pop();
nomes.push('ricardao');

console.log(novo);
console.log(nomes);



















//SHIFT REMOVE O PRIMEIRO, UNSHIFT ADICIONA UM NO INDICE 0 E DESLOCA TODOS OUTROS
const nomes = ['icaro','gio','ramas'];
nomes.shift();
nomes.unshift('segundo icaro');
console.log(nomes);





















//SLICE EM ARRAY
const nomes = ['icaro','gio','ramas','pedrao','tokya'];
const nomesFatiados = nomes.slice(1,3); //pega o indice 1(primeiro parametro é o 'onde começa') q eh gio e corta no 3 q é o pedrao(pedrao nao aparece pois é cortado nele)
console.log(nomesFatiados);

//SLICE COM NUMERO NEGATIVO(MASI FAICL)
const nomes = ['icaro','gio','ramas','pedrao','tokya'];
const nomesFatiados = nomes.slice(1,-2); //começa do 1 e corta  de trás pra frente dois
console.log(nomesFatiados);



//TRANFORMANDO STRING EM ARRAY
const nome = 'Icaro Silva Antunes';
const nomes = nome.split(' ');//separa por espaço... se quisesse separar por qualquer outra coisa, era só botar ali no 'aqui'
console.log(nomes);


//TRANFORMANDO  ARRAY EM STRING 
const nomes = [ 'Icaro', 'Silva', 'Antunes' ]
const nome = nomes.join(' ');//join junta o array em uma string a partir de um espaço.. pode ser virgula, etc
console.log(nome);



























//SPLICE... JUNTA PUSH, POP, TUDO
//POP:
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(4,1)//escolhe o indice 4 como primeiro parametro e vai fazer algo com ele, no segundo parametro escolher quantos elementos quer remover.
console.log(nomes,removidos);

//POP:REMOVENDO MUITOS
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(2,Number.MAX_VALUE)//escolhe o indice 2 que é gabs e remove tudo incluindo ele
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);

ADICIONANDO ELEMENTOS
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(2,0,'Novo Adicionado')//escolhe o indice 2 que é gabs, nao remove nada (por isso o 0) e adiciona 'novo adicionado' ao indice q escolhemos
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);

//SUBSTITUINDO ELEMENTOS
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(2,1,'Novo Adicionado')//escolhe o indice 2 que é gabs,  remove UM(que é ele mesmo) e adiciona 'novo adicionado' ao indice q escolhemos(substituicao)
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);

//SHIFT(REMOVER O PRIMEIRO)
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(0,1,)//escolhe o indice 0 que é ICARO,  remove UM(que é ele mesmo) 
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);

//UNSHIFT(ADICIONA NO começo)
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice(0,0,'NOVO ADICIONADO','mais adicionado')//escolhe o indice 0 que é O primeiro,  bota 0 pois nao remove nada, e adiciona oq queremos
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);


//PUSH(ADICIONA NO FINAL)
const nomes = [ 'Icaro', 'André', 'Gabs','Yohana','Beatrice']
//nomes.splice('indice, delete, elmento1, elemento2...')
const removidos = nomes.splice((nomes.length + 1),0,'NOVO ADICIONADO')//escolhe o indice 5 que é ultimo vazio(nomes.lenght + 1),  bota 0 pois nao remove nada, e adiciona oq queremos
console.log(`###Nomes: ${nomes} ###Removidos: ${removidos}`);


//CONCATENAR ARRAY:
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2,[7,8,9],'Icaro'); //posso concaternar o que quiser.. concatena no a1 o a2 e mais o que quiser por meio de parametros da funcao concat
console.log(a3);


//SPREAD PRA CONCATENAR ARRAY:
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1,'ICARO',...a2,...[7,8,9]];//usa o spread q esplaha os elementos do a1 ali e do a2 tb, tudo em um array e depois só faz adicionar com o que queremos
console.log(a3);














//FILTER : SEMPRE RETORNA A QUANTIADE IGUAL DE ELEMENTOS DO ARRAY OU MENOS

//FILTER: FUNÇÃO DE FILTRAR ARRAYS:
const numeros = [1,2,3,5,10,7,30,40,12];
function callbackFilter(valor,indice,array){ //quando invoca o método filter, automaticamente já se cria uma função de callback que retorna esses três parâmetros, sendo eles o valor de cada elemento(faz um laço varrendo por cada um), o indice do elemento(posição) e também pode retornar o valor completo(array todo)
  //poderia substituir esse if todo por um return valor > 10;
  if(valor > 10){//aqui é a condição que iremos usar pra filtrar
    return true;//requer retornar booleano.. true pra pegar e usar o valor, false pra excluir da filtragem
  }else{
    return false;
  }
} 
//a função filter executa o callback, por isso não passo callbackFilter();... 'olha filter, vc vai executar essa função a cada passagem da iteração(checagem de elementos)
const filtrados = numeros.filter(callbackFilter);//ese método(que mexe no array) vai pegar o array e filtrá-lo. usa-se uma função de callback, isto é, vai iterar(passar) por todos os elementos do array.
console.log(filtrados);


//FILTER: FUNÇÃO DE FILTRAR ARRAYS: FORMA ANONIMA  IMPORTANTE!!!!!!!!!
const numeros = [1,2,3,5,10,7,30,40,12];
const filtrados = numeros.filter(function(valor){//recebe como parametro o valor,indice e array de maneira automática.. nesse caso só queremos usar o valor, para dizer q é pra filtrar(retornar) se ele for maior que 10, caso contrário não retorna
  return valor > 10;
});
console.log(filtrados);

//FILTER COM ARROW FUNCTION: FUNÇÃO DE FILTRAR ARRAYS: FORMA ANONIMA  IMPORTANTE!!!!!!!!!
const numeros = [1,2,3,5,10,7,30,40,12];
const filtrados = numeros.filter( valor => valor > 10);
console.log(filtrados);

//FILTER MOSTRANDO OUTROS PARAMETROS
const numeros = [1,2,3,5,10,7,30,40,12];
const filtrados = numeros.filter((valor,indice,array) => {//recebe como parametro o valor,indice e array de maneira automática.. nesse caso só queremos usar o valor, para dizer q é pra filtrar(retornar) se ele for maior que 10, caso contrário não retorna
  console.log(valor,indice,array);//a cada iterada mostra os argumentos
  return valor > 10;
});
console.log(filtrados);


//FILTRANDO NOMES MAIORES QUE 5 LETRAS
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
];

const nomeGrande = pessoas.filter((objeto) => { //na iteração o objeto é recebido
  return objeto.nome.length >= 5;//acessa o objeto nome e pega o tamanho dele, só quero retornar nomes maiores que 5 letras
});

console.log(nomeGrande);

//FILTRANDO NOMES MAIORES TEM MAIS DE 50 AJ0S
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
];
const maiorCinq = pessoas.filter((objeto) => {
  return objeto.idade >= 50;//
});
console.log(maiorCinq);


//FILTRANDO NOMES QUE TERMINAM COM 'A'
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];
const aNoFinal = pessoas.filter((objeto) => {
  return objeto.nome.toLowerCase().endsWith('a')//converte pra minuscula o nome e checa a funcao endswith pra ver se termina com 'a'
});
console.log(aNoFinal);





















//MAP = ALTERA VALORES DO ARRAY, PORÉM RECEBE O ARRAY COM MESMO TAMANHO

//MAP DOBRANDO NÚMEROS
const numeros = [1,2,3,5,10,7,30,40,12];
const dobrados = numeros.map((valor) => { //aqui recebe uma função de callback com valor,indice e array(assim como foi explicado na filter). escolhi fazer com arrow function, porém também da pra fazer : .map(function(valor,indice,array){faça})
  //retorna valor com valor diferente.. vai alterar, o que difere do filter
  return `o dobro de ${valor} é ${valor * 2}` ;
})
console.log(dobrados);


//MAP PRA RETORNAR APENAS UM DOS OBJETOS DO ARRAY
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];

const onlyName = pessoas.map((objeto) => { // arrow function pra pegar o obejto de cada passagem(ciclo de iteração)
  return objeto.nome;
})
console.log(onlyName);

//MAP PRA DELETAR UMA CHAVE E RETORNAR OUTRA
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];

const mapeados = pessoas.map((objeto) => { // arrow function pra pegar o obejto de cada passagem(ciclo de iteração)
  delete objeto.nome;
  return objeto;
})
console.log(mapeados);




//MAP PRA DELETAR UMA CHAVE E RETORNAR OUTRA PORÉM SEM CHAVES PRA FICAR MAIS CLEAN O CÓDIGO
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];

const mapeados = pessoas.map((objeto) => ({idade:objeto.idade}) )//aqui é criado um novo objeto, esse novo objeto precisa estar entre parentes pois foi tirado suas chaves, e pra nao confundir com a chave da funcao arrow, usa-se uma expressão q bota o parenteses
console.log(mapeados);



//MAP PRA MEXER NO ARRAY E FAZER COM Q OS OBJETOS ADICIONADOS FIQUEM NO ORIGINAL TAMBEM
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];

const mapeados = pessoas.map((objeto) => { // arrow function pra pegar o obejto de cada passagem(ciclo de iteração)
  
  return objeto;
})

const comIds = pessoas.map((objeto,indice) => {
  objeto.id = (indice + 1);
  return objeto;
})
console.log(comIds);

//MAP SEM MEXER NO ORIGINAL PRA MEXER NO ARRAY E FAZER COM Q OS OBJETOS ADICIONADOS FIQUEM EM NOVOS ARRAYS SEM MODIFICAR O ARRAY DE BASE ORIGINAL
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];
const comIds = pessoas.map((objeto,indice) => {//objeto é tudo que tem no array(nome,idade)
  const newObject = {...objeto}; //faz um spread pra retornar tudo do objeto(que é o array original com seus respectibos objetos)
  newObject.id = indice + 1;//adiciona um novo objeto e o valor dele é o indice + 1(pra começar do 1 e servir de id pra cada pessoa)
  return newObject;
})
console.log(pessoas);
console.log('      ####                ###');
console.log(comIds);

















//REDUCE: REDUZ O ARRAY À UM ELEMENTO


//REDUCE PARA SOMAR TODOS ELEMENTOS DO ARRAY E NO FINAL RETORNAR UM TOTAL
const numeros = [1,2,3,5,6,7,8,9];
const reduzido = numeros.reduce((acumulador,valor,indice,array) => {//reduce tmabém recebe função de callback... PRImeiro parametro = acumulador, e o resto é igual de filter e map(optei por utilizar arrow pois mais moderno)
  acumulador = acumulador + valor; //começa o acumulador com 0 e vai fazendo a operação de soma com cada valor do array
  //console.log(acumulador); //aqui motra cada itarçaão da somas dos valores com acumulador
  
  return acumulador;//retorna o acumulador q no final irá mostrar o resultado da operação desde o inicio sem perder valores
},0); //aqui pode receber um valor inicial para o acumulador

console.log(reduzido)

//RETORNAR ARRAY COM VALORES PARES... NAO FAZER ISSO POIS COM FILTER É MELHOR E MAIS FÁCIL
const numeros = [1,2,3,4,5,6,7,8,9];
const total = numeros.reduce((acumulador,valor,indice,array) => {//reduce tmabém recebe função de callback... PRImeiro parametro = acumulador, e o resto é igual de filter e map(optei por utilizar arrow pois mais moderno)

  if(valor % 2 === 0){//se o número é par
    acumulador.push(valor);//adiciona se o numero for par o proprio valor do numero por meio do push e joga isso pro acumulador(que é um array vazio de começo)
  }
  return acumulador;


},[]); //aqui pode receber um valor inicial para o acumulador...mas aqui tô dizendo que o acumulador é um array vazio.. ele vai receber numeros aqui

console.log(total)

//PROVANDO QUE COM FILTER FICA MAIS FÁCIL
//RETORNAR ARRAY COM VALORES PARES... NAO FAZER ISSO POIS COM FILTER É MELHOR E MAIS FÁCIL
const numeros = [1,2,3,4,5,6,7,8,9];
const pares = numeros.filter((valor) => {
  if(valor % 2 === 0) return valor;
})
console.log(pares)

//REDUCE RETORNANDO A PESSOA MAIS VEHLA ENTRE VÁRIAS PESSOAS
const pessoas = [
  {nome: 'Icaro',idade:19},
  {nome: 'Joaozinho',idade:30},
  {nome: 'Let',idade:60},
  {nome: 'Romário',idade:12},
  {nome: 'Sherda',idade:12},
];

const older = pessoas.reduce((acumulador,valor) => {
  
  if(acumulador.idade > valor.idade) 
    return acumulador;
    return valor;
});

console.log(older);



















//FILTER + MAP + REDUCE EM VARIAVEIS SEPARADAS
const numeros = [1,2,3,4,5,6,7,8,9,10];
const filtrados = numeros.filter((valor) => {
  if(valor % 2 === 0) 
    return valor;
  
});

const dobrados = filtrados.map((valor) => {
  return valor * 2;
})

const somados = dobrados.reduce((acumulador,valor) => {
 acumulador = acumulador + valor;
 return acumulador;
},0)
console.log(somados);


//FILTER + MAP + REDUCE EM VARIAVEIS JUNTAS
const numeros = [1,2,3,4,5,6,7,8,9,10];
const conta = numeros.filter((valor) => {
  if(valor % 2 === 0) 
    return valor;
  
}).map((valor) => {
  return valor * 2;
}).reduce((acumulador,valor) => {
  acumulador = acumulador + valor;
  return acumulador;
 },0)
console.log(conta);























//FOR EACHE = FORMA DIFERENTE DE ITERAR CICLO EM ARRAY... só dentro de array

const a1 = [1,2,3,4,5,6,7,8,9,10];
//forma comum com for normal
for(let valor of a1){
  console.log(valor);
}

//FORMA COM FOR EACH
const a1 = [1,2,3,4,5,6,7,8,9,10];

a1.forEach((valor,indice,array) => {
  console.log(valor,indice);
})

//FORMA COM FOR EACH FAZENDO UM REDUCE DE SOMA(MAIS PERFORMÁTICO SOMENTO COM O REDUCE)
const a1 = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
a1.forEach((valor) => {
  total = total + valor;
})
console.log(total);

//FORMA COM FOR EACH FAZENDO UM REDUCE DE SOMA(MAIS PERFORMÁTICO SOMENTO COM O REDUCE)
const a1 = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
a1.forEach((valor) => {
  total = total + valor;
})
console.log(total);

























  //OBJETOS EM JAVASCRIPT
  const pessoa = {
    nome: 'icaro',
    sobrenome: 'antunes'
  };

  console.log(pessoa.nome) 
  //ou
  console.log(pessoa['nome']);

  //QUANDO QUISER ACESSAR CHAVE DE UMA BASE DE DADOS:
    const pessoa = {
      nome: 'icaro',
      sobrenome: 'antunes'
    };
    const chave = 'nome';
    console.log(pessoa[chave]);
    //ou
    console.log(pessoa['nome']);


    //CONSTRUTOR DE ARRAY(CRIAR NOVO ARRAY) E DELETANDO UMA CHAVE DE OBJETO
const pessoa1 = new Object();
pessoa1.nome = 'Icaro';
pessoa1.idade = '19';
console.log(pessoa1);
delete pessoa1.idade
console.log(pessoa1);



//DANDO ACESSO POR MEIO DO THIS À CHAVE REFERENTE AO THIS LIGADO PRA USAR A CHAVE E PEGAR SEUS VALORES PRA EXECUTAR UMA FUNÇÃO
//FUNÇÃO ATRELADA À UM OBJETO
//MANIPULAR OBJETOS COM FUNCOES
const pessoa1 = new Object();
pessoa1.nome = 'Icaro';
pessoa1.idade = '0';
pessoa1.sobrenome = 'Antunes';

pessoa1.falarNome = function(){
  return(`${this.nome} ${this.sobrenome} é o nome dele!`);
};

pessoa1.getDataNascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());


//PEGANDO AS CHAVES DENTRO DO OBJETO PESSOA1
const pessoa1 = new Object();
pessoa1.nome = 'Icaro';
pessoa1.idade = '0';
pessoa1.sobrenome = 'Antunes';

for(let chave in pessoa1){
  console.log(chave)
}

//PEGANDO O VALOR DAS CHAVES DENTRO DO OBJETO PESSOA1
const pessoa1 = new Object();
pessoa1.nome = 'Icaro';
pessoa1.idade = '0';
pessoa1.sobrenome = 'Antunes';

for(let chave in pessoa1){
  console.log(pessoa1[chave])
}



//'ALTERANDO' O VALOR DE UMA CONSTANTE.. NO CASO É ALTERAR O VALOR DO VALOR... NÃO A VARIÁVEL EM SI
// P1 = ENDERECOMEMERIA ->VALORQUALQUER1 : P1 APONTA PRA ENDEREÇO DE MEMÓRIA Q APONTA PRA UM VALOR
// P1 = ENDERECOMEMERIA -> VALORQUEPOSSOALTERAR: P1 APONTA PARA O MESMO ENDEREÇO DE MEMORIA, E  ESSE ENDERECO DE MEMORIA APONTA PRA UM VALOR O QUAL POSSO ALTERAR... NAO POSSO ALTERAR O ENDERECO DE MEMORIA POIS ESTOU USANDO CONST
function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const p1 = new Pessoa('Icaro','Antunes');
p1.nome = 'IcaroAlterado'
console.log(p1);






//TRAVANDO OBJETOS E ARRAYS PRA QUE ELES NÃO POSSAM SER ALTERADOS.. POR EXEMPLO UM NOME, UM ID Q NAO PODE SER ALTERADO, ETC
function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Icaro','Antunes');
Object.freeze(p1) //escolhe dentro do parametro qual objeto queremos que seja travado, isto é, não poderá ser modificado...
p1.nome = 'IcaroAlterado'//qui tenta modificar, porém o freeze não deixa.
console.log(p1);



//TRAVANDO VÁRIOS OBJETOS QUE VEM DO CONSTRUTOR PARA QUE NÃO POSSAM SER ALTERADOS
function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  //só pode manipular tudo que queira modificar no objeto se for antes do freeza... a partir do momento que existe o freeze, não se pode mais mexer!
  Object.freeze(this);//todos objetos criados nessa função não podem ser alterados(modificados)
}
const p1 = new Pessoa('Icaro','Antunes');
Object.freeze(p1) //escolhe dentro do parametro qual objeto queremos que seja travado, isto é, não poderá ser modificado...
p1.nome = 'IcaroAlterado'//qui tenta modificar, porém o freeze não deixa.
console.log(p1);













//TRAVANDO APENAS ALGUNS OBJETOS PARA NAO SEREM MODIFICADOS:
//defineProperty e defineProperties
//OBJETIVO: PRIVAR O ESTOQUE PRA Q ELE NAO APAREÇA
function Produto(nome,preco,estoque){
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this,'estoque',{
    enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra) obs: a chave que digo é tornar estoque como se fosse um this.estoque assim como this.nome e this.preco, porém não explícita como nome e preço... com isso, faço com q estoque não possa ser modificado de forma alguma
    value: estoque, //aqui dou o valor desse enumerable que foi criado, no caso é o valor do estoque q foi passado como argumento, o 3 foi pro molde e agora posso usá-lo aqui. Isso faz com que o valor do estoque agora não possa ser alterado.
    writable:false, //aqui digo se o valor pode ser alterado ou não
    configurable:true //aqui digo se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
  });//primeiro parametro é o objeto que quero mexer, no caso uso this pois é esse objeto aqui que quero mexer(vai mudando de acordo com novos objetos criados a partir desse molde... primeiro produto1, depois produto2... etc..)....... o proximo passo é escolher em que quero mexer, no caso escolhi a chave(propriedade) 'estoque'.... por ultime, abrimos um objetos que contém diversas propriedades a qual pode modificar oq quiser

  //se comentar esse segundo defineProperty, ai volta a dizer q não se pode alterar e o valor lá de baixo q era 5,vai voltar a ser 3
  //configurando pra permitir alteração e permitir que valha 5 o estoque devido a alteração lá em baixo.
  //Object.defineProperty(this,'estoque',{
    //enumerable:true,
    //value: estoque, 
    //writable:true, 
    //configurable:false 
  //});
}
const produto1 = new Produto('Camiseta','20','3')
produto1.estoque = '5'; //aqui posso alterar o valor de dentro dos objetos
console.log(produto1)








//NÃO DEIXAR A CHAVE SER APAGADA
function Produto(nome,preco,estoque){
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this,'estoque',{
    enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra) obs: a chave que digo é tornar estoque como se fosse um this.estoque assim como this.nome e this.preco, porém não explícita como nome e preço... com isso, faço com q estoque não possa ser modificado de forma alguma
    value: estoque, //aqui dou o valor desse enumerable que foi criado, no caso é o valor do estoque q foi passado como argumento, o 3 foi pro molde e agora posso usá-lo aqui. Isso faz com que o valor do estoque agora não possa ser alterado.
    writable:false, //aqui digo se o valor pode ser alterado ou não
    configurable:false //aqui digo se posso apagar a chave e se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
  });//primeiro parametro é o objeto que quero mexer, no caso uso this pois é esse objeto aqui que quero mexer(vai mudando de acordo com novos objetos criados a partir desse molde... primeiro produto1, depois produto2... etc..)....... o proximo passo é escolher em que quero mexer, no caso escolhi a chave(propriedade) 'estoque'.... por ultime, abrimos um objetos que contém diversas propriedades a qual pode modificar oq quiser
}
const produto1 = new Produto('Camiseta','20','3')
produto1.estoque = '5'; //aqui posso alterar o valor de dentro dos objetos
delete produto1.estoque; //no configurable, se tiver true, significa que pode ser apagado, se tiver false é que não pode.
console.log(produto1);





//OBJECT KEYS PARA VER AS CHAVES DO ARRAY OU OBJETO
function Produto(nome,preco,estoque){
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this,'estoque',{
    enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra) obs: a chave que digo é tornar estoque como se fosse um this.estoque assim como this.nome e this.preco, porém não explícita como nome e preço... com isso, faço com q estoque não possa ser modificado de forma alguma
    value: estoque, //aqui dou o valor desse enumerable que foi criado, no caso é o valor do estoque q foi passado como argumento, o 3 foi pro molde e agora posso usá-lo aqui. Isso faz com que o valor do estoque agora não possa ser alterado.
    writable:false, //aqui digo se o valor pode ser alterado ou não
    configurable:false //aqui digo se posso apagar a chave e se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
  });//primeiro parametro é o objeto que quero mexer, no caso uso this pois é esse objeto aqui que quero mexer(vai mudando de acordo com novos objetos criados a partir desse molde... primeiro produto1, depois produto2... etc..)....... o proximo passo é escolher em que quero mexer, no caso escolhi a chave(propriedade) 'estoque'.... por ultime, abrimos um objetos que contém diversas propriedades a qual pode modificar oq quiser
}
const produto1 = new Produto('Camiseta','20','3');
//OBS: SE EU MUDAR O ENUMERABLE PRA FALSE OU TRUE, ELE MOSTRA OU NÃO A CHAVE ESTOQUE
console.log(Object.keys(produto1)); //para ver as chaves de um array
//ou
for(let chave in produto1){//for in que itera sobre as chaves
  console.log(chave);
}
















//defineProperties
//OBJECT KEYS PARA VER AS CHAVES DO ARRAY OU OBJETO
function Produto(nome,preco,estoque){

  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this,'estoque',{
    enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra) obs: a chave que digo é tornar estoque como se fosse um this.estoque assim como this.nome e this.preco, porém não explícita como nome e preço... com isso, faço com q estoque não possa ser modificado de forma alguma
    value: estoque, //aqui dou o valor desse enumerable que foi criado, no caso é o valor do estoque q foi passado como argumento, o 3 foi pro molde e agora posso usá-lo aqui. Isso faz com que o valor do estoque agora não possa ser alterado.
    writable:false, //aqui digo se o valor pode ser alterado ou não
    configurable:false //aqui digo se posso apagar a chave e se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
  });//primeiro parametro é o objeto que quero mexer, no caso uso this pois é esse objeto aqui que quero mexer(vai mudando de acordo com novos objetos criados a partir desse molde... primeiro produto1, depois produto2... etc..)....... o proximo passo é escolher em que quero mexer, no caso escolhi a chave(propriedade) 'estoque'.... por ultime, abrimos um objetos que contém diversas propriedades a qual pode modificar oq quiser


   //defineProperties: primeiro recebe o objeto o qual estamos tratando(pode ser produto1, produto2, etc... o this q vai dizer em qual está), ems seguida, bota todas chaves com suas propriedades individuais
   //pode manejar bem mais detalhadamente
   Object.defineProperties(this,{
    nome:{
      enumerable:true,
      value: nome, 
      writable:false, 
      configurable:false 
    },
    preco:{
      enumerable:true,
      value: preco, 
      writable:false, 
      configurable:false
    },
    estoque:{
      enumerable:true,
      value: estoque, 
      writable:false, 
      configurable:false
    }
  });
}
const produto1 = new Produto('Camiseta','20','3');
console.log(Object.keys(produto1));













//GETTER E SETTER: PROTEGER A PROPRIEDADE
//EXEMPLO: SE FOR PRA RECEBER NO ESTOQUE APENAS NÚMEROS, E RECEBER UMA STRING, AI TEM QUE APRESENTAR UM ERRO

function Produto(nome,preco,estoque){

  this.nome = nome;
  this.preco = preco;
  let estoquePrivado = estoque; //criando esse pra modificar com set sem que haja confusões e um possível bug de looping

  Object.defineProperty(this,'estoque',{
    enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra) obs: a chave que digo é tornar estoque como se fosse um this.estoque assim como this.nome e this.preco, porém não explícita como nome e preço... com isso, faço com q estoque não possa ser modificado de forma alguma
    configurable:true, //aqui digo se posso apagar a chave e se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
    get: function(){  // agora o get é um método que retorna um valor por meio de uma função anônima
      return estoquePrivado;//esse estoque é o  atributo que tá ali no parametro da  função molde, que já recebe o 3 do produto1 de baixo... com isso, o atributo que vamos manipular é o lá de cima do molde diretamente, assim, podemos criar uma variável nova que será alterada com valor de estoque para que alteremos ela e não o estoque em si para não dar erro de looping... essa let que criei foi o estoquePrivado
    },
    set: function(valor){ //recebe um valor por meio do produto1.estoque = 'o valor que eu quero';
      if(typeof valor !== 'number'){
        console.log('Precisa ser número!');
        return;
      }
      estoquePrivado = valor; //estoque privado é igual ao 'valor que eu quero'... e assim é modificado  o valor por meio do getter e setter
    }
  });
}
const produto1 = new Produto('Camiseta','20','3')
produto1.estoque = 'o valor que eu quero'
//produto1.estoque = 1000; //se for um valor numérico,  valor vai como parametro pra valor do setter e lá é alterado
console.log(produto1.estoque); //valor de 3 não é alterado se produto1.estoque for string, mas se for number vai ser alterado








//GETTER E SETTER: PROTEGER A PROPRIEDADE
//USANDO FACTORY FUNCTION
function criaProduto(nome){
  return{
  get nome(){//obtém o valor
    //poderia fazer um let aqui também pra não alterar o valor em si e sim uma variavel modificada(pra não perder o valor original e não ocorrer risco de loopig)
    return nome;
  },
  set nome(valor){ //pode mudar o valor
    valor = valor.replace('t', '1');//onde tem t, troco por 1
    nome = valor; //valor pega o lugar de nome e é alterado...
  }
  };
}


const p2 = criaProduto('Short'); //primeiro eu crio e é obtido por set
p2.nome = 'Camiseta';//altero já no get
//console.log(p2);
console.log(p2.nome);
















//MÉTODOS ÚTEIS PARA OBJETOS

//####COPIAR OBJETO
//SPREAD OPERATOR PARA COPIAR CHAVES,MÉTODOS,QUALUQER COISA DE UM OBJETO SEM MODIFICAR O OUTRO OBJETO
const produto = {
  nome:'caneca',
  preco: 20
}
//o outraCoisa tem as mesmas chaves de produto, mas tambpem tem outra chave, também fica independente, se mexer em um, nao altera o outro
const outraCoisa = {...produto,cor:'preta'}; //spread aqui(espalhar)... só faz copiar mas torna indepedente, se modificar em um, não modifica o outro... tambpem posso criar mais chaves aqui pra difrenciar
produto.nome = 'camisa';
outraCoisa.preco = 30;

console.log(outraCoisa);
console.log(produto);

//####COPIAR OBJETO
//OBJETCT ASSIGN PARA COPIAR DE UM OBJETO PARA OUTRO
const produto = {
  nome:'caneca',
  preco: 20
}

//também posso adicionar mais chaves aqui dentro
const outroProduto = Object.assign({},produto,{material:'porcelana', cor: 'preta'}) //aqui nesse método assign, diz que copio tudo de produto e jogo em um objeto vazio... poderia jogar em um objeto já existente também.

console.log(outroProduto);
console.log(produto);

//####COPIAR OBJETO(se quiser só um)
//também tem o método que se for pra copirar só um objeto
//fica assim: const produto = {nome:'icaro' , idade:20};
// const copiado = {nome: produto.nome, idade: produto.idade}


//###OBJECTKEYS PARA VER AS CHAVES DO ARRAY OU OBJETO
const produto = {
  nome:'caneca',
  preco: 20
}
//o outraCoisa tem as mesmas chaves de produto, mas tambpem tem outra chave, também fica independente, se mexer em um, nao altera o outro
const outraCoisa = {...produto,cor:'preta'}; //spread aqui(espalhar)... só faz copiar mas torna indepedente, se modificar em um, não modifica o outro... tambpem posso criar mais chaves aqui pra difrenciar
produto.nome = 'camisa';
outraCoisa.preco = 30;

console.log(Object.keys(produto));
console.log(Object.keys(outraCoisa));

//######FREEZE
//OBJECT.FREEZE PARA NAO ALTERAR MAIS O OBJETO
const produto = {
  nome:'caneca',
  preco: 20,
}
//usao o object.freeze pra congelar, o produto(que foi o objeto q escolhi pra nao poder ser mais alterado)
Object.freeze(produto);

//só vai surtir efeito se tiver sem object.freeze
produto.nome = 'mudei, n eh mais caneca';

console.log(produto);










//CONFIGURANDO CHAVE A CHAVE  COM DETALHES
//getOwnPropertyDescription
//pega a descrição da propriedade escolhida, o primeiro parametro é o objeto o qual queremos ver a propriedade e o segundo parametro é a chave do objeto escolhido o qual queremos ver suas configurações
const produto = {nome:'icaro', idade:18, altura: 20};
Object.defineProperty(produto,'nome',{

  //aqui, essas propriedades só vão valer para a chave nome, pois estamos definindo dentro dela
  enumerable:true,//aqui digo que criei o estoque como uma chave(mostra a chave se for true, se for false nao mostra)
  //value: 'posso alterar o valor se quiser';
  writable:false, //aqui digo se o valor pode ser alterado ou não
  configurable:false //aqui digo se posso apagar a chave...  e se posso reconfigurar a chave ou não, ou seja, posso criar uma cópia com esses objetos e modificar todas proprioedades pra true ou false
})

produto.nome = 'icaro alterado'; //nao vai funcionar pois configurei com writable false 
produto.idade = '90(idade alterada)'; //aqui vai permitir, pois não defini as configurações na chave idade e sim na chave nome
delete produto.altura; //altura pode ser deletada
delete produto.nome; //nome não pode ser deletado pois configuramos 
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //aqui só faz mostrar como que tá as configurações, se tá true, se tá false o writable,enumerable, etc...
console.log(produto);





//VALUES,ENTRIES , KEYS
const pessoa = {nome:'icaro', idade: 20,pais:'Brasil'};
console.log(Object.keys(pessoa));//RETORNA AS CHAVES
console.log(Object.values(pessoa));//RETORNA OS VALORES DAS CHAVES
console.log(Object.entries(pessoa));//RETORNA A CHAVE E O VALOR EM UM ARRAY UNIDO





//ITERANDO(FAZENDO LAÇOS) COM Object.entries
const pessoa = {nome:'icaro', idade: 20,pais:'Brasil'};

for(let entry of Object.entries(pessoa)){
  console.log(entry);
}

console.log('###Separação de consoles###');

//DESESTRUTURAÇÃO(DESTRUCTURE)
const pessoa2 = {nome:'icaro', idade: 20,pais:'Brasil'};

for(let [chave,valor] of Object.entries(pessoa2)){
  console.log(chave,valor);
}

//ou let valor of Object.entries(pessoa2) e noc console recebe valor[0], valor[1]



























//PROTOTYPE, AQUI A PESSOA NOVA CRIADA PELO MOLDE VAI TER UMA FUNÇÃO QUE VAI TER EM TODAS, AI VAI FICAR REPETINDO, PARA QUE NAO GASTE RECURSO, VAMOS ALTERAR
//molde(construtora)
function Pessoa(nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
  
}

//instância
//objetos que vem da construtora
const pessoa1 = new Pessoa('icaro','antnes', 19);
const pessoa2 = new Pessoa('gio','freire', 20);

console.dir(pessoa1);
console.dir(pessoa2);
//console.log(pessoa2.nomeCompleto());



























//####### MT IMPORTANTE PROTOTYPE, A BASE DO JS#######
//AQUI VAMOS JOGAR OS MÉTODOS PRA DENTRO DO PROTO, PRA SEMPRE QUE QUISER, ELE VAI ESTAR LÁ DISPNÍVEL, O PROTO FICA DENTRO DO 'PAI' DO OBJETO, OU SEJA, SEMPRE EXISTE. VAMOS JOGAR MÉTODOS PRO PROTO
//JOGANDO O METODO NOMECOMPLETO EM UM 'MOLDE' PRA USA-LO COMO PADRAO E NAO GASTAR TANTA MEMÓRIA
//PROTOTYPE, AQUI A PESSOA NOVA CRIADA PELO MOLDE VAI TER UMA FUNÇÃO QUE VAI TER EM TODAS, AI VAI FICAR REPETINDO, PARA QUE NAO GASTE RECURSO, VAMOS ALTERAR
//JAVASCRIPT JÁ LINKA AUTOMATICAMENTE UMA PROPRIEDADE DA FUNÇÃO CONSTRUTURA QUE SE CHAMA PROTO, EM QUE TODOS MÉTODOS ESTAO PRESENTES... EXISTE TAMBÉM PROTO DENTRO DE PROTO
//Pessoa.prototype === pessoa1._proto_ ; // aqui é verdade pois esse protótipo já está linkado na construtora, e quando um objeto vem da construtora, também já tem esse proto linkado nele uma vez que ele é 'filho' da construtora e a construtora por sua vez tem um pai q vai herdar tudo pra 'filhos e netos'
//MÉTODO DE BUSCA DE METODOS DO JS NESSE EXEMPLO: primeiro busca em: Pessoa --> Pessoa.prototype --> Object.prototype. 

//molde(construtora)
function Pessoa(nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  //o método vai ser buscado primeiramente aqui na propria funcao construtora, se tiver aqui, ele sobrescreve os de baixo
  //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; //ESSE MÉTODO TÁ DENTRO DA PESSOA, LOGO VAI TER MTS DESSAS EM CADA PESSOA... vou tirar esse método daqui e jogar no proto pra ficar dispinivel automaticamente para todos novos instaciados
}

//com isso aqui, o método nomeCompleto está dentro do proto da função construtora Pessoa, dai toda vez que criarmos uma nova instância(uma new pessoa), já vai ter esse método lá que diz o nome completo dela... e isso pode ser mt util pra fazer varias funcionalidades, sem precisar rescrever em todos
Pessoa.prototype.nomeCompleto = function(){
  return this.nome + ' ' + this.sobrenome;
} //prototype é um objeto que já está automaticamente linkado à fuction construtora pessoa, só q ai vamos botar dentro desse prototype, um método de base que vai servir pra ser usado de molde e não ficar repetitivo

//instância
//objetos que vem da construtora
const pessoa1 = new Pessoa('icaro','antnes', 19);
const pessoa2 = new Pessoa('gio','freire', 20);


console.dir(pessoa1);
console.dir(pessoa2);
//console.dir(pessoa2.nomeCompleto());
//console.log(pessoa2.nomeCompleto());





















//MANIPULANDO PROTOTYPE
//INTERLIGAÇÃO DE CHAVES E VALORES DE CHAVES A PARTIR DE OBJETOS DIFERENTES
//new Object que tem um Object.prototype
const objA = {
  chaveA: 'A'
  //__proto__ : Object. prototype; //acontece isso por baixo dos panos na engine do javascriot, em que no proto tem varios metodos
}
const objB = {
  chaveB: 'B'
  //quero que o prototype daqui seja objA
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB,objA); //setar o prototipo do primeiro parametro q é de quem q a gente quer mudar o prototype e o segundo parametro é o que a gente quer q seja o prototype
Object.setPrototypeOf(objC,objB); //objetoC passa pelo B, depois passa pelo A e depois chega no object.prototype q é onde tá todos metodos, o que permite o acesso dos valores de todos e do metodo de todos
console.log(objB.chaveA); //setando acima com o setPrototyopeOf, posso acessar o valor da chaveA a partir do objeto B, é como se o A fosse filho desse B, e a partir do B consigo acessar A










//MANIPULANDO PROTOTYPE
//PASSANDO POR UMA CHAVE SEM TÊ-LA
//new Object que tem um Object.prototype, a meta é chegar aqui, que é onde é o final do proto onde contém todos os metodos(pai)
const objA = {
  chaveA: 'A'
  //__proto__ : Object. prototype; //acontece isso por baixo dos panos na engine do javascriot, em que no proto tem varios metodos
}
const objB = {
  chaveB: 'B'
  //quero que o prototype daqui seja objA
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB,objA); //setar o prototipo do primeiro parametro q é de quem q a gente quer mudar o prototype e o segundo parametro é o que a gente quer q seja o prototype
Object.setPrototypeOf(objC,objA); //objetoC nao passa pelo B, passa pelo A e depois chega no object.prototype q é onde tá todos metodos, o que permite o acesso dos valores de todos e do metodo de todos
console.log(objC.chaveB); //nao passa pelo B, logo nao consegue ver o valor da chave.
console.log(objC.chaveA); //passa pelo A e consegue ler o valor que tem nas chavess e metodos




























//CRIANDO MÉTODOS NO PROTOTYPE DE  UMA FUNÇÃO CONSTRUTORA PARA QUE NÃO FIQUE O MESMO MÉTODO REPETIDO EM VARIOS FILHOS Q SAO GERADOS PELA CONTRUTORA
function Produto(nome,preco){
  this.nome = nome;
  this.preco = preco;

  //ao invés de criar métodos aqui dentro, vamos usar o prototype
}

//método que dá desconto
Produto.prototype.desconto = function(percentual){ //function retorna um novo preco com um desconto de acordo com percentual dado
  this.preco = this.preco - (this.preco * (percentual/100) )
}

const p1 = new Produto('joia','50');
p1.desconto(100); // dá 10% de desconto, vai o 10 como arumento pro parametro percentual e p método q tá no prototype é executado
console.log(p1);





















//REAPROVEITANDO O MÉTODO QUE ESTÁ NO PROTOTYPE DDA CONSTRUTORA PRA UM OBJETO O QUAL NÃO É FILHO DESSA CONSTRUTORA
function Produto(nome,preco){
  this.nome = nome;
  this.preco = preco;
  //ao invés de criar métodos aqui dentro, vamos usar o prototype
}
//método que dá desconto
Produto.prototype.desconto = function(percentual){ //function retorna um novo preco com um desconto de acordo com percentual dado
  this.preco = this.preco - (this.preco * (percentual/100) )
}
const p1 = new Produto('joia','50');
//p2 nao é filho da construtora, entao ele n pode usar os métodos
//para que ele tenha acesso aos métodos, vou dizer q o prototype dele é o mesmo da construtora

const  p2 = {
  nome:'Caneca',
  preco: 20
}

Object.setPrototypeOf(p2,Produto.prototype);//p2 que não é filho da construtora, agora tem setado seu prototype com todos métodos e funcções que foram criados na construtora, podendo assim ter acesso ao método desconto, por exemplo... aé como se p2 fosse 'adotada' e tem as mesmas caracteristicas da mae/pai agora
p2.desconto(100);
console.log(p2);


























//CRIANDO UM OBJETO E JÁ SETAR SEU PROTOTYPE PRA DIRECIONAR SE ELE VAI TER MEOTDOS DE UM PAI DO PROTO
function Produto(nome,preco){
  this.nome = nome;
  this.preco = preco;
  //ao invés de criar métodos aqui dentro, vamos usar o prototype
}
//método que dá desconto
Produto.prototype.desconto = function(percentual){ //function retorna um novo preco com um desconto de acordo com percentual dado
  this.preco = this.preco - (this.preco * (percentual/100) )
}
const p1 = new Produto('joia','50');
//p2 nao é filho da construtora, entao ele n pode usar os métodos
//para que ele tenha acesso aos métodos, vou dizer q o prototype dele é o mesmo da construtora

const  p2 = {
  nome:'Caneca',
  preco: 20
}

Object.setPrototypeOf(p2,Produto.prototype);//p2 que não é filho da construtora, agora tem setado seu prototype com todos métodos e funcções que foram criados na construtora, podendo assim ter acesso ao método desconto, por exemplo... aé como se p2 fosse 'adotada' e tem as mesmas caracteristicas da mae/pai agora

const p3 = Object.create(Object.prototype); //prmeiro parametro é o objetct.protype, que é um objeto que contém o proto..
console.log(p3); 

const p4 = Object.create(Produto.prototype,{//crio o objeto já dando o proto com métodos do pai pra ele, e depois dá no segundo parametro as chaves com suas defineProperty(sao opcionais)
  //aqui crio as chaves de p4, pra poder usar o desconto aqui também, desconto é um método q veio no proto que definimos pra vir, tá na construtora e é herdado pra cá
  tamanho:{
    writable:true,
    configurable:true,
    enumerable:true,
    value:20 +'cm'
  },
  preco:{
    writable:true,
    configurable:true,
    enumerable:true,
    value:100
  }
}); //aqui cria um novo objeto já dando à ele as propriedades do proto(métodos,funcoes,etc) da função construtora

p4.desconto(10);//posso usar as chaves e os métodos que, pois p4 se tornou filho de Produto, e Produto tem seus métodos no proto
console.log(p4);








//IMPORTANTE ##### HEREANÇA ########
//DANDO HERANÇA, EXEMPLO É QUANDO SE CRIAR UM E-COMERCE COM VARIOS PRODUTOS, TODOS QUE SERÃO VENDIDOS VAO SER PRODUTOS
//Produtos: Camiseta,Caneca...  todos tem nome e preco, mas a camisa tem cor e tamanho, já a caneca tem material , ou seja, chaves diferentes
//quero ter um desconto em cima do preço
function Produto(nome,preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(valorDesconto){ //bota no proto o método desconto, que vai poder ser utilizado com qualquer produto pois já vai estar na 'memoria' , ou seja, no proto que contém todos os métodos, inclusive esse q criamos agora
  this.preco = this.preco - valorDesconto;
}


//criando função construtora pra camiseta(pra não ter que rescrever tudo)
function Camiseta(nome,preco,cor){
 
  //preciso chamar o construtor da função Produto pra que herde os métodos e funções todas pra cá pra camiseta, como o método desconto por exemplo
  Produto.call(this,nome,preco) //quem vai ser o this dentro dessa função? pra isso que o call segue, vai chamar alguém pra ser o this.. o this nessa função construtora Camiseta precisa ser o novo objeto(camisa1, camisa2, etc)... se eu tiver criando o camisa1, o this vai ser o camisa1, que vai ter nome, preco, etc... O SEGUNDO PARAMETRO e os proximos, indicam qual a chave que é comum à todos, ou seja, a chave que preciso a qual está na primeira função construtora(Produto). Fazer esse passo com call, já liga as duas funções, isto é, a função construtora Produto está ligada com a função construtora Camiseta
 
  this.cor = cor;//Camiste herda de Produto mas também pode ter suas especificidades, como é o caso de cor
}
 //agora precisamos linkar os prototypes pra que os métodos da função construtora Produto venham para a função consturtora Camiste
Camiseta.prototype = Object.create(Produto.prototype);//no prototype de Camiseta, crio um objeto vazio com object.create e digo que o proto dele é o mesmo de Produto, pois é em Produto que tenho os métodos pra usar em Camiseta 
Camiseta.prototype.constructor = Camiseta; //aqui preciso linkar também quem é o construtor de cada objeto novo que eu for criar usando a função construtora camiseta, pq se eu nao fizer isso, vai dizer que o construtor de cada novo objeto criado(como camisa1, camisa2, etc) vai filho de Produto e nao de Camiseta, e eu nao quero isso, o que quero é que cada novo objeto seja filho de Camiseta, mas com caracterisitcas herdadas de Produto como os métodos do seu proto
//OBS: __proto__ de oroduto é Produto.prototype, e no produto.prototype tem os métodos como desconto, e no proto do proto tem as funcoes do js e tem tb o constructor q aponta quem criou 
//sobrescrevendo um método q veio de herança do Produto, mas só alterando ele pra Camiseta, pro Produto o método desconto continua sendo um valor q damos, aqui é percentual
Camiseta.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual/100));
}


function Caneca(nome,preco,material,estoque){
  //this daqui de Caneca referencia um novo objeto que a funcao vai criar, mas o que quero é que o this que referencia caneca, referencie Produto, pois caneca é um Produto que tem nome  e preco... pra isso chamo com call o Produto e dou o this do produto pra ser o this daqui, passo nome e preco pra lá, pois nome é preço é do Produto q todos tem, e o que é caracterisitca diferente, posso deixar com o this daqui mesmo
  Produto.call(this,nome,preco); //preciso que o this de Produto seja esse daqui, ou seja, que ele guarde os valores daqui, pra que quanndo eu chame nome e preco,esteja referenciado de acordo com objeto certo
  this.material = material;
  this.estoque = estoque;

  //criando um estoque
  Object.defineProperty(this,'estoque',{
    enumerable:true,
    configurable:false,
    get: function(){ //funcao que retorna o estoque
      return estoque
    },
    set: function(valor){ //aqui eu vou redefinir o estoque
      if(typeof valor != 'number') return; // se o valor nao for numero,finaliza o processo
      estoque = valor;
    } 
  })
}

//linkando o prototype da caneca com o pai Produto pra ter os métodos
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const canecaNatal = new Caneca('Natal', 13, 'plastico', 5);
const produto1 = new Produto('Short',200);
const camisa1 = new Camiseta('Camisa polo',80,'red');

//canecaNatal.estoque = '10';//nao altera pois eh string
//canecaNatal.estoque = 11; //altera
console.log(canecaNatal); //obs: no navegador é melhor pois dá pra clicar e ver o estoque no console.log
console.log(camisa1);
console.log(camisa1.preco);
camisa1.desconto(50); //desconto de 50% que na construtora Camiseta alteramos pra ser porcentagem
console.log(camisa1.preco);

console.log(produto1.preco);
produto1.desconto(100); //aqui é o valor do desconto em si(100 reais) que foi alterado pra porcentagem na Camiseta, porém aqui continuo a mesma coisa, que no caso é o desconto de quantia
console.log(produto1.preco);




















//VALIDANDO UM CPF
//primeiro passo: pega os 9 primeiros dígitos:
//028.794.232-52
//abre eles pra multiplicar até o traço
// 0x  2x  8x  7x  9x  4x  2x  3x  2x 
// 10  9   8   7   6   5   4   3    2
//= 0  18  64  49  54  20  8   9    4  = 226 somado todo resultado

//formula pra validação:
// 11 - (226 % 11) = 6 --> 11 - 6 = 5, 5 é o primeiro dígito (do -52)
//obs: (226 % 11 é o resto da divisao que dá 6)
//se o número que sair da conta de 11 - resto da divisao entre o total somado antes do traço e 11, o primeiro número representado é o 0

//agora o mesmo passo se repete pra chegar no segundo digito pós traço (-)
//no entanto, agora pega-se todos números e a multiplicação começa do 11, pois vamos incluir mais um digito q foi o encontrado , no meu caso foi 5

// 0x  2x  8x  7x  9x  4x  2x  3x  2x   5x
// 11  10  9   8   7   6   5   4   3    2
//= 0  20  72  56  63  24  10  12  6    10 = 273 somado
// 11 - (273 % 11) =
//273 % 11 = 9
//11 - 9 = 2   , logo 2 é o último número


let cpf = '028.794.232-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //expressão regular pra dizer que tudo que não for um número, ser substituido por nada('');

let cpfArray = Array.from(cpfLimpo);

//console.log(cpfLimpo)
console.log(cpfArray.map(objeto => {
    return objeto;
}))


//###########IMPORTANTE##################
//VALIDACAO DO CPF EM CÓDIGO
//cria a contrutora
function ValidaCPF(cpfEnviado){
  Object.defineProperty(this,'cpfLimpo',{ //usa o this aqui pois referencia a funcao construtora, o segundo parametro é q digo oq é cpfLimpo, ou seja, o que retornar da funcao vai ser ele
    enumerable:true, //aparecer o cpf
    get: function(){
      return cpfEnviado.replace(/\D+/g,'');
    } 

  })

  //console.log(this.cpfLimpo); //aqui mostra o cpf já limpo
}

  //criando um método no prototype da construtora ValidaCPF para que possa usar esse método sempre que for validar um CPF
  ValidaCPF.prototype.valida = function(){
    //checando se o cpf é undefined(nao foi enviado)
    if(typeof this.cpfLimpo === 'undefined')  return false;     //precisa do  this por o cpfLimpo é de dentro do Objeto

    //checando se o cpf tá com tamanho certo
    if(this.cpfLimpo.length !== 11)    return false;
    
    //checando se o cpf nao é o 111.111.111-11, ou sequencia de numeros , pois ele é validado mas nao pode ser pois nao existe
    if(this.isSequencia() === true)  return false; //se o método é sequencia for verdadeiro, retorna falso pra cancelar a validacao, ou seja, se existir numeros sequenciados, retorna-se falso... quando o cpf é sequenciado,  vai retornar como verdade pelo método isSequencia, dai vem como verdade pra ca, e se isSequencia é verdade, retorna falso, ou seja, nao valida o cpf

    //criando o cpfParcial pra enviar pro método criaDigitoFinal se estiver tudo correto com cpf, isto é, ele não estar undefined e ter 11 caracteres
    const cpfParcial = this.cpfLimpo.slice(0,-2); //nao é a mesma variavel do parametro do método do cpfParcial...  o cpfParcial é o cpf todo menos dois digitos finais
    const digito1 = this.criaDigitoFinal(cpfParcial); //o this é pra referenciar a construtora ValidaCPF, ou seja, é aqui que o método 'criaDigitoFinal' está... passo esse parametro como argumento pro método ValidaCPF.prototype.criaDigitoFinal
    //console.log(digito1);ver o digito 1 , que veio do método criaDigitoFinal

    const digito2 = this.criaDigitoFinal(cpfParcial + digito1);//o segundo digito também vai ser mandado pro método pra executar a funcao de criar digito, porém ele já vai com um digito a mais q foi o primeiro adicionado, por isso somamos o cpfParcial com digito1 pra concatenar 
    //console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2;
    //console.log(novoCpf);



     // retorna true para o cpf valido, ou seja, se o limpo que foi mandado for igual ao novoCpf
    return novoCpf === this.cpfLimpo;
       
       }




  //criando um método para ler os 9 primeiros numeros e de acordo com a lógica de validação do governo, ceder os outros dois
  ValidaCPF.prototype.criaDigitoFinal = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1; //o regressivo é o número q preciso para multiplicar cada elemento do array.. exemplo: o 10 multiplica com 0 do cpf, o 9 com 2 do cpf,  o 8 com 8 do cpf
    const total = cpfArray.reduce((acumulador,valor) => {
      //console.log(regressivo,typeof valor, regressivo valor);
      acumulador = acumulador + (regressivo * Number(valor)); //pega o acumulador q começa em 0 e fica atualizando ele... regressivo primeiro é 10, pega esse 10 e multiplica com o primeiro elemento do array q tem o cpf, que no caso é o primeiro digito do cpf que é 0, multiplica por 10 e isso vai ser o acumulador, ai depois o regressivo diminui 1, ai vai pra 9, pega o segundo valor do cpf que é 2 e multiplica por 9 que é o regressivo e soma com o acumulador de antes... ai vai indo até o final
      regressivo = regressivo - 1;//faz com que o regressivo seja primeiro 10, ai faz a conta de multiplicacao e guarda no acumulador, ai depois regressivo é 9, faz a conta de multiplicacao e guarda no acumulador
      
      return acumulador;
      
    },0) //de onde o acumulador começa

    //console.log(total);// retorna o acumulador, q tem q ser 226
    
   const digito = 11 - (total % 11); //faz a conta de validacao do primeiro digito
   return digito > 9 ? '0' : String(digito); //retorna 0 se o digito for maior que 9, se for menor que 9 retorna o proprio digito... OBS: estou mandando como string pois no método valida, vou querer no novoCpf concatenar pra pegar os dois numeros q gerei aqui e não somar em si, mas sim concatenar
  };


  //método pra checar se tem cpf sequenciado tipo 111.111.111-11, etc
  ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);// pega o primeiro indice do cpf limpo que é 1, dá um repeat nele 11 vezes, que no caso é o  tamanho do this.cpfLimpo.lenght... this pq é pra referenciar objeto que tá sendo criado, dai pega o cpfLimpo desse objeto e vê o tamanho que é 11 e vai repetir o 1 onze vezes, se o cpf for assim é pq ele é invalido, se for todo repetido
    return sequencia === this.cpfLimpo; //retorna verdade pra cá, o cpfLimpo é uma sequencia.. ai manda lá pro if(this.isSequencia() === true) return false... como é verdade que é sequencia, vai retornar falso pra validar o cpf pois nao pode ser sequenciado.
  }
  
  const cpf = new ValidaCPF('028.794.232-52');//novo cpf a ser validado na construtora, que tem dentro de si vários métodos de validacao
  //070.987.720-03
  //console.log(cpf.valida());//primeiro método a ser executado que é pra checagem se tá tudo certo o cpf e por fim a cortada(slice) dos digitos pra mandar pra outro método só 9 digitos pra poder fazer os outros dois de acordo com a lógica matemática do governo
  //cpf.criaDigitoFinal();

  if(cpf.valida() === true){
    console.log('Cpf validado!');
  }else{
    console.log('Cpf inválido!');
  }



























  //##################IMPORTANTE:
  //USANDO MESMO MÉTODO PORÉM ALTERANDO ELE PRA CADA TIPO DE USO, CONSTRO UMA CONSTRUTORA PAI E FAZ OUTRAS CONSTRUTORAS FILHAS QUE TEM O MESMO PROTOTYPE, OU SEJA, TEM ACESSO AOS METODOS DO PAI, AI ALTERA ESSES METODOS SOMENTE NAS FILHAS
  //POLIMORFISMO: 
//faz o método se comportar como sub-classes, ou seja, filhas de uma classe(função construtora)
//EXERCICIO: FAZER UMA CLASSE CONTA BANCÁRIA
//DEPOIS DE FAZER A MÃE(CONSTRUTORA CONTA BANCÁRIA), FAZ OS FILHOS(SUB-CLASSE)
//SUBCLASSES: CONTA CORRENTE E CONTA POUPANÇA

//na programação orientada a objetos, essa seria a SUPERCLASSE
//funcao construtora
function ContaBancaria(agencia,conta,saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

//criando métodos que são comuns à todas contas, como o sacar,depositar,ver saldo
//obs:conta corrente tem limite pra saque,poupança não tem.
ContaBancaria.prototype.sacar = function(valor){ //pra sacar, preciso de um valor pra sacar.. que é quanto eu quero, ai vem no argumento aqui, quando eu for usar esse método, eu peço esse valor como parametro pra enviar pra cá
 if(this.saldo < valor) {//saldo é menor quue  o valor que a pessoa quer
  console.log(`Saldo insuficiente! Você deseja sacar R$${valor}, porém só tens R$${this.saldo}`);
  return;//finaliza
 }

 //se passou pelo if, é pq a pessoa tem saldo
 //saldo dela vai ser o saldo atual, menos o valor que ela pediu
 this.saldo = this.saldo - valor; //this.saldo -= valor
 this.verSaldo();
}

ContaBancaria.prototype.depositar = function(valor){
  //bem simples, só faz pegar o saldo atual e somar com valor que quer depositar
  this.saldo = this.saldo + valor;//this.saldo += saldo
  this.verSaldo(); //assim que depositar, mostra o saldo de quanto ficou
}

ContaBancaria.prototype.verSaldo = function(){

  console.log(`Ag/c ${this.agencia}/${this.conta} | ` + 
  `Saldo:R$${this.saldo.toFixed(2)}`); //ver o saldo com duas casas decimais
}

//testando se tá funcionando
//const conta1 = new ContaBancaria(11,22,200);
//conta1.depositar(10);
//conta1.sacar(400);
//console.log(conta1);

//tudo ok, agora vou especializar a superclasse ContaBancaria
//o método sacar que faz parte da superclasse ContaBancaria vai ter um limite de acordo com os tipos de conta, seja corrente ou poupança


//criando a construtora ContaCorrente e herdando à ela o this da contaBancaria, pois é nele q vamos mexer com os paramentros
//obs: o que eu não passar da CC pra CB, é que é somente da CC... nesse caso é o limite
function CC(agencia,conta,saldo,limite){ //recebe também esses paramentros, mas em baixo vamos chamar com call para que eles sejam da função construtora pai/mãe
  ContaBancaria.call(this,agencia,conta,saldo) //aqui eu chamo a contaBancaria pra ser o this dessa ContaCorrente, para que quando eu precise de valores, eu pego do objeto this da contaBancaria... é a famosa chamada de herança aqui
  this.limite = limite; //não passo ele, pois ele é único da conta corrente
}

//linkando os prototypes de CC com CB
CC.prototype = Object.create(ContaBancaria.prototype); //prototype de ContaCorrente que é onde ficam os métodos vai passar a ser um novo objeto vazio chamado que vai ser preenchido pelos métodos da ContaBancaria, que é a construtora superclasse... agora, CC tem todos métodos de CB, dai posso modificar os métodos em CC, mas não em CB... posso especializar uma ContaCorrente pra diferenciar da ContaPoupanca
CC.prototype.constructor = CC; //aqui digo quem é o construtor de CC, pra ela ter seu proprio cosntrutor e nao ser um construtor de CB


//sobrescrevendo o método sacar apenas pra ContaCorrente, pra dizer que funciona de maneira diferente, impor novas funcionalidades,melhorias, etc
//aqui na contacorrente, a pessoa pode sacar até o limite, mesmo sendo negativo em saldo
CC.prototype.sacar = function(valor){ //pra sacar, preciso de um valor pra sacar.. que é quanto eu quero, ai vem no argumento aqui, quando eu for usar esse método, eu peço esse valor como parametro pra enviar pra cá
  if(valor > (this.saldo + this.limite)) {//se o valor que quer sacar for maior que o saldo + limite em crédito que a pessoa tem, ai n pode sacar
   console.log(`Saldo insuficiente! Você deseja sacar R$${valor}, porém só tens R$${this.saldo}`);
   return;//finaliza
  }
 
  //se passou pelo if, é pq a pessoa tem saldo
  //saldo dela vai ser o saldo atual, menos o valor que ela pediu
  this.saldo = this.saldo - valor; //this.saldo -= valor
  this.verSaldo();
 }

 //testando a sobrescrição de sacar
 //const cc1 = new CC(11,11,0,100); //ag,conta,saldo,limite
 //cc1.depositar(10);//tinha 0, ai vou depositar 10
 //cc1.sacar(80)//não tenho 80, mas tenho 10 e meu limite é 100, entao saco os 10 + 70, ficando 70 negativo, ou seja, devendo
 //cc1.sacar(29);
 //cc1.sacar(2);//só podia sacar mais 1 real, como tentei 2, deu erro pq acabou o limite


 //tudo ok, agora vou criar a construtora da ContaPoupanca, que vai herdar método da ContaBancaria

 
function CP(agencia,conta,saldo){ //recebe também esses paramentros, mas em baixo vamos chamar com call para que eles sejam da função construtora pai/mãe
  ContaBancaria.call(this,agencia,conta,saldo) //aqui eu chamo a contaBancaria pra ser o this dessa ContaCorrente, para que quando eu precise de valores, eu pego do objeto this da contaBancaria... é a famosa chamada de herança aqui
}

//linkando os prototypes de CC com CB
CP.prototype = Object.create(ContaBancaria.prototype); //prototype de ContaCorrente que é onde ficam os métodos vai passar a ser um novo objeto vazio chamado que vai ser preenchido pelos métodos da ContaBancaria, que é a construtora superclasse... agora, CC tem todos métodos de CB, dai posso modificar os métodos em CC, mas não em CB... posso especializar uma ContaCorrente pra diferenciar da ContaPoupanca
CP.prototype.constructor = CP; //aqui digo quem é o construtor de CC, pra ela ter seu proprio cosntrutor e nao ser um construtor de CB

//testando a cp, que é a mesma coisa da CB por enquanto
//const cp1 = new CP(11,22,10);
//cp1.sacar(100);

//tudo ok, polimofirsmo feito, mesmo método se comportando de forma diferente
console.log('##CONTA BANCÁRIA PAI, CONSTRUTORA##')
const conta1 = new ContaBancaria(11,22,200);
conta1.depositar(10);
conta1.sacar(400);


console.log(' ')

console.log('##CONTA CORRENTE FILHA COM SACAR ALTERADO##')
 const cc1 = new CC(11,11,0,100);
 cc1.depositar(10);
 cc1.sacar(80)
 cc1.sacar(29);
 cc1.sacar(2);

 console.log(' ')

 console.log('##CONTA POUPANÇA FILHA COM SACAR ALTERADO TB##')
const cp1 = new CP(13,21,10);
cp1.sacar(100);
































//PROTOTYPE EM FACTORY FUNCTION
//SÓ VIMOS ATÉ AGORA EM CONSTRUCTOR(CONSTRUTORA), AGORA VAMOS VER NAS FACTORY!
function criaPessoa(nome,sobrenome){
  //criando um objeto que vai ser o prototype de cada uma das pessoas
  const pessoaPrototype = {
    falar(){
      console.log(`${this.nome} está falando`);
    }
  }

  // a vantagem de usar factory function é que posso dizer aqui se a chave é writable, usar getter e setter... etc
  return Object.create(pessoaPrototype,{ //aqui cria um objeto vazio e preenche esse com a const pessoaPrototype, que é onde tem todos métodos que queremos... o segundo parametro é as propriedades nome e sobrenome, que estamos passando pra quando for criando um novo objeto, referencia-las
    nome: {value: nome},
    sobrenome:{value: sobrenome}
  });

    //criar método aqui dentro não é eficiente pois vai ter queda de desempenho
    //temos que botar os métodos no proto pra não ficar repetindo aqui em todos objectos, pois querendo ou nao essa factory function herda para novos objetos, e os objetos nao vao querer, muita das vezes, utilizar todos métodos que estão sendo disponibilizados pela factory
    
}

const p1 = criaPessoa('icaro','antunes');
const p2 = criaPessoa('andre','matos');
console.log(p1.falar());
console.log(p2.falar());
























//SE TIVER UM MÉTODO DE FORA QUE QUERO USAR DENTRO DE UM OBJETO, PARA NAO PRECISAR CRIAR ELE NOVAMENTE, POSSO FAZER ESSA COMPOSIÇÃO,MIXING EM JAVASCRIPT
//JOGANDO MÉTODOS DE FORA DO ESCOPO OS QUAIS IREMOS PRECISAR USAR DENTRO DE DETERMINADO LOCAL
//desacoplando métodos
//PROTOTYPE EM FACTORY FUNCTION

//cria os métodos fora da função, podendo usar em qualquer lugar do código
//obs:falar e comer sao objetos com funcoes dentro
const falar = {
  falar(){
    console.log(`${this.nome} está falando`);
  }
}

const comer = {
  comer(){
    console.log(`${this.nome} está comendo`);
  }
}
//aqui nessa const, dou um spread nos objetos, ou seja, copio os objetos de falar e comer pra cá, mas como dentro desses objetos está sendo executada uma função, aqui também vai executar uma função... isto tudo está sendo copiado pra const pessoaPrototype, que vai ali em baixo ser linkada
const pessoaPrototype = {...falar,...comer};
//ou com object.assing, que cria um objeto vazio e poe os metodos tudo nesse objeto vazio
//const pessoaPrototype = Object.assign({},falar,comer);

 
function criaPessoa(nome,sobrenome){ //a funcao criaPessoa retorna nome,sobrenome e tambpem um objeto novo que é preenchido por pessoaPrototype, que tem dentro dela métodos
  return Object.create(pessoaPrototype,{ //aqui cria um objeto vazio e preenche esse com a const pessoaPrototype, que é onde tem todos métodos que queremos... o segundo parametro é as propriedades nome e sobrenome, que estamos passando pra quando for criando um novo objeto, referencia-las
    nome: {value: nome},
    sobrenome:{value: sobrenome}
  });

}

const p1 = criaPessoa('icaro','antunes');
const p2 = criaPessoa('andre','matos');
console.log(p1);























//QUANDO SE CRIA MÉTODOS EM CLASSES, ELES JÁ VÃO DIRETAMENTE PRO PROTOTYPE DO MOLDE, O QUE FACILITA NOSSA VIDA POIS NAO PRECISAMOS LINKAR PROTUType
//CLASSES EM JS

//criando uma 'molde' de classe pessoa
class Pessoa {
  constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //botando métodos no prototype desse molde Pessoa
  //em factory e constructor, preciso linkar o prototype do filho com prototype do pai por meio do Object.create(), aqui não precisa pois já vai direto pro prototype os m´petodos
  //não precisa criar e atrelar um prototype para que esses métodos fiquem no prototype, eles já vão direto pra lá
  falar(){
    console.log(`${this.nome} esta falando`);
  }

  comer(){
    console.log(`${this.nome} esta comendo`);
  }
}

//instaciando uma pessoa, criando um objeto pessoa a partir do molde
const p1 = new Pessoa('Icaro','Antunes');
const p2 = new Pessoa('Caraci','Ansd');
const p3 = new Pessoa('Joao','nes');
console.log(p1);


//AGORA FAZENDO COM CONSTRUCTOR PARA COMPARAR
function Pessoa2(nome2,sobrenome2){
  this.nome2 = nome2;
  this.sobrenome2 = sobrenome2;
}
  

Pessoa2.prototype.falar2 = function(){
  console.log(`${this.nome} esta falando`);
}

Pessoa2.prototype.comer2 = function(){
  console.log(`${this.nome} esta comendo`);
}

const p2Constructor = new Pessoa2('Icarote','Antunote');

console.log(p2Constructor);
























//GETTER E SETTER

const _velocidade = Symbol('velocidade'); //cria um valor aleatório pra nunca ser igual ao anterior
class Carro {
  constructor(nome){
    this.nome = nome;
    this[_velocidade] = 0; //bota um underline pq definimos o symbol pra que nao dê pra mudar no objeto
  }

  acelerar(){
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  get velocidade(){ //só dá pra acessar essa velocidade real do fusca assim, a outra velocidade sem o _ , é só representativa, mas a real é a com _
    return this[_velocidade]; //valor real está aqui
  }
  set velocidade(valor){ //simulando que pode alterar a velocidade aqui se for dentre os padroes, isto é, ela nao for menor q 0(negativa) ou nao for maior que 100, que é a  q o fusca tem de limite de velocidade
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;

    this[_velocidade] = valor;
  }

  freiar(){
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const fusca = new Carro('fusca');
for(let i = 0; i < 200 ; i++){ //acelera o fusca 110 vezes, mas só pode até 100 pois restringimos no if do método
  fusca.acelerar();
}


fusca.velocidade = 2000;
//no entanto, se vier um maluco cabeça de bagre e disser que a[_velocidade] do fusca é 1500, dai vai poder e nos ferrar demais tlg?
//fusca[_velocidade] = 1500; pra evitar isso adaqui, vamo mexer com getter e setter
console.log(fusca.velocidade); //mesmo a gente definindo 2000, continua sendo 100


























class Pessoa{
  constructor(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
 //get pra pegar o nome 
  get nomeCompleto(){
    return this.nome+ ' ' + this.sobrenome;
  }

  set nomeCompleto(value){ // para mudar o valor
   const partes =  value.split(' '); //separa por partes em espaços 
   this.nome = partes[0];//a primeira parte é o primeiro nome
   this.sobrenome = partes[1];//a segunda parte é  o sbonreome
  }
}

const p1 = new Pessoa('Icaro', 'Antunes');

console.log(p1.nomeCompleto);

p1.nomeCompleto = 'IcaroMudou AntunesMudou';

console.log(p1.nomeCompleto);




























//Herança com classes

class DispositivoEletronico {
  constructor(nome){
    this.nome = nome;
    this.ligado = false;

  }

  ligar(){
    if(this.ligado === true) {//se o dispositivo já está ligado
      console.log(`${this.nome} já está ligado!`);
      return;
    }
    this.ligado = true; // se nao estiver ligado, liga
    console.log('O dispositivo foi ligado');
  }

  desligar(){
    if(this.ligado === false) {//se o dispositivo já está desligado
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false; // se nao estiver desligado, desliga
    console.log('O dispositivo foi desligado')
  }

}


const d1 = new DispositivoEletronico('Celular');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);























//Herança com classes
//dando herança
class DispositivoEletronico {
  constructor(nome){
    this.nome = nome;
    this.ligado = false;

  }

  ligar(){
    if(this.ligado === true) {//se o dispositivo já está ligado
      console.log(`${this.nome} já está ligado!`);
      return;
    }
    this.ligado = true; // se nao estiver ligado, liga
    console.log('O dispositivo foi ligado');
  }

  desligar(){
    if(this.ligado === false) {//se o dispositivo já está desligado
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false; // se nao estiver desligado, desliga
    console.log('O dispositivo foi desligado')
  }

}

class Celular extends DispositivoEletronico{ // classe Celular que herda métodos da classe DispositivoEletronico
  constructor(nome,modelo,cor){
    super(nome); //chama superclass que é nada mais que todos os parametros que já tem na classe pai DispositivoEletronico, porém para não precisar reescrever tudo, basta dizer super e passar os parametros pra cá... é como se fosse o call para esse this referenciar o pai, assim como foi feito em factory e constructor
    //agora aqui em baixo, posso dar novas propriedades como cor, modelo,etc.. coisas exclusivas do dispositivo celular
    this.moldelo = modelo;
  }
}

class Computador extends DispositivoEletronico{
  constructor(nome,processador){
    super(nome);
    this.processador = processador;
  }
}

const celu1 = new Celular('Xiaomi','Redmi','Cinza');
const comp1 = new Computador('UltraGamer XX','i7');
console.log(celu1);
console.log(comp1);





















//Herança com classes
//dando herança
class DispositivoEletronico {
  constructor(nome){
    this.nome = nome;
    this.ligado = false;

  }

  ligar(){
    if(this.ligado === true) {//se o dispositivo já está ligado
      console.log(`${this.nome} já está ligado!`);
      return;
    }
    this.ligado = true; // se nao estiver ligado, liga
    console.log('O dispositivo foi ligado');
  }

  desligar(){
    if(this.ligado === false) {//se o dispositivo já está desligado
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false; // se nao estiver desligado, desliga
    console.log('O dispositivo foi desligado')
  }

}

class Celular extends DispositivoEletronico{ // classe Celular que herda métodos da classe DispositivoEletronico
  constructor(nome,modelo,cor){
    super(nome); //chama superclass que é nada mais que todos os parametros que já tem na classe pai DispositivoEletronico, porém para não precisar reescrever tudo, basta dizer super e passar os parametros pra cá... é como se fosse o call para esse this referenciar o pai, assim como foi feito em factory e constructor
    //agora aqui em baixo, posso dar novas propriedades como cor, modelo,etc.. coisas exclusivas do dispositivo celular
    this.moldelo = modelo;
  }
}

class Computador extends DispositivoEletronico{
  constructor(nome,processador,bateria){
    super(nome);
    this.processador = processador;
    this.bateria = 50;
  }

  //posso alterar o método ligar só pra classe Computador
  ligar(){
    if(this.bateria <= 10){
      console.log('Bateria abaixo de 10, logo não podemos ligar!')
      return;
    }

    if(this.ligado === true){
      console.log(`${this.nome} já está ligado`);
      return;
    }

    
    this.ligado = true;
    console.log('Vc ligou o' +' ' +this.nome);
  }

  //posso criar um método aqui também, só pro Computador... esse método é so do computador,niguém pode usá-lo
  mostraProcessador(){
    console.log(`O processador do ${this.nome} é o ${this.processador}`)
  }
}

//const celu1 = new Celular('Xiaomi','Redmi','Cinza');
//console.log(celu1);
const comp1 = new Computador('UltraGamer XX','i7');
comp1.ligar();
comp1.ligar();
comp1.mostraProcessador();
console.log(comp1);
*/


