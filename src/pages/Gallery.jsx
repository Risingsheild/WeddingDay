import { PageWrapper } from '../components/PageWrapper';

export function Gallery() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
      <div className="overflow-x-auto whitespace-nowrap space-x-4 flex">
        {['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg'].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Wedding ${index + 1}`}
            className="w-64 h-64 object-cover rounded shadow inline-block"
          />
        ))}
      </div>
    </PageWrapper>
  );
}