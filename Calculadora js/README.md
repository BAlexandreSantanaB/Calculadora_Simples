## Calculadora_Simples

<p>Um projeto simples para colocar em prática os conhecimentos de javascript</p>

<h3>Instruções</h3>
<p>
    <ul>
        <li>Use o mouse para clicar nos números e nas operações</li>
        <li>"+" operação de soma</li>
        <li>"-" operação de subtração</li>
        <li>"*" operação de multiplicação</li>
        <li>"/" operação de divisão</li>
        <li>"." inicia a parte decimal dos digitos</li> 
        <li>Utilize o igual para calcular o resultado de sua operação</li>
        <li>Botão "Ce" zera a calculadora</li>
    </ul>
</p>

<h3>Desenvolvimento</h3>

<p>A calculadora foi projeta em html, css e javascript. Tendo no html a contruçãao através de uma tabela, o css para alinhamentos e padronização do itens de html.</p>
<p>O javascript tem  uma única função que é a calcular() onde recebe dois parâmetros o tipo e valor. O tipo passa por um tratamento com if para saber se ele é uma "acao" ou "valor", já o valor ele o valor respectivo do botão clicado. Para ter o resultado, no input("type text") com id "display" é escrito tudo em forma de string e dentro da função calcular() temos a função eval() que faz o cálculo da string no "display". 