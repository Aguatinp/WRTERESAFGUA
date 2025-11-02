import { useEffect, useRef, useState } from "react";
import { MapPin, Users } from "lucide-react";
import { useDonations } from "@/hooks/useDonations";

const DonationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const { data: donations, isLoading } = useDonations();

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mapa de Impacto
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Visualiza las conexiones entre familias donantes y beneficiadas a lo largo de Chile
          </p>
        </div>

        {/* Map Placeholder with Instructions */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-12">
          <div ref={mapRef} className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJoc2wodmFyKC0tcHJpbWFyeSkpIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
            <div className="text-center z-10 bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-border">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mapa Interactivo</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Para activar el mapa interactivo con Mapbox, necesitas agregar tu token de Mapbox.
              </p>
              <input
                type="text"
                placeholder="Ingresa tu token de Mapbox"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="px-4 py-2 rounded-lg border border-input bg-background text-foreground w-full max-w-md"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Obtén tu token en{" "}
                <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  mapbox.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Donations List */}
        {isLoading ? (
          <div className="text-center p-12">
            <div className="animate-pulse text-muted-foreground">Cargando donaciones...</div>
          </div>
        ) : donations && donations.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        {donation.families?.location || "Chile"}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-muted-foreground">Curso Donante:</span>
                        <p className="font-semibold text-foreground">
                          {donation.courses?.full_name || donation.donor_name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-8 border-t border-dashed border-current" />
                        <span className="text-xs">conecta con</span>
                        <div className="w-8 border-t border-dashed border-current" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Familia Beneficiada:</span>
                        <p className="font-semibold text-secondary">
                          {donation.families?.family_name || "Asignando familia..."}
                        </p>
                      </div>
                      {donation.message && (
                        <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                          <p className="text-sm italic text-muted-foreground">"{donation.message}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-card rounded-xl border border-border">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aún no hay donaciones completadas. ¡Sé el primero en donar!</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Cada punto en el mapa representa una conexión real entre familias.
            <br />
            <span className="font-semibold text-foreground">Juntos estamos cambiando vidas, un filtro a la vez.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationMap;
