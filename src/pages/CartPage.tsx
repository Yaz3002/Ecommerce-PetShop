
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, Check } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0 && newQuantity <= 10) {
      updateCartItem(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setPurchaseComplete(true);
      
      // Clear the cart after successful purchase
      clearCart();
      
      // Redirect after showing success message
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }, 2000);
  };

  if (purchaseComplete) {
    return (
      <Layout>
        <div className="max-w-md mx-auto my-16 text-center">
          <Alert className="bg-green-50 border-green-200 mb-6">
            <Check className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800 mb-2">¡Compra realizada con éxito!</AlertTitle>
            <AlertDescription className="text-green-700">
              Gracias por tu compra. Hemos enviado un correo electrónico de confirmación con los detalles de tu pedido.
            </AlertDescription>
          </Alert>
          <p className="text-gray-600 mb-8">
            Serás redirigido a la página principal en unos segundos...
          </p>
          <Button asChild>
            <Link to="/">Volver a la tienda</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-md mx-auto py-16 text-center">
          <h1 className="text-2xl font-medium mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-500 mb-8">
            Aún no has añadido productos a tu carrito.
          </p>
          <Button asChild>
            <Link to="/">Continuar comprando</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-8 pb-2 border-b">Tu carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-white border-gray-100">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-gray-600 text-sm font-medium">
                <div className="col-span-6">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <CardContent className="p-0">
                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.size}-${item.color}`} 
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center"
                  >
                    {/* Product */}
                    <div className="col-span-1 md:col-span-6">
                      <div className="flex items-center space-x-4">
                        {/* Image */}
                        <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Name and details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-800 truncate">
                            <Link
                              to={`/product/${item.product.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500 capitalize">
                            {item.color}, Talla: {item.size}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 text-xs flex items-center mt-1 hover:underline"
                          >
                            <Trash2 size={14} className="mr-1" />
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 md:col-span-2 text-center">
                      <div className="md:hidden inline-block mr-2 text-gray-500 text-sm">Precio:</div>
                      {formatPrice(item.product.price)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity, -1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity, 1)}
                          disabled={item.quantity >= 10}
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-1 md:col-span-2 text-right font-medium">
                      <div className="md:hidden inline-block mr-2 text-gray-500 text-sm">Total:</div>
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Actions */}
              <CardFooter className="flex justify-between py-4 px-4 bg-gray-50">
                <Button variant="ghost" asChild className="text-gray-600">
                  <Link to="/">
                    <span className="underline">Continuar comprando</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  disabled={isProcessing}
                  className="border-red-300 text-red-500 hover:bg-red-50"
                >
                  Vaciar carrito
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-gray-100 overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4 pb-2 border-b border-gray-100">Resumen</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(getCartTotal())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="text-gray-600">Calculado en el checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IGV (18%)</span>
                    <span className="text-gray-600">Incluido</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>{formatPrice(getCartTotal())}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-6"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center">
                      <span className="animate-pulse">Procesando...</span>
                    </span>
                  ) : (
                    <>
                      Finalizar compra <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Al continuar, aceptas nuestros términos y condiciones de compra.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
