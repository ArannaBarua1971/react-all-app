function Nav (){

    return (
        <nav className="p-[15px] flex justify-between items-center flex-wrap bg-black text-white">
            <ul className="navigation flex ms-3">
                <li><a href="" className="mx-3 font-semibold">Home</a></li>
                <li><a href="" className="mx-3 font-semibold">Game Store</a></li>
                <li><a href="" className="mx-3 font-semibold">News</a></li>
            </ul>

            <ul className="flex items-center">
                <li><a href="" className="mx-3 font-semibold">My Cart</a></li>
                <li>
                    <img className="w-[40px] h-[40px] rounded-full" src="./images/user.jpeg" alt="user" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav