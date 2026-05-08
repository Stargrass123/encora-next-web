import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

const ProductModules = () => {
  const steps = [
    {
      step: "01",
      title: "Scan",
      description:
        "Customer scans their return authorization QR code at the kiosk — no staff required.",
      icon: BinIcon,
    },
    {
      step: "02",
      title: "Place",
      description:
        "Item is placed into the controlled intake chamber. The door closes and verification begins.",
      icon: TagsIcon,
    },
    {
      step: "03",
      title: "Verify",
      description:
        "RetAI uses weight, imaging, and rules to confirm item identity and condition in seconds.",
      icon: VerifyIcon,
    },
    {
      step: "04",
      title: "Route",
      description:
        "Return is confirmed, refund triggered, and item routed to restock, resale, or recycle.",
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
            Four steps. Zero staff. Every return verified at intake.
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
