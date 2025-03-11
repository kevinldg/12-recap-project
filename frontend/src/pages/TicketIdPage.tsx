import {useEffect, useState} from "react";
import axios from "axios";
import Ticket from "../components/Ticket.tsx";
import {useParams} from "react-router-dom";

export default function TicketIdPage() {
    const [ticket, setTicket] = useState<{id: string; description: string; status: string;} | null>(null);
    const params = useParams();
    const id: string | undefined = params.id;

    const fetchTicket = () => {
        axios.get(`/api/todo/${id}`)
            .then(response => {setTicket(response.data)})
            .catch(error => {console.error("Error fetching ticket", error)});
    };

    useEffect(() => {
        fetchTicket();
    }, []);

    return (
        <div className="p-4">
            {ticket && <Ticket id={ticket.id} description={ticket.description} status={ticket.status} />}
        </div>
    );
}