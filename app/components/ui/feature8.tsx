import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imagePaths = [
    '/sam1/scenario.png',
    '/sam1/scenarios.png',
    '/sam1/debrief-log.png',
    '/sam1/emitter-control.png',
  ];

export const Feature8 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>SAM1</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Run prebuild scenarios for your pilots in realtime
            </h2>
            <p className="text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground  text-left">
            Create and execute complex training scenarios in real-time with our advanced software. 
            Say goodbye to manual interventions and streamline your operations. 
            Our solution eliminates the need for personnel to manually activate systems, allowing facilitating personel to focus on critical tasks. 
            This results in faster response times for pilots and the ability to conduct more sophisticated training exercises.
              {/* Build complex scenarios and play them in realtime. 
              No more man-in-the-woods-to-flip-a-switch.
              Offload work for your SAM-personell, increased responstime for pilots and do more complex scenarios. */}
            </p>
          </div>
        </div>
        <div className="w-full max-w-full px-6">
          <Carousel>
          <CarouselContent>
            {imagePaths.map((path, index) => (
                <CarouselItem key={index}>
                <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                    <img
                    src={path}
                    alt={`Platform Screenshot ${index + 1}`}
                    className="w-full h-auto object-contain"
                    />
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  </div>
);