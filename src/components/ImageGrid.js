import React from 'react';
import useFirestore from './useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSlectedImg}) => {
    const {docs} = useFirestore('gallery');

return (
    <div className="img-grid">
        {docs && docs.map(doc => (
            <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                onClick={() => setSlectedImg(doc.url)}
            >
                <motion.img src={doc.url} alt="uploaded pic" 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1}}
                />
            </motion.div>
        ))}
    </div>
)

};

export default ImageGrid;