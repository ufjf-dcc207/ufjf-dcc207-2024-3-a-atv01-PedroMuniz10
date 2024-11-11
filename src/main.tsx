import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.tsx'   // Componente de aplicação

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
