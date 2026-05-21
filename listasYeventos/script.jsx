//Ejercicio 1
//**
// Datos para la lista

const list = [{
  id: 1,
  name: 'Pan',
  quantity: '1 rebanada',
}, {
  id: 2,
  name: 'Ron',
  quantity: '3 botellas',
}, {
  id: 3,
  name: 'Coca-cola',
  quantity: '3 botellas',
}, {
  id: 4,
  name: 'Papel higiénico',
  quantity: 'Tanto como sea humanamente posible',
}];


ReactDOM.render((
  <>
    <h2>Listas</h2>
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <b>{item.name}</b>
          <i>{item.quantity}</i>
        </li>
      ))}
    </ul>
  </>
), document.querySelector('#root'));


/**
 * ejercicio 2
 * **
 */
function handleKeyUp(e) {
  document.getElementById('title').innerText = e.target.value;
}

function handleClick(e) {
  document.getElementById('title').innerText += ' ' + e.target.textContent;
}

function handleMouseEnter(e) {
  e.target.classList.add('hover');
}

function handleMouseLeave(e) {
  e.target.classList.remove('hover');
}

function handleMouseDown(e) {
  e.target.classList.add('active');
}

function handleMouseUp(e) {
  e.target.classList.remove('active');
}

ReactDOM.render((
  <div>
    <h2>EVENTOS</h2>
    <input onKeyUp={handleKeyUp} type="text" />
    <button
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onClick={handleClick}>🤩</button>
    <button
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onClick={handleClick}>🤯</button>
    <button
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onClick={handleClick}>🤪</button>
  </div>
), document.querySelector('#eventos'));