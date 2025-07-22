import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./router/AppRoutes"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
