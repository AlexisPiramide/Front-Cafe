
import ImageUploading from "react-images-uploading";

import "./../style/inputImagen.css";

function InputImagen({images, setImages}) {


    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    return (
        <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" acceptType={["jpg"]} >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          <div className="upload__image-wrapper">
            {imageList.length === 0 && (
              <button style={isDragging ? { color: "red" } : null} onClick={onImageUpload} {...dragProps} >Click or Drop here</button>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>);
}

export default InputImagen;