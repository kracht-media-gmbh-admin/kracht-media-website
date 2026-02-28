import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kracht Media',
    short_name: 'Kracht',
    description: 'Kracht Media GmbH - Kreative Ideen mit Wirkung',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f6f6',
    theme_color: '#f6f6f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}