import React from 'react';

export default (props) => {
    let images = props.images.map((image, index)=>{
        console.log('image: ', image);
        
        return(
            <div key = {index}>
                <img src={image["img_src"]}alt="" />
            </div>
        )
    });
    console.log(images);

    return  (
        <div>
            {images}
        </div>
    )
}
