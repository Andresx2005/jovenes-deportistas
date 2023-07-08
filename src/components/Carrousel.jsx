import { useState } from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import "./Carrousel.css"

function Carrousel({data}) {
    

    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1)
        console.log(data.length - 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length -1 : slide - 1)

    }

    return(
        <div className="carrousel">
            <MdKeyboardArrowLeft
                onClick={prevSlide}
                className="arrow arrow-left"
            />
            {data.map((items, id) =>
                <img
                    key={id}
                    src={items.src}
                    alt={items.alt}
                    className={slide === id ? "slide" : "slide slide-hidden"}
                />)
            }
            <MdKeyboardArrowRight
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.map((_, id) =>
                    <button
                        key={id}
                        className={ slide === id ? "indicator" : "indicator indicator-inactive"}
                    ></button>)
                }
            </span>
        </div>
    )
}

export default Carrousel