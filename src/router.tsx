import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle.style";
import { Home } from "./pages/home";
import { SubjectLayout } from "./components/subjectLayout";

export const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/layout" element={<SubjectLayout />}/>
            </Routes>
        </BrowserRouter>
    )
}
