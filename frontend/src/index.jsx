import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Prompt from "./pages/prompt";

export default function Index() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/prompt" element={ <Prompt />} />
        </Routes>
    )
}
