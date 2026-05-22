import { useSearchParams, Link, useLoaderData } from 'react-router-dom';

const ProductsList = () => {
    const productsFromApi = useLoaderData() || [];

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
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
                {currentCategory ? `Currently Browsing: ${currentCategory}` : 'All Products'}
            </h1>

            <div className="flex gap-3">
                <button
                    onClick={() => handleFilter('all')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${!currentCategory ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilter('Fashion')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${currentCategory === 'Fashion' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                    Show Fashion
                </button>
                <button
                    onClick={() => handleFilter('Electronics')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${currentCategory === 'Electronics' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}   
                >
                    Show Electronics
                </button>
                <button
                    onClick={() => handleFilter('Furniture')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${currentCategory === 'Furniture' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}   
                >
                    Show Furniture
                </button>
                <button
                    onClick={() => handleFilter('nuevo')}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${currentCategory === 'nuevo' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
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
                            className="border p-5 rounded-2xl shadow-xs bg-white flex flex-col justify-between transition-all hover:shadow-md"
                        >
                            <div>
                                <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md uppercase border border-indigo-100">
                                    {displayCategory || 'General'}
                                </span>
                                <h3 className="text-lg font-bold mt-3 text-gray-800">{product.title || product.name}</h3>
                                <p className="text-indigo-600 font-bold mt-1 text-xl">{product.price} EGP</p>
                            </div>

                            <div className="mt-5 border-t pt-4">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="block text-center bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors"
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