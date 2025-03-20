import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle.style";
import { Home } from "./pages/home";

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
