1____
Aviso: los ejercicios de esta unidad contienen sonido, así que asegúrate de usar auriculares o ajustar bien el volumen de tu sistema de sonido.

Siempre es importante controlar el tiempo. Por suerte, hay una manera práctica de hacerlo en React. Podemos llamar a nuestros efectos con un ligero retraso (delay), comenzando por el próximo frame de la animación.

Para ello, necesitaremos la función requestAnimationFrame(). Esta función acepta un callback. Es muy similar a setTimeout(), pero la diferencia entre ellas es que el mismo navegador asigna el retraso, normalmente sobre los 16ms.

Con esta función, podemos implementar un componente que muestra el tiempo sin utilizar temporizadores. Si cambias el estado en el efecto, el nuevo estado llamará tanto a una función de renderizado como a una de nuevo efecto (este efecto será recursivo). En este caso, el componente mostrará el tiempo correcto en cada frame subsecuente.

Si queremos agregar efectos adicionales, como un sonido de tictac cada segundo, los efectos con dependencias nos serán de gran ayuda. Pueden ser llamados solo cuando cierta variable cambia, por ejemplo, la responsable de los segundos.

Completa este código para que el efecto que reproduce el sonido no se detone constantemente, sino solo una vez por segundo.

En este ejercicio, se utilizan los métodos de la clase Date. Para completar este ejercicio, no necesitas estudiar en detalle cómo funcionan, pero si te interesa, puedes consultar esta documentación.