import { FaMagnifyingGlass } from "react-icons/fa6"

const SearchBanner = ({ setSearchValue }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(e.target.search.value)
        e.target.search.value = ""
    }

    return (
        <div className="h-[300px] bg-dark flex flex-col items-center justify-center gap-6">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold">Find Your <span className="text-primary">Favorite</span> Products</h2>
            <form onSubmit={handleSubmit} className="hidden md:flex items-center bg-white w-[400px] pr-2 rounded-md">
                <input type="search" name="search" className='w-full py-2 focus:outline-none pl-2 rounded-md' placeholder="Type Your Favorite Products" />
                <button type='submit'><FaMagnifyingGlass /></button>
            </form>
        </div>
    )
}

export default SearchBanner