/**
 * Re-export aus lib/data.ts für Kompatibilität.
 * Neue Imports bitte aus @/lib/data.
 */
export {
  projects,
  getProjectBySlug,
  getAllProjectSlugs,
} from "./data";
export type { Project } from "./data";
