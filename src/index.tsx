import React, { lazy, Suspense } from 'react'
import {createRoot} from 'react-dom/client';

const ComponentA = lazy(()=> import('./components/ComponentA'));
const ComponentB = lazy(()=> import('./components/ComponentB'));

const App:React.FC = () => {
  return (
    <div>
        <h1>Webpack Code Splitting with Typescript</h1>
        <Suspense fallback={<div>Loading...</div>}>
        <ComponentA/>
        <ComponentB/>
        </Suspense>
    </div>
  )
}

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<App/>)
}