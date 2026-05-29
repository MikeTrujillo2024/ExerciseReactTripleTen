/* import React from "react"; */

function App() {
  const [isCustomCursor, setIsCustomCursor] = React.useState();


  function handleChange() {
    setIsCustomCursor(!isCustomCursor);

  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        — Habilitar el cursor neon
      </label>
      {isCustomCursor && <NeonCursor />}
    </>
  );
}

function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.classList.add('no-cursor');

    return () => {
      document.documentElement.classList.remove('no-cursor');
      document.removeEventListener("mousemove",handleMouseMove);
    }
  });
  

  function handleMouseMove(e) {
    setPosition({
      top: e.pageY,
      left: e.pageX
    });
  }

  return (
      <img
        src="https://practicum-content.s3.us-west-1.amazonaws.com/web-code/react/moved_cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          pointerEvents: 'none',
        }}
      />
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

/* class NeonCursor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { top: 0, left: 0 };
  }


  handleMouseMove = (e) => {
    this.setState({
      top: e.pageY,
      left: e.pageX,
    });
  };

  render() {
    return (
      <img
        src="https://practicum-content.s3.us-west-1.amazonaws.com/web-code/react/moved_cursor.svg"
        width={30}
        style={{
          position: 'absolute',
          top: this.state.top,
          left: this.state.left,
          pointerEvents: 'none',
        }}
      />
    );
  }
} */

