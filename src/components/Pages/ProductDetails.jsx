import { Link, useLoaderData } from 'react-router-dom'; 


const ProductDetails = () => {
    const product = useLoaderData();

    if (!product) {
        return (
            <div className="text-center p-8 bg-white border rounded-2xl max-w-md mx-auto">
                <p className="text-red-500 font-semibold">Sorry, this product was not found!</p>
                <Link to="/" className="text-indigo-600 underline mt-4 block"> Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-white border rounded-2xl p-8 max-w-md mx-auto shadow-sm space-y-6">
            
            {product.images && product.images[0] && (
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-full h-64 object-cover rounded-xl"
                />
            )}

            <div className="space-y-2">
                <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md uppercase border border-indigo-100">
                    {typeof product.category === 'object' ? product.category.name : product.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                    {product.title }
                </h2>
                
                <p className="text-indigo-600 font-extrabold text-2xl pt-1">
                    {product.price} EGP
                </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed border-t pt-4">
                {product.description}
            </p>

            <div className="pt-4 border-t text-center">
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