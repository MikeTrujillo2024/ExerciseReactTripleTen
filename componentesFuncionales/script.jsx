/*ejercicio1
basicamente es hacer que la clase jiraffe que se ecuentra en index.html se pase a um compoenente funcional
*/
function Giraffe() {
  return (
    <div className="giraffe">
      <div className="icon">🦒</div>
      <div className="info">
        <h3>Giraffe</h3>
        <span>Altura: 5.2 metros</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>África</h2>
    <Giraffe />
  </>
), document.querySelector('#root'));

/**
 * ejercicio 2
 * 
 */

function Hedgehog(){
  return(
    <div className="hedgehog">
      <div className="icon">🦔</div>
      <div className="info">
        <h3>Erizo</h3>
        <span>Altura: 15.2 centímetros</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
  <h2>África 2</h2>
  <Giraffe />
  <Hedgehog />
  </>
), document.querySelector("#hedgeho"))

/**
 * Ejercicio 3
 */

// CAMBIAMOS ESTE NOMBRE POR ALGO MAS GENERAL "ANIMAL"

function Animal(props) {
  return (
    <div className="animal">
      <div className="icon">{props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>Height: {props.height}</span>
      </div>
    </div>
  );
}

ReactDOM.render((
  <>
    <h2>Cambianmos el nombre de Skunk Por el de Animal</h2>
    <br />
   <h2>África 2</h2>
  <Animal icon="🦒"name="Giraffe"  height="Altura: 5.2 metros" />
  <Animal icon="🦔" name="Erizo" height="Altura: 15.2 centímetros"/>
  <Animal icon="🦨"name="Skunk"  height="Demasiado maloliente para medirlo"/>

  </>
),document.querySelector("#changeName"))

/**
 * Ejercicio 4
 * basicamente debemos decir cuales animales son los que estan durmiendo en este momento
 * --primero debemos obtener la hora actual
 * --Comprobar si es de noche o de dia
 * --dependiedo de la hora del día los diferentes animales deben estar dormidos o despiertos
 */ 

function AnimalDormir(props){
  //obtenemos la hora actual
  const hours = new Date().getHours();

  // comprobamos si es de noche
const isNight = hours > 19 || hours < 6;

//dependiendo de la hora del día, los diferentes animales deben de estar dormidos o despiertos
  const isSleeping = (isNight && !props.isNocturnal) || (!isNight && props.isNocturnal);

	
	  return (
	    <div className="animal">
	      <div className="icon">{isSleeping ?  "💤":  props.icon }</div>
	      <div className="info">
	        <h3>{props.name}</h3>
	        <span>Altura: {props.height}</span>
	      </div>
	    </div>
	  );
	}
	
	ReactDOM.render((
	  <>
	    <h2>Africa</h2>
      <span>Debemos de saber si el animal duerme como de dia o noche</span>
	    <AnimalDormir icon="🦒" name="Jirafa" height="5.2 metros" isNocturnal = {true} />
	    <AnimalDormir icon="🦔" name="Erizo" height="15.2 centímetros" isNocturnal = {false} />
	    <AnimalDormir icon="🦨" name="Zorrillo" height="Demasiado maloliente para medirlo" isNocturnal = {true} />
	  </>
	), document.querySelector('#isSleeping'));