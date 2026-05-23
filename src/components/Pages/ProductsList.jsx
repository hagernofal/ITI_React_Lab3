import { useSearchParams, Link, useLoaderData } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore'; 

const ProductsList = () => {
    const productsFromApi = useLoaderData() || [];
    const { theme } = useThemeStore(); 

    const [searchParams, setSearchParams] = useSearchParams();
    const currentCategory = searchParams.get('category');

    const filteredProducts = currentCategory
        ? productsFromApi.filter(product => {
            const categoryName = typeof product.category === 'object' ? product.category.name : product.category;
            return categoryName?.toLowerCase() === currentCategory.toLowerCase();
        })
        : productsFromApi;

    const handleFilter = (categoryName) => {
        if (categoryName === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryName);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="space-y-6">
            <h1 className={`text-3xl font-bold capitalize transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
                {currentCategory ? `Currently Browsing: ${currentCategory}` : 'All Products'}
            </h1>

            <div className="flex gap-3 flex-wrap">
                <button
                    onClick={() => handleFilter('all')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        !currentCategory 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : theme === 'dark' 
                                ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    All
                </button>
                
                <button
                    onClick={() => handleFilter('Fashion')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        currentCategory === 'Fashion' 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : theme === 'dark' 
                                ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    Show Fashion
                </button>

                <button
                    onClick={() => handleFilter('Electronics')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        currentCategory === 'Electronics' 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : theme === 'dark' 
                                ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`} 
                >
                    Show Electronics
                </button>

                <button
                    onClick={() => handleFilter('Furniture')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        currentCategory === 'Furniture' 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : theme === 'dark' 
                                ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`} 
                >
                    Show Furniture
                </button>

                <button
                    onClick={() => handleFilter('nuevo')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                        currentCategory === 'nuevo' 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : theme === 'dark' 
                                ? 'bg-gray-900 text-gray-200 border-gray-800 hover:bg-gray-800' 
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    Show Nuevo
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                    const displayCategory = typeof product.category === 'object' ? product.category.name : product.category;

                    return (
                        <div
                            key={product.id}
                            className={`border p-5 rounded-2xl shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                                theme === 'dark' 
                                    ? 'bg-gray-900 border-gray-800 text-white' 
                                    : 'bg-white border-gray-200 text-gray-800'
                            }`}
                        >
                            <div>
                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md uppercase border ${
                                    theme === 'dark'
                                        ? 'bg-indigo-950/50 text-indigo-400 border-indigo-900'
                                        : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                                }`}>
                                    {displayCategory || 'General'}
                                </span>
                                
                                <h3 className={`text-lg font-bold mt-3 ${
                                    theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                                }`}>
                                    {product.title || product.name}
                                </h3>
                                
                                <p className="text-indigo-600 font-bold mt-1 text-xl">{product.price} EGP</p>
                            </div>

                            <div className={`mt-5 border-t pt-4 ${
                                theme === 'dark' ? 'border-gray-800' : 'border-gray-100'
                            }`}>
                                <Link
                                    to={`/product/${product.id}`}
                                    className={`block text-center text-sm font-medium py-2.5 px-4 rounded-xl transition-colors ${
                                        theme === 'dark'
                                            ? 'bg-gray-800 hover:bg-gray-700 text-white'
                                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                                    }`}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsList;