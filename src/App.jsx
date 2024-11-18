import { Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import Products from "./pages/Products/Products"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import HookForm from "./pages/HookForm/HookForm"
import ReactForm from "./pages/ReactForm/ReactForm"
import FetchDataWithAxios from "./pages/FetchDataWithAxios/FetchDataWithAxios"

 function App() {

  return (
    <>
     <UserProvider>
        <Routes>
          <Route path="/"  element={<Products />}/>
          <Route path="/products/:slug" element={<ProductDetail />}/>
          <Route path="/hookform" element={<HookForm />}/>
          <Route path="/reactform" element={<ReactForm />}/>
          <Route path="/axios" element={<FetchDataWithAxios />}/>
          <Route path="*" element={<h4>Not Found Page</h4>}></Route>
        </Routes>
     </UserProvider>
    </>
  )
}

export default App
