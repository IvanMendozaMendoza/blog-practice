---
title: Introducción a Astro
date: 2024-08-15
description: Descubre Astro, el framework web que te permite crear sitios web más rápidos con menos JavaScript.
author: john-smith
image: ../../assets/images/post-01.png
tags: [Astro, Web Development, JavaScript]

---

import { Image } from 'astro:assets';
import post01Image from '../../assets/images/post-01.png';

# {frontmatter.title} 

<Image src={post01Image} width={350} alt="Introducción a Astro" />

JavaScript ES6 introdujo varias funciones nuevas que han hecho que la codificación en JavaScript sea más eficiente y agradable. Vamos a explorar algunas de estas funciones.

## Arrow Functions - Funciones de Flecha

Las funciones de flecha proporcionan una nueva sintaxis para escribir expresiones de función. Son más concisas y vinculan léxicamente el valor `this`.

### Ejemplo

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

## Template Literals - Literales de Plantilla

Los literales de plantilla permiten una interpolación de cadenas más fácil y cadenas de varias líneas. Utilizan comillas invertidas (\`) en lugar de comillas simples o dobles.

### Ejemplo

```javascript
const name = 'Jane';
console.log(`Hello, ${name}!`);
// Output: Hello, Jane!
```

## Destructuring Assignment - Asignación por Desestructuración

La asignación por desestructuración le permite extraer valores de matrices u objetos y asignarlos a variables de una manera más concisa.

### Ejemplo

```javascript
const person = { name: 'Jane', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Jane 30
```
