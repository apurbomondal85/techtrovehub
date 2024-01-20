import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import UserSidebar from "./UserSidebar"
import SellerSidebar from "./SellerSidebar"
import AdminSidebar from "./AdminSidebar"


const DashboardSidebar = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const role = "user"

    return (
        <div className="">
            <button type="button" onClick={() => setSidebarToggle(true)} className="inline-flex items-center mt-8 ml-8 text-xl text-secondary md:hidden">
                <FaBars />
            </button>

            <aside className={`fixed top-0 left-0 z-[1] w-64 h-screen transform transition-all duration-300 ${sidebarToggle ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
                <div className="h-full pt-8 overflow-y-auto bg-dark">
                    <button type="button" onClick={() => setSidebarToggle(false)} className="text-xl text-primary absolute right-4 md:hidden">
                        <FaXmark />
                    </button>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-200 text-center mb-4">Dashboard</h1>
                    {
                        role === "user" ? <UserSidebar /> : role === "seller" ? <SellerSidebar /> : <AdminSidebar />
                    }
                </div>
            </aside>
        </div>
    )
}

export default DashboardSidebar