import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
        </ChakraProvider>
    );
}

export default App;
