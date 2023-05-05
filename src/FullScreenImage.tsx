import React, { useRef, useEffect } from 'react';

interface Props {
  image: string;
  handleClose: () => void;
}

const FullScreenImage = ({ image, handleClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="full-screen-image-container">
      <img src={image} alt="Full Screen" />
    </div>
  );
};

export default FullScreenImage;
