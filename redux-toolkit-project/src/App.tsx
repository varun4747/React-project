import {Routes,Route} from 'react-router-dom'
import Counter from "./Counter"
import PagenateCom from "../../Ecommerce-app/src/compoents/PagenateCom"

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="" element={<Counter/>}/>
          <Route path="/pagenateCom" element={<PagenateCom/>}/>
        </Routes>
       </div>
    </>
  )
}

export default App
