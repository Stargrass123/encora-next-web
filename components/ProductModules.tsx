import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

const ProductModules = () => {
  const steps = [
    {
      step: "01",
      title: "Scan",
      description:
        "The customer would scan their return authorization QR code at the kiosk.",
      icon: BinIcon,
    },
    {
      step: "02",
      title: "Place",
      description:
        "The item would be placed into the controlled intake chamber, and the door would close before checks begin.",
      icon: TagsIcon,
    },
    {
      step: "03",
      title: "Verify",
      description:
        "RetAI could use weight, imaging and rules to check item identity and condition.",
      icon: VerifyIcon,
    },
    {
      step: "04",
      title: "Route",
      description:
        "Results could then inform the retailer's refund and routing decisions.",
      icon: ConnectIcon,
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-encora space-y-16">
        <div className="text-center">
          <h2 className="heading-lg mb-4 dark:text-white">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mx-auto dark:text-white/80">
            RetAI is a potential future direction; not validated or deployed for retail returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-sm border border-[#E0E0E0] dark:border-encora-mint/30
             bg-white dark:bg-white/10 backdrop-blur-sm transition-all duration-300
             hover:bg-white/80 dark:hover:bg-encora-green/10 hover:border-encora-mint/50"
            >
              <div className="text-4xl font-bold text-encora-mint/30 dark:text-encora-mint/40 mb-4">
                {step.step}
              </div>
              <div className="icon-container mb-4 bg-emerald-500/10 dark:bg-white/10">
                {typeof step.icon === "function" ? (
                  <step.icon className="dark:stroke-encora-mint-light" />
                ) : null}
              </div>
              <h3 className="text-xl font-bold text-encora-green dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-base font-normal text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
