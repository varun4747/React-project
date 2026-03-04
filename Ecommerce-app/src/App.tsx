import {Routes,Route} from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import PaginationBasic from "./pages/Paginantion";


function App() {
  return (
    <>
      <div>
        <div >
          <NavBar />
         <Routes>
           <Route path="home" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="registration" element={<RegistrationForm />} />
           <Route path="loginform" element={<LoginForm />} />
           <Route path="pagination" element={<PaginationBasic />} />
           
         </Routes>
          <Footer />

        </div>
      </div>
    </>
  );
}
export default App;