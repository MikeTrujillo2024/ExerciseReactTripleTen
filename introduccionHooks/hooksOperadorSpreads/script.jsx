function GoodDeeds() {
	/* crea un hook para la variable deeds  */
	const [deeds, setDeeds] = React.useState([])
	function handleAddTask(e) {
		const input = e.target.previousSibling;
		/* aquí pasarás al setter un array con un nuevo elemento desde input.value  */

		setDeeds([...deeds, input.value])
		input.value = '';
	}

	return (
		<>
			<h3>Mis buenas acciones</h3>
			<input type="text" />
			<button onClick={handleAddTask}>+</button>
			<ul>
				{deeds.map((deed, i) => (
					<li key={i}>{deed}</li>
				))}
			</ul>
		</>
	);
}

ReactDOM.render((
	<GoodDeeds />
), document.querySelector('#root'));