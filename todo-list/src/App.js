import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask';

function App() {
  return (
    <Container>
      <Header />
      <InputTask></InputTask>
    </Container>
  );
}

export default App;
