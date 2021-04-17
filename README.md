# REACT-BASIC
Sprint 6. React I


En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React.

Començarem creant una web en react des de zero, incloent tots els passos necessaris, per a passar després ha crear els nostres primers components i fer ús de props.

# Nivell 1
## Exercici 1
![hello](https://user-images.githubusercontent.com/67639391/104574168-066e4c00-5656-11eb-8086-5ad4933396aa.jpeg)
## Exercici 2

En aquest exercici, crearem un component i l’importarem en el component principal App.

- Crear l'arxiu book.js.

-  Després copia aquest codi i completa’l perquè retorni el text “Viatge a la lluna”:



export default () => {

    ????

}



- Ara farem ús del component Book en App.js. Completa el component App.js:



import Book from './book'; 

export default () => { 

    return ( 

        <div> 

            ????

        </div> 

      );

};

![viatje](https://user-images.githubusercontent.com/67639391/104574172-079f7900-5656-11eb-9d7d-ad7c01f19065.jpeg)

# Nivell 2
## Exercici 3
En lloc de harcodear (escriure directament) el valor del component en el seu interior, li ho passarem com prop des del component App.

El resultat hauria de continuar sent el mateix. L’única cosa que canviarà serà la implementació del codi.

# Nivell 3
## Exercici 4
Llegirem els llibres que mostrarà la nostra aplicació des d’un fitxer JSON. Per això, importarem aquest fitxer en la nostra aplicació i ho recorrerem amb una estructura .map.

Aquest és el JSON amb el array de frases:



[ { "title": "Viatge a la lluna", "author": "Julio Verne" }, { "title": "El metge", "author": "Noah Gordon" } ]

![3](https://user-images.githubusercontent.com/67639391/104574188-0a9a6980-5656-11eb-91b7-575cd657ca4c.jpeg)
