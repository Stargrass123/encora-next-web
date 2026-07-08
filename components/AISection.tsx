import { BrainCircuit, FileCheck, ChartLine } from "lucide-react";

const AISection = () => {
  const features = [
    {
      title: "Verified at Intake",
      description:
        "RetAI confirms item identity and condition the moment it enters the chamber — before any refund is issued. No more empty boxes, worn items, or SKU swaps.",
      icon: <BrainCircuit className="w-5 h-5 dark:text-encora-green-dark" />,
      stat: "$101B in fraud",
    },
    {
      title: "No Staff Needed",
      description:
        "The return process is designed to be fully automated — the same kiosk architecture already runs automated reuse returns in our live programs today. Customers self-serve in under 60 seconds.",
      icon: <FileCheck className="w-5 h-5 dark:text-encora-green-dark" />,
      stat: "$29 avg per return",
    },
    {
      title: "Data Retailers Can't Get Today",
      description:
        "Every return becomes a structured data event — what came back, in what condition, from whom. That data drives smarter inventory, routing, and recovery decisions.",
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
            Retailers process millions of returns every year. Almost none are verified at the point of handoff. RetAI changes that.
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
