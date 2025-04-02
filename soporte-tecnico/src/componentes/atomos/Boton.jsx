export function Boton({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
