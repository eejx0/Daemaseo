import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle.style";
import { Home } from "./pages/home";
import { Korean } from "./pages/subject/korean";
import { History } from "./pages/subject/history";
import { Math } from "./pages/subject/math";
import { Science } from "./pages/subject/science";
import { Introduce } from "./pages/introduce";

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/korean" element={<Korean />}/>
                <Route path="/history" element={<History />}/>
                <Route path="/math" element={<Math />}/>
                <Route path="/science" element={<Science/>}/>
                <Route path="/introduce" element={<Introduce />}/>
            </Routes>
        </BrowserRouter>
    )
}
