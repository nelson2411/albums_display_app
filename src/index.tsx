import * as React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
)
