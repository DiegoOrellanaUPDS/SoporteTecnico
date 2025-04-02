export function Input({ children, value, onChange }) {
  return (
    <>
      <input value={value} onChange={onChange} placeholder={children}></input>
    </>
  );
}
