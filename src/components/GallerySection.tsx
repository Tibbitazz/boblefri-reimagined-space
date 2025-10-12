import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
}

const placeholderImages: GalleryImage[] = [
  {
    id: "1",
    title: "Dykking i dypet",
    description: "Fridykking i krystalklart vann",
    image_url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "Undervannsliv",
    description: "Vakker marin fauna",
    image_url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Solnedgang dykk",
    description: "Magisk atmosfære ved solnedgang",
    image_url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
  },
];

export function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(placeholderImages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    const { data } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });

    if (data && data.length > 0) {
      setGalleryImages(data);
    }
    setLoading(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bilder fra våre aktiviteter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Få et innblikk i vårt aktive miljø gjennom bilder fra treninger, 
            arrangementer og underwater adventures.
          </p>
        </div>

        {/* Featured image */}
        <div className="relative mb-12">
          <Card className="overflow-hidden shadow-depth">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={galleryImages[currentImageIndex].image_url}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-lg opacity-90">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation buttons */}
          <Button
            variant="wave"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="wave"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-float hover:-translate-y-1 animate-fade-in-up ${
                index === currentImageIndex ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="relative h-24 md:h-32 overflow-hidden">
                <img 
                  src={image.image_url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Se alle bilder
          </Button>
        </div>
      </div>
    </section>
  );
}