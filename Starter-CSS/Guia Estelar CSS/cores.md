## Cores
Usamos CSS para alterar cores do nosso documento.

Tipos
background-color (para caixas)
color (para textos)
border-color (para caixas)
outros
Valores
Podemos definir valores por:

palavra-chave (blue, transparent)
hexadecimal (#990011)
funções: rgb, rgba, hsl, hsla

## RGB
RGB → Red, Green e Blue
O alpha representa a transparência da cor

/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)

## HSL
HSL → Hue - Saturation - Lightness
O alpha representa a transparência da cor

color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)

## Global values 
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

