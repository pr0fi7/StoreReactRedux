import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner"
import ProductTile from "../components/product_tile"

export default function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function fetchProducts() {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        if (data) {
            setLoading(false)
            setProducts(data)
            setError(null)
        } else {
            setLoading(false)
            setError('An error occurred')
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {
                loading ? 
                <div className="flex justify-center items-center h-screen">
                <Circles color="#000" size={50} />
                </div>
                : (
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {
                            products && products.length > 0 ? 
                            products.map(productItem => (
                                <ProductTile key={productItem.id} product={productItem} />
                            )): null
                        }
                    </div>
                )
            }
        </div>
    )
}