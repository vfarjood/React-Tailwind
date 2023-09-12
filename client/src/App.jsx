import EmailSubscribe from './Pages/EmailSubscribe'
import Intro from './Pages/Intro'
import ProductModal from './Pages/ProductModal'
import Me from './Pages/Me'

export default function App() {
  const onSaveHandler = enteredData => {
    console.log(enteredData)
  }

  return (
    <>
      {/* <Intro /> */}
      {/* <EmailSubscribe /> */}
      {/* <ProductModal /> */}
      <Me onSave={onSaveHandler} />
    </>
  )
}
