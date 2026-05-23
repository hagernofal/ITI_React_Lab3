import { Link, useLoaderData } from 'react-router-dom'; 
import useThemeStore from '../../store/useThemeStore'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductDetails = () => {
    const product = useLoaderData();
    const { theme } = useThemeStore();
    const dispatch = useDispatch();

    if (!product) {
        return (
            <div className={`text-center p-8 border rounded-2xl max-w-md mx-auto transition-colors ${
                theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
            }`}>
                <p className="text-red-500 font-semibold">Sorry, this product was not found!</p>
                <Link to="/" className="text-indigo-600 underline mt-4 block"> Back to Home</Link>
            </div>
        );
    }

    return (
        <div className={`border rounded-2xl p-8 max-w-md mx-auto shadow-sm space-y-6 transition-colors ${
            theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
        }`}>
            
            {product.images && product.images[0] && (
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-64 object-cover rounded-xl"
                />
            )}

            <div className="space-y-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md uppercase border ${
                    theme === 'dark'
                        ? 'bg-indigo-950/50 text-indigo-400 border-indigo-900'
                        : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                }`}>
                    {typeof product.category === 'object' ? product.category.name : product.category}
                </span>

                <h2 className={`text-2xl font-bold mt-2 transition-colors ${
                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                }`}>
                    {product.title}
                </h2>
                
                <p className="text-indigo-600 font-extrabold text-2xl pt-1">
                    {product.price} EGP
                </p>
            </div>

            <p className={`text-sm leading-relaxed border-t pt-4 transition-colors ${
                theme === 'dark' ? 'text-gray-400 border-gray-800' : 'text-gray-600 border-gray-100'
            }`}>
                {product.description}
            </p>

            <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-3 px-4 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
                Add to Cart 🛒
            </button>

            <div className={`pt-4 border-t text-center ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;