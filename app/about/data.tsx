export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: "What is Encora?",
        answer:
            "Encora is a returns verification platform. Our kiosk hardware and RetAI software capture photo, weight, and item data at the moment of drop-off—creating a tamper-evident record of every return before a refund is issued.",
    },
    {
        question: "Do we have to replace our existing systems?",
        answer:
            "No. Encora is designed to sit alongside your existing POS, OMS, or logistics systems. We send structured return events via APIs and webhooks so you keep using the tools you already have.",
    },
    {
        question: "What hardware is involved?",
        answer:
            "Encora kiosks are freestanding units roughly the size of an ATM—suitable for store floors, mall corridors, and logistics hubs. Each unit includes a camera, weight sensor, and receipt or QR scanner. We handle installation and maintenance.",
    },
    {
        question: "How do pilots work?",
        answer:
            "Pilots typically run 60–90 days across a defined set of locations. We set baseline metrics at the start, integrate with your existing return flow, and report fraud catch rates and processing cost changes at the end.",
    },
    {
        question: "Can Encora hold refunds until verification is complete?",
        answer:
            "Yes. Encora can trigger a refund hold in your OMS while the item is being verified, releasing it automatically once the return is confirmed—or flagging it for manual review if something doesn't match.",
    },
];
