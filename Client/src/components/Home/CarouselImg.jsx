import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel"
import demo1 from "../../assets/carosoul1.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import Autoplay from "embla-carousel-autoplay"

export function CarouselDemo() {
    const images = [ 
      demo1,img1,img2,img3,img4
    ];

  return (
    <Carousel className="max-w-[50%]" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
               <img src={image} alt={`Image ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
