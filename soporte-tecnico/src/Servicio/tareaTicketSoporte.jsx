const URL = "https://localhost:7079/api/TicketAtencionesTecnicas/Crear";

export async function fetchTicketServicio(ticketData) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticketData), 
        });

        const text = await response.text();
        const data = text ? JSON.parse(text) : null;

        if (response.ok) {
            alert("Guardado exitosamente");
            return data;
        } else {
            alert(data?.message || "Error al guardar");
            return null;
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return null;
    }
}