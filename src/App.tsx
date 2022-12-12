import { Route, Routes } from "react-router-dom";
import { Cabinet } from "./components/cabinet/cabinet";

import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Accesorii } from "./pages/accesorii";
import { Cart } from "./pages/cart";
import { Electrocasnice } from "./pages/electrocasnice";
import { Gadjeturi } from "./pages/gadjeturi";
import { Home } from "./pages/home";
import { Laptopuri } from "./pages/laptopuri";
import { NotFound } from "./pages/notFound";
import { SingUp } from "./pages/signUp";
import { SingIn } from "./pages/singIn";
import { Smartfoane } from "./pages/smartfoane";
import { Tablete } from "./pages/tablete";
import { Televizoare } from "./pages/televizoare";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singIn" element={<SingIn />} />
        <Route path="/accesorii" element={<Accesorii />} />
        <Route path="/electrocasnice" element={<Electrocasnice />} />
        <Route path="/gadjeturi" element={<Gadjeturi />} />
        <Route path="/laptopuri" element={<Laptopuri />} />
        <Route path="/smartfoane" element={<Smartfoane />} />
        <Route path="/tablete" element={<Tablete />} />
        <Route path="/televizoare" element={<Televizoare />} />
        <Route path="/singIn" element={<SingIn />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
