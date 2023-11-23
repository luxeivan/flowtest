
import { Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Statement from './components/Statement';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Statement/>
      </Container>
    </div>
  );
}

export default App;
