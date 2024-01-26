import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ErrorPage } from "../pages/ErrorPage"
import { App } from "../App"
import { FavPage } from "../pages/FavPage"
import { AlbumPage } from "../pages/AlbumPage"

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/favorites">
          <FavPage />
        </Route>
        <Route path="/albums/:id">
          <AlbumPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}
