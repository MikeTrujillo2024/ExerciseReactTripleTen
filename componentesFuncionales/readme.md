ejercicio1
**
Es hora de hablar de las jirafas. Todo este tiempo nos hemos resistido, pero no podemos aguantar más. Hasta ahora, esta jirafa ha sido HTML estándar. Mientras que casi todas sus amigas jirafas ya se han convertido en componentes, ésta (se llama Jeffrey) sigue de pie bajo los árboles masticando hojas.

Toma el asunto en tus manos y ayuda a Jeffrey a convertirse en un componente.

ejercicio 2
**
Los animales de África se han enterado de que les puedes ayudar a crear componentes. Parece que están empezando a hacer cola para que les ayudes.

El erizo Harry se ha metido dentro de ReactDOM.render() y está escarbando donde no debe. ¡Restablece el orden y ponlo en su propio componente Hedgehog!

ejercicio3
**

Hay mucho alboroto en la fila. Todo el mundo está charlando, chillando y ladrando, ¡y todos quieren que crees su propio componente! Esto es demasiado, ¿verdad? La navaja de Occam: "las entidades no deben multiplicarse sin necesidad". ¿Has oído hablar de esto?

En fin, tenemos una buena y una mala noticia.

La buena noticia: puedes hacer un componente general llamado Animal que toma las propiedades name, icon y height. Este componente tendrá en cuenta todos los casos (no olvides crear una clase CSS general).

Ahora, las malas noticias: el siguiente animal en la fila es un zorrillo.

Cambia el nombre del componente Skunk por el de Animal y utiliza las siguientes sustituciones dentro de él: props.name, props.icon y props.height. Utiliza este componente general en lugar de todos los demás componentes que representan animales específicos, pasando los valores necesarios de las propiedades.

ejercicio4
**
El sol se pone temprano en África, por lo que la mitad de los animales apenas empiezan a despertarse. ¡Adelante, mandemos a dormir a todos los animales diurnos!

Añadimos una propiedad booleana para nuestro componente Animal llamado isNocturnal. Junto con esta propiedad, utiliza las variables hours, isNight e isSleeping para hacer que se muestre el icono 💤 en lugar del icono del animal si se supone que dicho animal está durmiendo en ese momento.

Ya hemos creado la mayor parte de la lógica por ti, pero te toca unirlo todo. Así que si tienes sueño, tómate un café y ponte a ello.