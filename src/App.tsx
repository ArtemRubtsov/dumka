import './App.css'
import { Container } from './components/Container/Container'
import { Quote } from './components/Quote/Quote';
import './i18n';
import '@rubtsov/ui-components-react/dist/style.css'

function App() {


  return (
    <Container>
      <Quote />
    </Container>
  )
}

export default App
