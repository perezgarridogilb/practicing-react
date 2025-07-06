import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { ButtonContent, Button, Icon } from 'semantic-ui-react'

function App() {
  return (<div>Creando nuestra aplicación de marvel
        <Button animated>
      <ButtonContent visible>Next</ButtonContent>
      <ButtonContent hidden>
        <Icon name='arrow right' />
      </ButtonContent>
    </Button>
  </div>
  );
}

export default App;
