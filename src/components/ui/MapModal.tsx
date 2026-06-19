"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@heroui/react";
import { company } from "@/data/company";
import { MapPin } from "lucide-react";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function MapModal({ isOpen, onOpenChange }: MapModalProps) {
  // EFAGRAM Popayán coordinates (2°28'58.5"N 76°34'38.3"W)
  const longitude = -76.5773056;
  const latitude = 2.4829167;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-alegreya text-2xl text-forest-900">
              Nuestra Ubicación
              <span className="text-sm font-normal font-inter text-slate-500">{company.fullAddress}</span>
            </ModalHeader>
            <ModalBody className="pb-6">
              <div className="w-full h-[400px] rounded-xl overflow-hidden bg-slate-100 shadow-inner relative border border-forest-100">
                {isOpen && (
                  <Map
                    initialViewState={{
                      longitude,
                      latitude,
                      zoom: 14,
                    }}
                    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                  >
                    <NavigationControl position="top-right" />
                    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
                      <div className="text-forest-700 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition cursor-pointer border border-forest-100">
                        <MapPin size={28} />
                      </div>
                    </Marker>
                  </Map>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Button color="primary" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  as="a"
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  className="ml-3 font-semibold shadow-lg shadow-forest-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Abrir en Google Maps
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
