import React, { useState, useEffect } from "react";

const ImagePreview = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <h2>Preview:</h2>
      {image ? (
        <img src={image} alt="preview" style={{ width: "400px", height: "auto" }} />
      ) : (
        <p>Chưa có hình ảnh nào được chọn.</p>
      )}
    </div>
  );
};

export default ImagePreview;
