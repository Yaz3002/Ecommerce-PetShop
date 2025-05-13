
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Heart, MessageCircle, Instagram } from "lucide-react";

const InstagramFeed = () => {
  // Mock Instagram posts
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583337426008-2fef51aa2a16?q=80&w=400",
      caption: "Nuestro nuevo suéter para perros pequeños ya disponible 🐕❤️",
      username: "purrfectpaws",
      likes: 243,
      comments: 18,
      url: "https://instagram.com",
      timestamp: "hace 2 días",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=400",
      caption: "Los mejores amigos merecen lo mejor 🐾",
      username: "purrfectpaws",
      likes: 187,
      comments: 24,
      url: "https://instagram.com",
      timestamp: "hace 3 días",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?q=80&w=400",
      caption: "Nuevos diseños para el verano! ☀️",
      username: "purrfectpaws",
      likes: 315,
      comments: 42,
      url: "https://instagram.com",
      timestamp: "hace 4 días",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1536590158209-e9d615d525e4?q=80&w=400",
      caption: "Personaliza el disfraz de tu gatito 🐱",
      username: "purrfectpaws",
      likes: 165,
      comments: 11,
      url: "https://instagram.com",
      timestamp: "hace 1 semana",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1618369524130-160fb94122b7?q=80&w=400",
      caption: "Visita nuestra tienda y encuentra el outfit perfecto",
      username: "purrfectpaws",
      likes: 198,
      comments: 15,
      url: "https://instagram.com",
      timestamp: "hace 1 semana",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?q=80&w=400",
      caption: "¡Envío gratis a todo Perú! 🇵🇪",
      username: "purrfectpaws",
      likes: 254,
      comments: 26,
      url: "https://instagram.com",
      timestamp: "hace 2 semanas",
    },
  ];

  // Create a ref for the autoplay plugin
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  );

  // Create a plugins array ensuring it's not null
  const plugins = useRef([autoplayRef.current]);

  return (
    <section className="py-16 bg-pastel-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">Síguenos en Instagram</h2>
          <p className="text-gray-600 text-lg">@purrfectpaws</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <Carousel 
            className="w-full"
            plugins={plugins.current}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      {/* Instagram Header */}
                      <div className="flex items-center p-3 border-b">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-300 via-red-400 to-purple-500 p-0.5 mr-2">
                          <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwquJO42y42jnvzKA5A3jRajg_2shwCp6taw&s" alt="Profile" className="w-full h-full rounded-full object-cover" />
                          </div>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold">{post.username}</p>
                          <p className="text-xs text-gray-500">{post.timestamp}</p>
                        </div>
                      </div>
                      
                      {/* Post Image */}
                      <div className="aspect-square w-full">
                        <img
                          src={post.image}
                          alt={`Instagram post ${post.id}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Post Actions */}
                      <div className="p-3">
                        <div className="flex space-x-4 mb-2">
                          <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
                          <MessageCircle className="w-5 h-5 text-gray-700 hover:text-primary transition-colors cursor-pointer" />
                          <div className="ml-auto">
                            <Instagram className="w-5 h-5 text-gray-700" />
                          </div>
                        </div>
                        
                        {/* Likes */}
                        <p className="text-sm font-semibold">{post.likes} me gusta</p>
                        
                        {/* Caption */}
                        <div className="text-sm mt-1">
                          <span className="font-semibold mr-1">{post.username}</span>
                          <span>{post.caption}</span>
                        </div>
                        
                        {/* Comments */}
                        <p className="text-sm text-gray-500 mt-1">
                          Ver los {post.comments} comentarios
                        </p>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static left-0 mr-2" />
              <CarouselNext className="relative static right-0 ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 duration-300"
          >
            <Instagram size={20} />
            <span>Seguirnos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
