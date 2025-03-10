import { Outlet } from 'react-router-dom'

import Header from '@/components/Layout/Header/ManageHeader'
import AdminSidebar from '@/components/Layout/Sidebar'

import { Layout } from 'antd'

const { Content } = Layout

const AdminLayout = () => {
  return (
    <Layout className="min-h-screen bg-white">
      <Header />
      <Layout className="bg-white">
        <AdminSidebar />
        <Content className="p-4 lg:p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
