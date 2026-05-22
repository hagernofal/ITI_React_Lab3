
const Cart = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Your Shopping Cart</h1>
      <p className="text-center text-gray-600 mt-4">Your cart is currently empty.</p>
      <div className="text-center mt-6">
        <a href="/" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-colors">
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default Cart;