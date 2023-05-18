import Header from "../../components/header"
import Side from "../../components/side"

import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content } from "antd/es/layout/layout"

import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <Layout className="w-screen overflow-hidden">
      <Header />
      <Content>
        <Layout>
          <Sider
            theme="light"
            style={{ backgroundColor: "#F5F5F5" }}
            width={170}
          >
            <Side />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
export default Home
