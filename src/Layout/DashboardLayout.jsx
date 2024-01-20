import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar'

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout