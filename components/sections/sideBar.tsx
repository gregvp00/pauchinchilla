import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// Definición de las props que recibe de SiteHeader
interface SideBarProps {
  isHovered: boolean;
  hoveredSection: string | null;
  activeSection: string | null;
}

const SideBar: React.FC<SideBarProps> = ({
  isHovered,
  hoveredSection,
  activeSection,
}) => {
  // El texto a mostrar: la sección con hover tiene prioridad.
  // Si no hay hover, se muestra la sección activa actual.
  const displayText = hoveredSection || activeSection;

  return (
    // Contenedor principal, posicionado por el componente padre (SiteHeader)
    <div>
      {/* El recuadro negro, siempre visible */}
      <div
        // 👇 Añadimos la clase para el corte diagonal aquí
        className="bg-black text-white w-52 shadow-lg flex flex-col justify-center items-start pl-8 clip-[polygon(0%_0%,_85%_0%,_100%_100%,_0%_100%)]"
        style={{
          height: "47px",
          clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            // Usamos el texto como 'key' para que la animación se dispare cuando cambie
            key={displayText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {/* Muestra el texto principal (hover o activo) */}
            {displayText && (
              <h2 className="text-base font-bold capitalize text-white truncate text-center pr-6">
                {displayText}
              </h2>
            )}

            {/* Muestra el texto secundario ("current: ...") solo si se hace hover sobre una sección DIFERENTE a la activa */}
            {hoveredSection &&
              activeSection &&
              hoveredSection !== activeSection && (
                <p className="text-xs capitalize text-gray-400 truncate text-center pr-6">
                  (current: {activeSection})
                </p>
              )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SideBar;
