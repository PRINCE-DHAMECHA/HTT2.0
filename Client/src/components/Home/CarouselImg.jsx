
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel"
import demo1 from "../../assets/carosoul1.jpg"
import Autoplay from "embla-carousel-autoplay"

export function CarouselDemo() {
    const images = [ demo1, demo1, demo1, demo1
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
