import './App.css'
import Context from './components/context/Context'
import Input from './components/ejercicio1/Input'
import Text from './components/ejercicio1/Text'
import Form from './components/ejercicio2/Form'

function App() {


    return (

        <Context>
            <Input />
            <Text />
            <Form />
        </Context>

    )
}

export default App
