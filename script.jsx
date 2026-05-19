/**
 * Ejercicio 1
 * colocamos esta estructura html dentro de render para que sea mostrado por jsx en html
 * **/

ReactDOM.render(
  (

    <div>
      <h2>Datos inquietantes sobre los animales</h2>
      <p>
        Los elefantes recién nacidos son incapaces de controlar su trompa.
      </p>
      <p>
        Además, las cebras no pueden dormir solas.
      </p>
      <p>
        Y las sanguijuelas tienen 32 cerebros.
      </p>
    </div>
  ),
  document.querySelector('#root'),
);

/**
 * Ejercicio2
 * 
 * Teniendo en cuenta el siguienta array debmos de colocar los elementos de manera correcta en las oraciones
 */

const animals = ['cebras', 'sanguijuelas', 'elefantes'];

ReactDOM.render((
  <div>
    <h2>Datos inquietantes sobre los animales</h2>
    <p> 
      Los {animals[2]} recién nacidos son incapaces de controlar sus trompas.
    </p>
    <p>
      Además, {animals[0]}  no pueden dormir solas.
    </p>
    <p>
      Y {animals[1]}  tienen 32 cerebros.
    </p>
  </div>
), document.querySelector('#root'));