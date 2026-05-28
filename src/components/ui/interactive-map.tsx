import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface InteractiveMapProps {
  center: [number, number];
  zoom?: number;
  className?: string;
}

export function InteractiveMap({ center, zoom = 16, className = '' }: InteractiveMapProps) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    // Auto-open popup and add bounce animation on mount
    if (markerRef.current) {
      markerRef.current.openPopup();
      const icon = markerRef.current.getElement();
      if (icon) {
        icon.classList.add('marker-bounce');
        setTimeout(() => {
          icon.classList.remove('marker-bounce');
        }, 1000);
      }
    }
  }, []);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${center[0]},${center[1]}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style>{`
        .marker-bounce {
          animation: bounce 1s ease-in-out;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .leaflet-container {
          z-index: 0;
        }
      `}</style>
      
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className={className}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} ref={markerRef}>
          <Popup className="custom-popup">
            <div className="text-center p-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-base">SMP PGRI 8 Kota Bogor</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Jl. Raya Semplak Jl. Cemplang Utara No.276
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Cilendek Bar., Bogor Barat
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                <strong>Jam Operasional:</strong><br />
                Senin - Jumat: 07.00 - 15.00 WIB
              </p>
              <Button
                onClick={handleGetDirections}
                size="sm"
                className="w-full"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Petunjuk Arah
              </Button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
