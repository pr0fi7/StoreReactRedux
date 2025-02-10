

export default function Header() {
    return (
        <div className="justify-between flex items-center p-4 bg-gray-800 text-white">
            <h1 className="text-white font-bold text-2xl cursor-pointer">REACT REDUX SHOPPING CART</h1>
            <div className="flex items-center">
                <a href="/" className="p-2">Home</a>
                <a href="/cart" className="p-2">Cart</a>
            </div>
        </div>
    )
}