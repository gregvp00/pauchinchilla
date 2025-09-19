"use client";

import { useEffect, useState } from "react";

/**
 * Observe sections by id and return the id of the currently visible section.
 * @param sectionIds readonly array of section id strings
 * @returns currently active section id or null
 */
export const useSectionObserver = (
  sectionIds: readonly string[]
): string | null => {
  // start with the first id (if provided) or null to avoid undefined
  const [activeSection, setActiveSection] = useState<string | null>(
    sectionIds && sectionIds.length > 0 ? String(sectionIds[0]) : null
  );

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    // Create the observer with your original rootMargin
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.id should be a string for your observed elements
            setActiveSection((entry.target as Element).id || null);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    // Observe each element if it exists on the page
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup: unobserve elements and disconnect observer
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};
