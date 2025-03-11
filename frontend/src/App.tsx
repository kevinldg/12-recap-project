import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.tsx";
import TicketPage from "./pages/TicketsPage.tsx";
import TicketIdPage from "./pages/TicketIdPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/tickets" element={<TicketPage/>}/>
                <Route path="/tickets/:id" element={<TicketIdPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}