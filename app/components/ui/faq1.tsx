import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h4 className="text-xl md:text-4xl tracking-tighter max-w-xl text-left font-regular">
                Contact us
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                If you got any questions, please do not hesitate
              </p>
            </div>
            <a href="mailto:moped_05ditty@icloud.com">
              <Button className="gap-4" variant="outline">
                Reach out <Mail className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div>
              <Badge variant="outline">FAQ</Badge>
          </div>
          {resources.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>
                {question}
              </AccordionTrigger>
              <AccordionContent>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

const resources = [
  {
    question: "What is your professional background?",
    answer: "I am a seasoned technology professional with expertise in software development, DevOps, and system architecture. My experience spans across building scalable, secure, and efficient solutions for various industries.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in Symfony, PHP, Docker, CI/CD pipelines, and cloud-based architectures. I am also experienced in front-end frameworks, security best practices, and optimizing system performance.",
  },
];

