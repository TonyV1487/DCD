import React, {useState} from 'react';
import ImageGrid from '../components/ImageGrid';
import UploadForm from '../components/UploadForm/UploadForm';
import Modal from '../components/Modal';
import TagsInput from '../components/TagInput'

const AddToGallery = () => {
    const [selectedImg, setSlectedImg] = useState(null);
    

return(
    <div className="gallery">
        <UploadForm />
        <ImageGrid setSlectedImg={setSlectedImg}>
        
        </ImageGrid>
        
        { selectedImg && <Modal selectedImg={selectedImg} setSlectedImg={setSlectedImg}/>}
    </div>

);
}

export default AddToGallery;