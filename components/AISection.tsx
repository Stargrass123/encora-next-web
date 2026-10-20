import { BrainCircuit, FileCheck, ChartLine } from "lucide-react";

const AISection = () => {
  const features = [
    {
      title: "Verified at Intake",
      description:
        "RetAI would check item identity and condition when it enters the chamber, before a refund is issued, which could help catch empty boxes, worn items and SKU swaps.",
      icon: <BrainCircuit className="w-5 h-5 dark:text-encora-green-dark" />,
      stat: "$101B in fraud",
    },
    {
      title: "No Staff Needed",
      description:
        "Drop-off would be self-service, building on the automated return kiosk we deployed in reuse pilots at San Diego International Airport and Chabot College.",
      icon: <FileCheck className="w-5 h-5 dark:text-encora-green-dark" />,
      stat: "$29 avg per return",
    },
    {
      title: "Data Retailers Can't Get Today",
      description:
        "Every return would become a structured data event: what came back, in what condition, from whom. That data could support inventory, routing and recovery decisions.",
      icon: <ChartLine className="w-5 h-5 dark:text-encora-green-dark" />,
      stat: "The missing layer",
    },
  ];

  return (
    <section className="section-spacing border-t border-b border-[#E0E0E0] dark:border-encora-mint/30">
      <div className="container-encora space-y-16">
        <div className="text-center">
          <h2 className="heading-lg dark:text-white">The Missing Layer</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-6xl mx-auto dark:text-white/80">
            Retailers process millions of returns every year. RetAI is a potential future direction; not validated or deployed for retail returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E0E0E0] dark:border-encora-mint/30 group hover:border-encora-mint backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="icon-container group-hover:bg-encora-mint dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-encora-green transition-all">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 text-encora-green dark:text-white text-xs font-bold rounded-full mb-2">
                    {feature.stat}
                  </div>
                  <h3 className="text-xl font-bold text-encora-green dark:text-white mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-normal text-muted-foreground dark:text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
