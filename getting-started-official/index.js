// Create an element with the current date
class Clock extends React.Component {
  constructor(param) {
    super(param)
    this.state = { date: new Date() };
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}</h2 >
  }
}

function tick() {
  const element = (
    <div>
      <Welcome name="Dermus" />
      <Clock />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

function Welcome(props) {
  return <h1>Sup, {props.name}</h1>;
}

// Display the element with the current date each second
setInterval(tick, 1000);
