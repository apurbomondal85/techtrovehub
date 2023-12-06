import { FaBars } from "react-icons/fa6"
import getAllCategory from "../../utiliz/getAllCategory"

const CategorySidebar = ({handleTabCategory}) => {
    const categorys = getAllCategory();


    return (
        <div className="relative mt-12">
            <button className="inline-flex items-center p-2 mt-2 ms-3 text-xl text-gray-500 rounded-lg md:hidden">
                <FaBars />
            </button>
            <aside className="absolute left-0 top-0 z-40 w-72 h-screen transition-transform -translate-x-full md:translate-x-0">
                <div className="h-full px-6 py-4 overflow-y-auto bg-gray-200 rounded-md flex flex-col items-start gap-4">
                    <h2 className="text-xl text-dark font-bold">All Category</h2>
                    {
                        categorys?.map(item => <button onClick={() => handleTabCategory(item.category)} key={item._id} className="w-full py-2 text-center font-semibold shadow-md bg-[#fff7f7] rounded-md">{item.category}</button>)
                    }
                </div>
            </aside>
        </div>
    )
}

export default CategorySidebar