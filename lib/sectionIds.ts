// lib/sectionIds.ts
export const SECTION_IDS = ["home", "portfolio", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];
