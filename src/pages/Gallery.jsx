import { PageWrapper } from '../components/PageWrapper';
import Weddingimg1 from '../images/Weddingimg1.jpg';
import '../styles/Gallery.css';

export function Gallery() {
  const galleryImages = [
    { src: Weddingimg1, caption: "The Day She Said Yes" },
    { src: 'Weddingimg2.jpg', caption: "Beach Sunset" },
    { src: 'Weddingimg3.jpg', caption: "Mountain Adventure" },
    { src: 'Weddingimg4.jpg', caption: "City Lights" },
    { src: 'Weddingimg5.jpg', caption: "Coffee Date" },
    { src: 'Weddingimg6.jpg', caption: "Hiking Together" }
  ];

  return (
    <PageWrapper>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Story in Pictures</h2>
          <p>Capturing our journey together</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
              />
              <div className="gallery-caption">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}