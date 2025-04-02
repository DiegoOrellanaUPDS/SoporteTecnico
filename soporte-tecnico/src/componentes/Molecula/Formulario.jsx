import { Boton } from "../atomos/Boton";
import { Input } from "../atomos/Input";
import { TxtTitulo } from "../atomos/TxtTitulo";

export function Formulario({ titulo, inputs, onSubmit }) {
  return (
    <>
      <TxtTitulo>{titulo}</TxtTitulo>
      {inputs.map(({ placeholder, value, onChange }, index) => (
        <Input
          key={index}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ))}
      <Boton onClick={onSubmit}>Crear</Boton>
    </>
  );
}
