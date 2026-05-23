import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { removeFromCart } from '../../store/cartSlice'; 
import useThemeStore from '../../store/useThemeStore';
import { useLanguage } from '../../context/useLanguage';
const Cart = () => {
    const { theme } = useThemeStore();
    const dispatch = useDispatch();
    const { language } = useLanguage();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className={`mt-8 space-y-6 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-950'}`}>
            <h1 className="text-3xl font-bold text-center">{language === 'en' ? 'Your Shopping Cart' : 'سلة التسوق الخاصة بك'}</h1>
            
            {cartItems.length === 0 ? (
                <div className="text-center space-y-4">
                    <p className={`text-center mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {language === 'en' ? 'Your cart is currently empty!' : '! سلة التسوق الخاصة بك فارغة حالياً'}
                    </p>
                    <div className="text-center mt-6">
                        <Link 
                            to="/" 
                            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-colors"
                        >
                            {language === 'en' ? 'Continue Shopping' : 'متابعة التسوق'}
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="space-y-4 max-w-2xl mx-auto">
                    {cartItems.map((item, index) => (
                        <div 
                            key={`${item.id}-${index}`} 
                            className={`flex justify-between items-center p-4 border rounded-xl transition-all ${
                                theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                {item.images && item.images[0] && (
                                    <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                                )}
                                <div>
                                    <h3 className="font-bold text-base">{item.title || item.name}</h3>
                                    <p className="text-indigo-600 font-semibold text-sm">{item.price} EGP</p>
                                </div>
                            </div>

                            <button
                                onClick={() => dispatch(removeFromCart(index))}
                                className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                            >
                                {language === 'en' ? 'Remove 🗑️' : 'إزالة 🗑️'}
                            </button>
                        </div>
                    ))}

                    <div className="text-center pt-6">
                        <Link to="/" className="text-indigo-600 font-medium hover:underline">
                            {language === 'en' ? '← Back to Home to add more products' : '← العودة إلى الصفحة الرئيسية لإضافة المزيد من المنتجات'}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;