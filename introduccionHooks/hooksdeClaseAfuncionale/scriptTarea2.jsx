/* ----> este es un componente funcional<---- */

function Switch(props){
    const [isActive, setIsActive] = React.useState(false);

    function handleClick(){
        setIsActive(!isActive);
    }

    const className = `switch ${props.color} ${isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={handleClick} />
        <h3>{props.title}</h3>
      </div>
    );
}


ReactDOM.render((
  <Switch title="Happy" color="blue" isActive={false} />
), document.querySelector('#rootTarea2'));


/* 
----> este es un componente de clase<----
class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // estamos utilizando expresiones de JavaScript para crear nuestras clases de CSS
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <Switch title="Happy" color="blue" isActive={false} />
), document.querySelector('#root')); */