import { MoveRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Feature74 = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-4 lg:px-16">
        <div className="lg:max-w-3xl">
          <h2 className="mb-3 text-xl md:mb-4 md:text-4xl lg:mb-6">
            About us
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
          I am a seasoned technology professional with a passion for innovation and problem-solving. With years of experience in software development, DevOps, and system architecture, I specialize in building scalable, secure, and efficient solutions. My focus is on leveraging modern technologies to streamline workflows, optimize performance, and drive digital transformation. Committed to continuous learning and excellence, I thrive on tackling complex challenges and creating impactful solutions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {resources.map(({ title, name, text, img, href }) => (
            <div key={name} className="flex flex-col text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={img}
                  alt={name}
                  className="aspect-[16/9] size-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {name}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {text}
                </p>
                <div className="flex flex-col justify-between h-full">
                  <div className="gap-2">
                    <Badge>{title}</Badge>
                  </div>
                  <div className="gap-2 mt-auto">
                    <a href={href}>
                      <Button variant="secondary" size="sm" className="gap-4">
                        Contact <MoveRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    title: "Developer",
    name: "Magnus",
    img: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    text: "Intuitive and efficient: Tailored solutions for your needs",
    href: "/contact"
  },
];