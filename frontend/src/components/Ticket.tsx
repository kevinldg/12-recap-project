export default function Ticket({id, description, status}: {id: string; description: string; status: string;}) {
    return (
        <div className="border-b-black border p-2 w-fit rounded-sm">
            <p className="font-semibold">{id ?? "NO_ID_FOUND"} - {status ?? "NO_STATUS_FOUND"}</p>
            <p>{description ?? "NO_DESCRIPTION_FOUND"}</p>
        </div>
    );
}