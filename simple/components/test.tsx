export default function DynamicComponent(name: string): any {
  return (
    <button onClick={() => {
      throw new Error('TypeScript error in DynamicComponent');
    }}>
      Click me
    </button>
  );
}

