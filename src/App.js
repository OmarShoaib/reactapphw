import './App.css';

function App(props) {
  let value1 = props.values[0];
  let value2 = props.values[1];
  return (
  <div className="main_div">
    Hey <strong>{props.name}</strong>
    <p>Learning React is fun!</p>
    <img alt="react_logo" src={'./images/react_logo.png' }/>
    <ul style={{listStylePosition: 'inside'}}>
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
    <span style={{fontWeight: 600}}>Mathematical Expression</span>
    <p>{value1} - {value2} = {value1 - value2}</p>
    </div>
    );
}

export default App;
