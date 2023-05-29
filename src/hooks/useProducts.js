import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://ema-john-simple-server-kappa.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            })
    }, []);


    return [products, setProducts];
}

export default useProducts;