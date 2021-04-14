export default function DynamicComponent(name) {
  return (
    <button onClick={() => {
      myUndefinedFunction();
    }}>
      Click me
    </button>
  );
}
