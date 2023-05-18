import React from "react"
import useAction from "./AppHook"

import { Router } from "./router"

function App() {
  const { isLoaded } = useAction()

  return isLoaded ? <Router /> : <></>
}

export default App
