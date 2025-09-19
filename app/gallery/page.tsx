"use client";

import SiteHeader from "@/components/sections/siteHeader";

export default function GalleryPage() {
  // Como esta página es la galería, podemos fijar la sección activa a "gallery".
  const activeSection = "gallery";

  return (
    <div className="bg-gray-50 min-h-screen">
      <SiteHeader activeSection={activeSection} />
      <main id="gallery" className="pt-24 px-8">
        <h1 className="text-4xl font-bold text-center">Gallery</h1>
        <p className="text-center mt-4 text-gray-600">El contenido de la galería se mostrará aquí.</p>
      </main>
    </div>
  );
}
