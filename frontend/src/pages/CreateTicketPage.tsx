import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function CreateTicketPage() {
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        axios.post("/api/todo", {description: description, status: "OPEN"})
            .then(() => {navigate("/tickets")})
            .catch(error => {console.error("Error fetching data: ", error)})
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-fit">
                <input type="text" name="description" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} className="border-black border px-1" />
                <button type="submit" className="bg-blue-500 text-white">Create</button>
            </form>
        </div>
    );
}