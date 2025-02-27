import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, Goal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["efficiency", "complexity", "adaptability", "accuracy"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Enhance emitter-training with increased</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Unlock the full potential of digitalization to enhance your training operations. Our innovative software remotely controls ground-based emitters, sending simulated threat signals to fighter jets in real-time. This solution reduces manpower requirements, accelerates response times, and simplifies complex training scenarios.
              {/* Leverage the potential of digitalization to bridge the gaps in manual workflows and unlock greater value in your training operations. Our mission is to streamline your technology chain, enabling smoother, faster, and more efficient processes.
              With a specialized focus on air force applications, we also welcome collaboration on other defense-related use cases. Our ultimate goal is to simplify complex military training scenarios, making them more effective, adaptive, and impactful than ever before.
              Experience the future of defense training—elevated with innovation and precision. */}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="services">
                <Button size="lg" className="gap-4" variant="outline">
                SAM1 <Goal className="w-4 h-4" />
                </Button>
            </a>
            <a href="contact">
                <Button size="lg" className="gap-4">
                Contact us <MoveRight className="w-4 h-4" />
                </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
