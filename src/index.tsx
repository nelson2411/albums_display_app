import * as React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"
import { App } from "./App"
import { AppRouter } from "./router/router"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <NextUIProvider>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </NextUIProvider>
)
