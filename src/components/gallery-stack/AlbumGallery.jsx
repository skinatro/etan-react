import GalleryCarousel from './GalleryCarousel';
import './AlbumGallery.css';


export default function AlbumGallery() {
  // Use direct paths to public folder - no imports needed!
  // Files in public/ can be referenced directly with /path
  
  const galleryCards = [
    {
      id: 1,
      content: <img src="/gallery/gallery1.jpg" alt="Gallery 1" className="card-image" />
    },
    {
      id: 2,
      content: <img src="/gallery/gallery2.jpg" alt="Gallery 2" className="card-image" />
    },
    {
      id: 3,
      content: <img src="/gallery/gallery3.jpg" alt="Gallery 3" className="card-image" />
    },
    {
      id: 4,
      content: <img src="/gallery/gallery4.jpg" alt="Gallery 4" className="card-image" />
    },
    {
      id: 5,
      content: <img src="/gallery/gallery5.jpg" alt="Gallery 5" className="card-image" />
    },
    {
      id: 6,
      content: <img src="/gallery/gallery6.jpg" alt="Gallery 6" className="card-image" />
    },
    {
      id: 7,
      content: <img src="/gallery/gallery7.jpg" alt="Gallery 7" className="card-image" />
    },
  ];

  return (
    <div className="album-gallery-page">
      {/* Gallery header */}
      <div className="gallery-header">
        <h1>E-TAN Gallery</h1>
        <p>Scroll to explore our moments</p>
      </div>

      {/* 3D Carousel */}
      <GalleryCarousel 
        cards={galleryCards}
        autoplay={true}
        autoplayDelay={4000}
        pauseOnHover={true}
      />
    </div>
  );
}
