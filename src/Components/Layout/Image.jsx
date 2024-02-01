import React from "react";

const Image = ({ className, src, alt, imgClassname }) => {
  return (
    <div className={className}>
      <picture>
        <img src={src} alt={alt} className={imgClassname} />
      </picture>
    </div>
  );
};

export default Image;
