import React, { useRef, useEffect } from 'react';

interface Props {
  image: string;
  handleClose: () => void;
}

const FullScreenImage = ({ image, handleClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="full-screen-image-container">
      <img src={image} alt="Full Screen" />
    </div>
  );
};

export default FullScreenImage;
