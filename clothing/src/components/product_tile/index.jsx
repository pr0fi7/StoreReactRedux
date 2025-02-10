import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart-slice";


export default function ProductTile({ product }){
    const dispatch = useDispatch();
    function handleAddToCart() {
      dispatch(addToCart(product));
    }
    return (
      <div className="group flex flex-col items-center border border-red-900 gap-3 p-4 h-96 mt-10 ml-5 rounded-xl">
        <div className="bg-white w-full h-full p-4 rounded-lg flex flex-col justify-between">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-1/2 object-contain" 
            />
          )}
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="font-bold text-lg truncate">{product.title}</h1>
            <p className="font-bold text-xl">${product.price}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  