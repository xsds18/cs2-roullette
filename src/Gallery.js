import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './gallery.scss'; // Импортируйте стили

const Gallery = ({ items }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event, imgSrc) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top - 150, // Позиция сверху (можно настроить)
      left: rect.left + rect.width / 2 - 10, // Центрируем по горизонтали
    });
    setHoveredImage(imgSrc);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="gallery">
      {items.map(item => (
        <ImageItem 
          key={item.id} 
          imgSrc={item.img} 
          altText={item.name} 
          onMouseEnter={(event) => handleMouseEnter(event, item.img)} 
          onMouseLeave={handleMouseLeave} 
        />
      ))}
      {hoveredImage && (
        <PreviewModal imgSrc={hoveredImage} position={position} />
      )}
    </div>
  );
};

const ImageItem = ({ imgSrc, altText, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className="image-container" 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <img src={imgSrc} alt={altText} className="img-prev" />
    </div>
  );
};

const PreviewModal = ({ imgSrc, position }) => {
  return (
    <div className="preview-modal" style={{ top: position.top, left: position.left }}>
      <img src={imgSrc} alt="Preview" className="preview-image" />
    </div>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ImageItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

PreviewModal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
};

export default Gallery;