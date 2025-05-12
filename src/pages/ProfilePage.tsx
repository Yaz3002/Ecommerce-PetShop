
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  // Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente.",
      });
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Mock order history
  const orders = [
    {
      id: "ORD-001",
      date: "2022-12-15",
      status: "Entregado",
      total: 58.97,
      items: 3,
    },
    {
      id: "ORD-002",
      date: "2023-01-20",
      status: "Procesando",
      total: 42.50,
      items: 2,
    },
    {
      id: "ORD-003",
      date: "2023-02-05",
      status: "Enviado",
      total: 76.25,
      items: 4,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mi Cuenta</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* User sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={`${user.name}'s profile`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-primary/20 text-primary flex items-center justify-center text-2xl">
                  {user.name[0]}
                </div>
              )}
              <h2 className="font-medium text-lg">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <div className="mt-6">
                <Button variant="destructive" onClick={handleLogout} className="w-full">
                  Cerrar Sesión
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Mis pedidos
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Direcciones de envío
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Métodos de pago
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Lista de deseos
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
                <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
                <TabsTrigger value="addresses">Direcciones</TabsTrigger>
              </TabsList>

              {/* Profile tab */}
              <TabsContent value="profile">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Información personal</h2>
                  
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Nombre completo
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={profileData.name}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Teléfono
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="birthdate" className="block text-sm font-medium">
                          Fecha de nacimiento
                        </label>
                        <Input
                          id="birthdate"
                          name="birthdate"
                          type="date"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button type="submit" disabled={isUpdating}>
                        {isUpdating ? "Guardando..." : "Guardar cambios"}
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
                  <h2 className="text-xl font-semibold mb-4">Cambiar contraseña</h2>
                  
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="block text-sm font-medium">
                        Contraseña actual
                      </label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        placeholder="********"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="newPassword" className="block text-sm font-medium">
                          Nueva contraseña
                        </label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          placeholder="********"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium">
                          Confirmar nueva contraseña
                        </label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="********"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button type="submit">Cambiar contraseña</Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              {/* Orders tab */}
              <TabsContent value="orders">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Historial de pedidos</h2>
                  
                  {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b">
                          <tr>
                            <th className="py-3 text-left">Pedido</th>
                            <th className="py-3 text-left">Fecha</th>
                            <th className="py-3 text-left">Estado</th>
                            <th className="py-3 text-left">Total</th>
                            <th className="py-3 text-left">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.id} className="border-b">
                              <td className="py-3">{order.id}</td>
                              <td className="py-3">{order.date}</td>
                              <td className="py-3">
                                <span 
                                  className={`px-2 py-1 rounded-full text-xs ${
                                    order.status === "Entregado" ? "bg-green-100 text-green-800" :
                                    order.status === "Procesando" ? "bg-blue-100 text-blue-800" :
                                    "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-3">{order.total.toFixed(2)} €</td>
                              <td className="py-3">
                                <Button variant="link" size="sm">
                                  Ver detalles
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No tienes pedidos recientes</p>
                      <Button asChild className="mt-4">
                        <a href="/">Empezar a comprar</a>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Addresses tab */}
              <TabsContent value="addresses">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Direcciones de envío</h2>
                    <Button>Añadir dirección</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Sample address card */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Casa</h3>
                          <address className="not-italic text-gray-600 mt-2">
                            <p>Juan Pérez</p>
                            <p>Calle Mayor 123</p>
                            <p>28001 Madrid, España</p>
                            <p>+34 600 123 456</p>
                          </address>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button variant="outline" size="sm">Eliminar</Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sample address card */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Trabajo</h3>
                          <address className="not-italic text-gray-600 mt-2">
                            <p>Juan Pérez</p>
                            <p>Calle Comercial 45, Oficina 3B</p>
                            <p>28004 Madrid, España</p>
                            <p>+34 600 789 012</p>
                          </address>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button variant="outline" size="sm">Eliminar</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
