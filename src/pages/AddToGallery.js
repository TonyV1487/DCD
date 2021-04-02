import React, {useState} from 'react';
import ImageGrid from '../components/ImageGrid';
import UploadForm from '../components/UploadForm/UploadForm';
import TagsInput from '../components/TagInput'
import Modaltag from '../components/Modaltag';

const AddToGallery = () => {
    const [selectedImg, setSlectedImg] = useState(null);
    

return(
    <div className="gallery">
        <UploadForm />
        <ImageGrid setSlectedImg={setSlectedImg}>
        
        </ImageGrid>
        
        { selectedImg && <Modaltag selectedImg={selectedImg} setSlectedImg={setSlectedImg}/>}
    </div>

);
}

export default AddToGallery;