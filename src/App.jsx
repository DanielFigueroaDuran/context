import './App.css'
import Context from './components/context/Context'
import Input from './components/ejercicio1/Input'
import Text from './components/ejercicio1/Text'
import Form from './components/ejercicio2/Form'
import FormRef from './components/form_Ref/FormRef'
import Bank from './components/transaccion/Bank'

function App() {


    return (

        <Context>
            {/* <Input />
            <Text />
            <Form /> */}
            {/* <FormRef /> */}
            <Bank />
        </Context>

    )
}

export default App
