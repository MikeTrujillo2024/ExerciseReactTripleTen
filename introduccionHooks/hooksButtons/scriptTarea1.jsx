function Boxing() {
  /***
   * const[valor del estado actual, funcion setter] = nombre del hook
   */
 const [isKnockout ,setIsKnockout  ] = React.useState();


  function handleClick() {
    setIsKnockout(true);
  }

  return (
    <div>
      {!isKnockout ? (
        <>
          <span>🤨</span>
          <button onClick={handleClick}>¡Hook!</button>
        </>
      ) : (
        <span>🥴</span>
      )}
      <span>🥊</span>
    </div>
  );
}

ReactDOM.render((
  <Boxing />
), document.querySelector('#root'));