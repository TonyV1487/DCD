import React from 'react';
import { Row, Col, Image } from "react-bootstrap";
import {motion} from 'framer-motion';
import TagsInput from "./TagInput"


const Modal = ({selectedImg, setSlectedImg}) => {
    
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSlectedImg(null);
        }
    }
    const selectedTags = tags => console.log

    return(
    <>
        <Row>
            <Col>
                <motion.div className="backdrop" onClick={handleClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                >
                <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{y: "-100vh"}}
                animate={{y: "0"}}
                />
                </motion.div>
            </Col>
        </Row>
        <Row>
            <Col>
            <TagsInput selectedTags={selectedTags}/>
            </Col>

        </Row>
    </>
    )
}

export default Modal;