import './ImageCard.css'
import {useState} from "react";

function ImageCard({imageSrc, imageCapture, imageText}){
    //Text display hook
    const [flipped, setFlipped] = useState(false);

    return (
            flipped
            ?
            /*Text displays*/
            <div className="ImageCard ImageCard_flipped" onClick={()=>setFlipped(!flipped)}>
                <p className="ImageCard-Text ImageCard-Text_flipped">
                        {
                            imageText.map((text, index)=>{
                                return(
                                    <span key={index} className="ImageCard-Paragraph">{text}</span>
                                )
                            })
                        }

                    </p>
                <img src={imageSrc} className="ImageCard-Image ImageCard-Image_flipped" alt="highSchool"/>

                <p className="ImageCard-Capture ImageCard-Capture_flipped">{imageCapture}</p>
            </div>
            :
            /*Image displays*/
            <div className="ImageCard" onClick={()=>setFlipped(!flipped)}>
                <p className="ImageCard-Text">{imageText[0]}</p>
                <img src={imageSrc} className="ImageCard-Image" alt="highSchool"/>

                <p className="ImageCard-Capture">{imageCapture}</p>
            </div>
    )
}
export default ImageCard;