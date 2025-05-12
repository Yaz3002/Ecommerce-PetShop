
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    satisfaction: [5], // Default satisfaction level
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({
      ...prev,
      satisfaction: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor, introduce un correo electrónico válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "¡Mensaje enviado!",
        description:
          "Gracias por contactar con nosotros. Te responderemos lo antes posible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        satisfaction: [5],
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Se produjo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Map satisfaction level to text label
  const getSatisfactionLabel = (value: number) => {
    const labels = [
      "Muy Insatisfecho",
      "Insatisfecho",
      "Neutral",
      "Satisfecho",
      "Muy Satisfecho",
    ];
    return labels[value - 1] || "Neutral";
  };

  return (
    <Layout>
      {/* Hero section */}
      <div className="relative h-80 md:h-96 bg-pastel-pink rounded-2xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Contacto
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Estamos aquí para responder tus dudas. Contáctanos y te
              responderemos a la brevedad posible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <p className="text-gray-600 mb-8">
                ¿Tienes alguna pregunta sobre nuestros productos para mascotas? 
                ¿Necesitas ayuda con un pedido? Estamos a tu disposición a través 
                de los siguientes canales de contacto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Phone Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Teléfono</h3>
                    <p className="text-gray-600">(+51) 987 654 321</p>
                    <p className="text-sm text-gray-500 mt-1">Lun-Vie: 9:00 - 18:00</p>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Email</h3>
                    <p className="text-gray-600">info@purrfectpaws.pe</p>
                    <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
                  </CardContent>
                </Card>

                {/* Address Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Dirección</h3>
                    <p className="text-gray-600">Av. Larco 1301,</p>
                    <p className="text-gray-600">Miraflores, Lima, Perú</p>
                  </CardContent>
                </Card>

                {/* Hours Card */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Horario</h3>
                    <p className="text-gray-600">Lun-Vie: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sáb: 10:00 - 15:00</p>
                  </CardContent>
                </Card>
              </div>

              {/* Map */}
              <div className="h-72 bg-pastel-gray/30 rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8573344964716!2d-77.0306182!3d-12.1134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81a5b2adc3b%3A0xaea0c7aaebf402c2!2sAv.%20Larco%201301%2C%20Miraflores%2015074%2C%20Peru!5e0!3m2!1sen!2spe!4v1716236320507!5m2!1sen!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Purrfect Paws"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="satisfaction"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ¿Qué tan satisfecho estás con nuestros productos?
                      </label>
                      <Slider
                        id="satisfaction"
                        min={1}
                        max={5}
                        step={1}
                        value={formData.satisfaction}
                        onValueChange={handleSliderChange}
                      />
                      <div className="flex justify-between text-xs text-gray-500 px-1">
                        <span>Muy Insatisfecho</span>
                        <span>Muy Satisfecho</span>
                      </div>
                      <div className="text-center text-sm text-primary font-medium">
                        {getSatisfactionLabel(formData.satisfaction[0])}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-pastel-blue/20 -mx-6 sm:-mx-8 px-6 sm:px-8 rounded-2xl my-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas frecuentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2">¿Cuánto tarda en llegar mi pedido?</h3>
                <p className="text-gray-600">
                  Los pedidos suelen procesarse en 1-2 días laborables. El tiempo de entrega para Lima es de 1-2 días adicionales, y para provincias entre 3-5 días laborables.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2">¿Puedo devolver un producto?</h3>
                <p className="text-gray-600">
                  Sí, aceptamos devoluciones dentro de los 30 días posteriores a la recepción del pedido si el producto está en su estado original y con todas las etiquetas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2">¿Cómo sé qué talla elegir?</h3>
                <p className="text-gray-600">
                  Puedes encontrar nuestra guía de tallas en la página de cada producto. Si tienes dudas sobre la medida adecuada para tu mascota, puedes contactarnos y te ayudaremos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-2">¿Ofrecen envío a todo Perú?</h3>
                <p className="text-gray-600">
                  Sí, realizamos envíos a todo el Perú. Los costos y tiempos de envío varían según la ubicación. Los envíos a Lima Metropolitana son gratuitos en compras mayores a S/ 150.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/faq">Ver todas las preguntas frecuentes</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
