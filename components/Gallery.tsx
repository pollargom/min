
import React, { useState } from 'react';
import type { GalleryItem } from '../types';

const galleryData: GalleryItem[] = [
  { id: 1, type: 'image', src: 'https://picsum.photos/seed/dance1/800/600', thumbnail: 'https://picsum.photos/seed/dance1/400/300', title: 'Ephemeral Leap', description: 'A moment of weightlessness.' },
  { id: 2, type: 'image', src: 'https://picsum.photos/seed/dance2/800/600', thumbnail: 'https://picsum.photos/seed/dance2/400/300', title: 'Urban Flow', description: 'Finding grace in the city.' },
  { id: 3, type: 'image', src: 'https://picsum.photos/seed/dance3/600/800', thumbnail: 'https://picsum.photos/seed/dance3/300/400', title: 'Crimson Tide', description: 'Passion and power.' },
  { id: 4, type: 'image', src: 'https://picsum.photos/seed/dance4/800/600', thumbnail: 'https://picsum.photos/seed/dance4/400/300', title: 'Forest Spirit', description: 'Dancing with nature.' },
  { id: 5, type: 'image', src: 'https://picsum.photos/seed/dance5/600/800', thumbnail: 'https://picsum.photos/seed/dance5/300/400', title: 'Silhouette', description: 'Form against the light.' },
  { id: 6, type: 'image', src: 'https://picsum.photos/seed/dance6/800/600', thumbnail: 'https://picsum.photos/seed/dance6/400/300', title: 'The Ensemble', description: 'Unity in movement.' },
];

const Modal: React.FC<{ item: GalleryItem; onClose: () => void }> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="relative bg-black p-4 rounded-lg max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-4 -right-4 text-white bg-gray-800 rounded-full p-1 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={item.src} alt={item.title} className="max-w-full max-h-[80vh] object-contain" />
        <div className="text-center mt-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Gallery</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default Gallery;
