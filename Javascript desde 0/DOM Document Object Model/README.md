# DOM (Document Object Model)<!-- omit in toc -->

## Tabla de Contenido<!-- omit in toc -->
- [Introducción](#introducción)
- [DOM - Acceder a elementos/nodos](#DOM---Acceder-a-elementos/nodos)
- [Atributos desde Javascript|](#Atributos-desde-Javascript)


## Introducción

DOM -> Modelo de objetos del documento, o sea, corresponde toda la estructura html del documento.
* Es una API que se utiliza a través de javascript (Application Programming Interfaces / interfaz de programación de aplicaciones
-> permitiendo la comunicación entre dos aplicaciones de software a través de un conjunto de reglas).
* El DOM se representa en forma de árbol, cual despliega un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos de las páginas web y las relaciones entre ellos.

<div align="center">
  <img src="./img/nodos.png">
  <small><p>DOM y Árbol de nodos</p></small>
</div>

**NODOS**

Cada parte del árbol del documento es un NODO. Hay varios tipos de nodos, y los más utilizados son:
* Element node - corresponde a cualquier etiqueta HTML, y es el número 1 (al realizar una consulta para determinar el tipo de nodo devuelve el dicho número).
* Text node - corresponde al contenido de la etiqueta, y es el número 3.
* Comment node - corresponde a cualquier comentario en HTML, y es el número 8.

Desde la consola del navegador, utilizamos $0 para seleccionar los elementos que tenemos en nuestro HTML. Al usar $0 se despliega un sin fin de contenido, al cual podemos acceder, como por ejemplo, con $0.nodeType al tipo de NODO.

<div align="center">
  <img src="./img/nodo.png">
  <small><p>Accediendo a los nodos</p></small>
</div>

Utilizar el $0 para desplegar las opciones o propiedades, en la práctica es muy utilizada para buscar a lo que queremos acceder desde nuestro código de javascript, puesto que es imposible memorizar todas las opciones.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## DOM - Acceder a elementos/nodos

Formas clásicas de acceder:

1.- Acceder a un elemento a través de su id
```javascript
document.getElementById('id')
```

2.- Acceder al primer elemento que coincida con el selector de CSS
```javascript
document.querySelector('selectorCSS')
element.querySelector('selectorCSS')
```

3.- Acceder a todos los elementos que coincidan con el selector de CSS, devolviendo un nodeList
```javascript
document.querySelectorAll('selectorCSS')
```

Ejemplo:

```javascript
const title = document.getElementById('title');
title.textContent = 'Nuevo titulo, modificado desde JS'
```
* Los elementos siempre se guardan en una constante, puesto que no van a cambiar.
* El parámetro (id) es un string, por ello debe ir entre comillas.
* Modificamos el HTML a través de la propiedad textContent. **Para revisar las propiedades accedemos desde la consola con $0.

Ejemplo:

```javascript
const imagen = document.querySelector('.img-banner');
```
* Podemos acceder a cualquier selector de CSS, por ejemplo: 1) selector de tipo `input`; 2) selector de clase `.classname`; 3) selector de id `#idname`; 4) selector de atributo `[attr^=value]`.

Ejemplo:
```javascript
const titulo = document.querySelector('h2');
titulo[0].style.color = 'red'
```
En este ejemplo aplicamos CSS directamente en línea. Solo es un ejemplo de lo que podemos hacer, pero no es para nada recomendable.

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Atributos desde Javascript

En este punto aprenderemos a como editar los atributos y/o clases en el DOM.

**Atributos**

* `element.getAttribute('attribute')`
* `element.getAttribute('attribute', value)`



<!-- ## Recursos Complementarios
* [Diapositivas del Curso](docs/la-historia-de-jquery.pdf)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div> -->

## Enlaces de Interés
* [Curso de Javascript desde 0 - Dorian Desings](https://www.youtube.com/playlist?list=PLROIqh_5RZeBAnmi0rqLkyZIAVmT5lZxG)

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>