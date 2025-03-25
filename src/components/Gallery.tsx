import React from 'react';

const images = [
  {
    url: 'src/components/images/pic15.jpg',
    title: "Tiny hands, big dreams!",
  },
  {
    url: 'src/components/images/pic14.jpg',
    title: "Growing, learning, and having fun!",
  },
  {
    url: 'src/components/images/pic13.jpg',
    title: "Building bright futures one crayon at a time!",
  },
  {
    url: 'src/components/images/pic4.jpg',
    title: "Making a splash in learning!",
  },
  {
    url: 'src/components/images/pic6.jpg',
    title: "Pool days are the best days!",
  },
  {
    url: 'src/components/images/pic10.jpg',
    title: "Life is better when you're swimming!",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our School Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}