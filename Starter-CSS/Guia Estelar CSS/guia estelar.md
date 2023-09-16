## Cascading
A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
São levados em consideração 3 fatores:

A origem do estilo;

A especificidade;

A importância;


## AT-RULES
@import serve para incluir um CSS externo.
@media são regras condicionais para vários dispositivos.
@font-face é para colocar fontes externas.
@keyframes serve para as animations do CSS.


## shorthands
Algumas das características do shorthand:

Não irá considerar propriedades anteriores, ou seja, caso faça um shorthand, apenas ele será considerado, quaisquer propriedades anteriores serão substituídas pelas do shorthand.

Os valores que não forem especificados irão assumir o valor padrão.

Por fim, geralmente, a ordem descrita não importa, mas, caso haja muitas propriedades com valores semelhantes, poderemos encontrar problemas.


## Vendor Prefixes
Exemplos
	/*-webkit-background-clip: text;*/ /*Chrome, Safari, iOS e Android*/
	/*-moz-background-clip: text;*/ /* Mozilla (Firefox) */
	/*-ms-background-clip: text;*/ /* Internet Explorer ou Edge*/
	/*-o-background-clip: text;*/ /* Opera */
    /*Você também pode consultar se a feature pode ser utilizada através dos sites:*/

/*https://ireade.github.io/which-vendor-prefix*/

/*https://caniuse.com*/

