import {useEffect, useState} from "react";
import axios from "axios";
import Ticket from "../components/Ticket.tsx";

export default function TicketPage() {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = () => {
        axios.get("/api/todo")
            .then(response => {setTickets(response.data)})
            .catch(error => {console.error("Error fetching tickets", error)});
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <div className="p-4 flex flex-col gap-2">
            {
                tickets.map((ticket: {id: string; description: string; status: string;}) => (
                    <Ticket key={ticket.id} id={ticket.id} description={ticket.description} status={ticket.status} />
                ))
            }
        </div>
    );
}