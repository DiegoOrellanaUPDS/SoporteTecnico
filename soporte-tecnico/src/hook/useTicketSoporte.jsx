import { useEffect, useState } from "react";
import { fetchTicketServicio } from "../Servicio/tareaTicketSoporte";

export function useTicketSoporte(ticketData) {
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!ticketData) return; // Evita hacer la petición sin datos

        const postTicketServicio = async () => {
            setLoading(true);
            try {
                const data = await fetchTicketServicio(ticketData);
                setTicket(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        postTicketServicio();
    }, [ticketData]); // Se ejecuta cuando `ticketData` cambia

    return { ticket, loading, error };
}