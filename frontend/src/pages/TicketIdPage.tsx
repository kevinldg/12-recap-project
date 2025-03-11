import {useEffect, useState} from "react";
import axios from "axios";
import Ticket from "../components/Ticket.tsx";
import {useNavigate, useParams} from "react-router-dom";

export default function TicketIdPage() {
    const [ticket, setTicket] = useState<{id: string; description: string; status: string;} | null>(null);
    const params = useParams();
    const id: string | undefined = params.id;
    const navigate = useNavigate();

    const fetchTicket = () => {
        axios.get(`/api/todo/${id}`)
            .then(response => {setTicket(response.data)})
            .catch(error => {console.error("Error fetching ticket", error)});
    };

    const deleteTicket = () => {
        axios.delete(`/api/todo/${id}`)
            .then(() => navigate("/tickets"))
            .catch(error => {console.error("Error deleting ticket", error)})
    }

    useEffect(() => {
        fetchTicket();
    }, []);

    return (
        <div className="p-4 flex flex-col gap-2">
            {ticket && <Ticket id={ticket.id} description={ticket.description} status={ticket.status} />}
            <button onClick={deleteTicket} className="bg-blue-500 text-white w-fit px-2">Delete</button>
        </div>
    );
}