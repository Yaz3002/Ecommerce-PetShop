
import { Button } from "@/components/ui/button";

const SizingGuide = () => {
  return (
    <section className="py-10 bg-pastel-blue/20 -mx-6 sm:-mx-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 font-heading">¿Cómo elegir la talla correcta?</h3>
            <p className="text-gray-700 mb-6">
              Es importante medir a tu gato correctamente para asegurar que la ropa le quede perfecta. 
              Mide el contorno del cuello, el pecho y la longitud desde la base del cuello hasta la cola.
            </p>
            <Button variant="outline" className="rounded-full">
              Ver guía de tallas
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/736x/14/3a/81/143a81b3e868dcdf6fe69b82effde113.jpg?q=80&w=800" 
              alt="Gato con ropa" 
              className="rounded-xl shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizingGuide;
