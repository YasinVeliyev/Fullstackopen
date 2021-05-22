import logo from './logo.svg';
import './App.css';

function App(props) {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App;
