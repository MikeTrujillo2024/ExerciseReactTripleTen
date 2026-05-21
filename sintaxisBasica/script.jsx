const isRegistered = false;

ReactDOM.render((
  <div>
    {!isRegistered ? (
    <h2>¡Bienvenido!</h2>
    ): (
		<h2>¡Nos alegra mucho verte de nuevo!</h2>  
      
    )}
  </div>
), document.querySelector('#root'));

ReactDOM.render((
  <div>
    <div className="item">Cuadrado</div>
    <div className="item" style={{borderRadius: '50%'}}>Circulo</div>
  </div>
), document.querySelector('#estiloscss'))
ReactDOM.render((
  <>
    <h2>La educación es la luz,</h2>
  <h3>la ignorancia la oscuridad</h3>
  </>
), document.querySelector('#fragmentos'))