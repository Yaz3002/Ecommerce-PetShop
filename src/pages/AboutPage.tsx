
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="relative h-80 md:h-96 bg-pastel-green overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Nuestra Historia</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Sobre Nosotros</h1>
            <p className="text-lg text-white/90 max-w-xl">
              Conoce a Purrfect Paws, tu tienda peruana especializada en moda para mascotas.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Purrfect Paws nació en 2018 en Lima, Perú, a partir de una pasión por los animales y la moda. Nuestra fundadora, Ana García, siempre tuvo dificultades para encontrar ropa de calidad y con estilo para sus mascotas en el mercado local.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Lo que comenzó como un pequeño proyecto en casa, rápidamente creció hasta convertirse en una de las tiendas online más reconocidas en el sector de la moda para mascotas en Perú. Nuestro compromiso con la calidad, el diseño y el bienestar animal nos ha permitido crear una comunidad de clientes fieles que comparten nuestra pasión.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy en día, Purrfect Paws ofrece una amplia gama de productos para perros y gatos, todos diseñados y fabricados en Perú, pensando en el confort y estilo de nuestros amigos peludos.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800"
                alt="Nuestra historia"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-pastel-purple/10 rounded-2xl my-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=800"
                alt="Nuestra misión"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                En Purrfect Paws, nuestra misión es proporcionar ropa de alta calidad que combine estilo, funcionalidad y comodidad para las mascotas peruanas y sus dueños.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Nos esforzamos por utilizar materiales sostenibles y procesos de fabricación éticos que respetan el medio ambiente y el bienestar animal. Cada prenda es diseñada y fabricada en Perú con los más altos estándares para garantizar que tu mascota pueda moverse cómodamente mientras luce elegante.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Creemos que las mascotas son miembros importantes de la familia y merecen productos que reflejen el amor y cuidado que les brindamos diariamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Amor por los animales</h3>
              <p className="text-gray-700">
                Cada decisión que tomamos está basada en el bienestar y comodidad de las mascotas. Amamos a los animales y eso se refleja en cada producto.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Calidad e innovación</h3>
              <p className="text-gray-700">
                Nos esforzamos constantemente por mejorar y crear productos que combinen funcionalidad, durabilidad y diseño, siempre con los mejores materiales.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sostenibilidad</h3>
              <p className="text-gray-700">
                Estamos comprometidos con prácticas sostenibles, utilizando materiales amigables con el medio ambiente y procesos de producción responsables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white rounded-2xl shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para vestir a tu mascota?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Descubre nuestra colección de ropa para perros y gatos. Calidad, estilo y confort en cada prenda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link to="/dogs">Ropa para Perros</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link to="/cats">Ropa para Gatos</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
