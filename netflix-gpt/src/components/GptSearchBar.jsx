const GPTSearchBar = () => {
    return (
        <div className="pt-[15%] flex justify-center items-center">
            <form onSubmit={(e) => e.preventDefault()} className="text-white w-1/2 flex items-center">
                <input type="text" className="p-4 m-4 bg-white text-black rounded-md w-3/4" placeholder="What would you like to watch today?" />
                <button className="py-2 px-4 bg-red-600 rounded-md font-bold">Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;