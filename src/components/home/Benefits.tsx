
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Undo2, CreditCard } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck size={40} />,
      title: "Envío Gratis",
      description: "En pedidos superiores a S/ 50",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Calidad Garantizada",
      description: "Materiales de primera calidad",
    },
    {
      icon: <Undo2 size={40} />,
      title: "Devolución Fácil",
      description: "30 días para cambios o devoluciones",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Pago Seguro",
      description: "Tus compras siempre protegidas",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Por Qué Elegirnos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos la mejor experiencia para ti y tu mascota, con servicios diseñados para tu comodidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-primary mb-6 bg-pastel-purple/20 p-5 rounded-full">{benefit.icon}</div>
              <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
