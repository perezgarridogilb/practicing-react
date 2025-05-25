import { useState, useEffect } from 'react';

export default function Welcome(props) {
    const [counter, setCounter] = useState(0);
    const [sumaSemaforo, setSemaforo] = useState(false);
    const { message, name } = props;

useEffect(() => {
  console.log('efectos');
}, [sumaSemaforo]);



    const contar = () => {
        console.log();
        setCounter(counter + 1);
        setSemaforo(!sumaSemaforo)
    }
    // return <p>Hola, desde Welcome</p>
    return (<div>
         <p>Hola, desde Welcome {name}</p>
          <p>{message}</p>
          <h2>contador react con hooks es {counter}</h2>
<button type="submit" onClick={() => setCounter(counter + 1)}>Sumar</button>
<button type="submit" onClick={contar}>Contar 2</button>
<p>color: {sumaSemaforo ? 'red': 'green'}</p>
        </div>
        )
}