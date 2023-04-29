import Header from "../../components/header"
import Side from "../../components/side"

import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <Side></Side>
        <Outlet />
      </div>
    </>
  )
}
export default Home
