import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'


import App from './App.tsx'
import Provider from './provider/povider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
)
