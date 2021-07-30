import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

const Header = () => {
    return (
        <header>
        {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                  <Image 
                      src="https://links.papareact.com/f90"
                      width={150}
                      height={40}
                      objectFit="contain"
                      className="cursor-pointer"
                  />
                </div>
                {/* Search bar*/}
                <div className="hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right content*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="cursor-pointer link">
                        <p>Hello Prakash Patil</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative cursor-pointer link flex items-center">
                       <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
            <p className="cursor-pointer link flex items-center">
            <MenuIcon className="h-6 mr-1"/>
            All</p>
            <p className="cursor-pointer link">Prime Video</p>
            <p className="cursor-pointer link">Amazon Business</p>
            <p className="cursor-pointer link">Today's Deal</p>
            <p className="cursor-pointer link hidden lg:flex">Food & Grocery</p>
            <p className="cursor-pointer link hidden lg:flex">Prime</p>
            <p className="cursor-pointer link hidden lg:flex">Buy Again</p>
            <p className="cursor-pointer link hidden lg:flex">Shopper Toolkit</p>
            <p className="cursor-pointer link hidden lg:flex">Health & Personal Care</p>

            </div>
        </header>
    )
}

export default Header;