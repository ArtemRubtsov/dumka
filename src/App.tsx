import './App.css'
import { Container } from './components/Container/Container'
import { Quote } from './components/Quote/Quote';
import './i18n';
import { Input } from '@rubtsov/ui-components-react';
import '@rubtsov/ui-components-react/dist/style.css'

function App() {


  return (
    <Container>
      <Input variant='default' />
      <Quote />
    </Container>
  )
}

export default App
