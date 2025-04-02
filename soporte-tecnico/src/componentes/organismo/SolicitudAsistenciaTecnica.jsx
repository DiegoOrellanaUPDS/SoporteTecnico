import { useState } from "react";
import { Formulario } from "../Molecula/Formulario";
import { useTicketSoporte } from "../../hook/useTicketSoporte";

export function SolicitudAsistenciaTecnica() {
  const [ciUsuario, setCiUsuario] = useState("");
  const [descripcionProblema, setDescripcionProblema] = useState("");
  const [submit, setSubmit] = useState(false);

  const { ticket, loading, error } = useTicketSoporte(
    submit
      ? {
          ciUsuario,
          descripcionProblema,
        }
      : null
  );

  const handleSubmit = () => {
    if (!ciUsuario.trim() || !descripcionProblema.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    setSubmit(true);
  };

  return (
    <>
      <Formulario
        titulo="Solicitar asistencia técnica"
        inputs={[
          { placeholder: "CI Usuario", value: ciUsuario, onChange: (e) => setCiUsuario(e.target.value) },
          { placeholder: "Descripción del Problema", value: descripcionProblema, onChange: (e) => setDescripcionProblema(e.target.value) },
        ]}
        onSubmit={handleSubmit}
      />

      {loading && <p>Enviando...</p>}
      {error && <p>Error: {error.message}</p>}
      {ticket && <p>Solicitud enviada correctamente.</p>}
    </>
  );
}