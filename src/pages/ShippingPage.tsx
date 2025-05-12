
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Package, CreditCard } from "lucide-react";

const ShippingPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="relative h-80 md:h-96 bg-pastel-blue rounded-2xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Envíos y Entregas
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Conoce toda la información sobre nuestras políticas de envío y tiempos de entrega para Perú.
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Información de Envíos</h2>
            <p className="text-gray-600 mb-10">
              En Purrfect Paws nos aseguramos de que tus productos lleguen en perfecto estado y en el menor tiempo posible. 
              Trabajamos con los mejores servicios de courier para garantizar la entrega segura de tus compras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">Costos de envío</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lima Metropolitana: S/ 10.00</li>
                    <li>• Provincia: S/ 20.00</li>
                    <li>• Envío GRATIS en Lima para compras mayores a S/ 150.00</li>
                    <li>• Envío GRATIS a nivel nacional para compras mayores a S/ 250.00</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">Tiempos de entrega</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lima Metropolitana: 1 - 2 días hábiles</li>
                    <li>• Principales ciudades: 2 - 3 días hábiles</li>
                    <li>• Resto del país: 3 - 5 días hábiles</li>
                    <li>• Los pedidos realizados después de las 3pm se procesarán al día siguiente</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6">Cómo funciona nuestro proceso</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">Proceso de compra</h3>
                  </div>
                  <ol className="space-y-2 text-gray-600 list-decimal pl-5">
                    <li>Selecciona los productos que deseas comprar</li>
                    <li>Agrega los productos a tu carrito</li>
                    <li>Procede al checkout e ingresa tus datos de envío</li>
                    <li>Selecciona tu método de pago preferido</li>
                    <li>Confirma tu pedido</li>
                    <li>Recibirás un correo de confirmación con los detalles de tu compra</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">Seguimiento de pedidos</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Una vez que tu pedido sea despachado, recibirás un correo electrónico con la información de seguimiento para que puedas rastrear tu paquete en tiempo real.
                  </p>
                  <p className="text-gray-600">
                    También puedes verificar el estado de tu pedido iniciando sesión en tu cuenta y visitando la sección "Mis pedidos".
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-pastel-yellow/20 p-6 rounded-xl mb-12">
              <h3 className="font-medium text-lg mb-3">Consideraciones importantes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Los tiempos de entrega son aproximados y pueden variar según la disponibilidad del courier.</li>
                <li>• El seguimiento online puede tardar hasta 24 horas en actualizarse.</li>
                <li>• En caso de no encontrar a nadie en la dirección indicada, el courier intentará una segunda entrega.</li>
                <li>• Para cambios de dirección, contacta con nuestro equipo dentro de las primeras 12 horas después de realizar tu pedido.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShippingPage;
