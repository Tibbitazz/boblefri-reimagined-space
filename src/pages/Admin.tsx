import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { UserManagement } from "@/components/admin/UserManagement";
import { GalleryManagement } from "@/components/admin/GalleryManagement";
import { LogOut } from "lucide-react";

export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    // Check user role
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    if (roles && roles.length > 0) {
      // Get highest priority role (admin > moderator > member)
      const roleHierarchy = { admin: 3, moderator: 2, member: 1 };
      const topRole = roles.reduce((prev, curr) => {
        return roleHierarchy[curr.role as keyof typeof roleHierarchy] > 
               roleHierarchy[prev.role as keyof typeof roleHierarchy] ? curr : prev;
      });
      setUserRole(topRole.role);
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logget ut",
      description: "Du er nå logget ut.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Laster...</p>
      </div>
    );
  }

  if (!userRole || !["admin", "moderator"].includes(userRole)) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Ingen tilgang</h1>
        <p>Du har ikke tilgang til admin-panelet.</p>
        <Button onClick={handleLogout}>Logg ut</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel - Sola Fridykkeklubb</h1>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logg ut
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gallery">Galleri</TabsTrigger>
            <TabsTrigger value="users" disabled={userRole !== "admin"}>
              Brukere
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gallery">
            <GalleryManagement />
          </TabsContent>
          <TabsContent value="users">
            {userRole === "admin" && <UserManagement />}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
