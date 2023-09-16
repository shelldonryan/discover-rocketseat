## O que é o Box Model?
Cada elemento é representado como uma caixa retangular
Essa caixa possui propriedades de uma caixa em 2 dimensões (largura x altura)

## Propriedades da caixa
-Tamanho (largura x altura) → width | height
-Conteúdo → content
-Bordas → border
-Preenchimento interno → padding
-Espaços fora da caixa → margin

## Box-Sizing
Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de 100px a caixa vai ficar com uma largura de 140px. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade box-sizing: border-box;

Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

* {
   box-sizing: border-box;
}

## display: block; vs display: inline
Display Block
Ocupa toda a linha, colocando o próximo elemento abaixo desse
width e height são respeitados
padding, margin, border irão funcionar normalmente
<p> <div> <section>, todos os headings <h1> <h2>...

Display Inline
Os elementos ficam ao lado do outro e não empurram outros elementos para baixo
width e height não funcionam
Somente valores horizontais de margin
<a> <strong> <span> <em>

## Border-outline
value: <border-style> | <border-width> | <border-color>

style: solid | dotted | dashed | double | groove | ridge | inset | outset
width: <length>
color: <color>
div {
	/* shorthand */
	border-top: solid 2px; /* top | right | bottom | left */

	/* style */
	border: solid;

	/* width <length> | style */
	border: 2px dotted;

	/* style | color */
	border: outset #f33;

	/* width | style | color */
	border: medium dashed green;

}
E o outline?
O outline é muito semelhante ao border, mas difere em 4 sentidos:
1 Não modifica o tamanho da caixa, pois não é parte do Box Model
2 Poderá ser diferente de retangular
3 Não permite ajuste individuais
4 Mais usado pelo user agent para acessibilidade