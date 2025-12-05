import React from 'react'
import { createRoot } from 'react-dom/client';
import './styles.css';

const AnotherComponent:React.FC = () => {
  return (
    <div>
        <h1>Another Component</h1>
        <p>This is another component</p>
    </div>
  )
}

const container = document.getElementById("root");;
if (container) {
    const root = createRoot(container);
    root.render(<AnotherComponent/>);
}