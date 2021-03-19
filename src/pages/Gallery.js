import React, {useState} from 'react';
import ImageGrid from '../components/ImageGrid';
import UploadForm from '../components/UploadForm/UploadForm';
import Modal from '../components/Modal';

const Gallery = () => {
    const [selectedImg, setSlectedImg] = useState(null);


return(
    <div className="gallery">
        <ImageGrid setSlectedImg={setSlectedImg}/>
        { selectedImg && <Modal selectedImg={selectedImg} setSlectedImg={setSlectedImg}/> }
    </div>

);
}

export default Gallery;