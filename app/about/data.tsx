export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "What is Encora?",
        answer:
            "Encora builds return infrastructure, proven in reusable container pilots. RetAI is a potential future direction; not validated or deployed for retail returns. It would capture photo, weight and item data at drop-off, creating a record of each return before a refund is issued.",
    },
    {
        question: "Do we have to replace our existing systems?",
        answer:
            "No. RetAI would sit alongside your existing POS, OMS or logistics systems. Connecting to them would require integration work.",
    },
    {
        question: "What hardware is involved?",
        answer:
            "Encora kiosks are freestanding units roughly the size of an ATM—suitable for store floors, mall corridors, and logistics hubs. A retail unit would include a camera, weight sensor and receipt or QR scanner. We handle installation and maintenance.",
    },
    {
        question: "How do pilots work?",
        answer:
            "A RetAI pilot would be scoped with you, likely 60-90 days at a defined set of locations, with baseline metrics agreed up front. No retail pilot has run yet.",
    },
    {
        question: "Can Encora hold refunds until verification is complete?",
        answer:
            "That is the intended design: with integration, your OMS could hold a refund while the item is checked, then release it or flag it for review.",
    },
];
