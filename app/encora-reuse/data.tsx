import React from "react";
import { Smartphone, Award, Radio } from "lucide-react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const threeSteps = [
    {
        img: "/images/Borrow_image.jpeg",
        title: "Borrow",
        sub: "Scan a QR (or staff assign) to link the container to the student.",
    },
    {
        img: "/images/three step photo.png",
        title: "Return",
        sub: "Tagged containers are brought to the bin; RFID or QR identifies the container and links it back to the user.",
    },
    {
        img: "/images/three step reuse step 3.png",
        title: "Verified check-in",
        sub: "Tagged containers are checked in, marked as returned, and cleared from the user's account.",
    },
];

export const modes = [
    {
        icon: <Smartphone className="w-5 h-5" />,
        title: "App-less QR",
        sub: "Default. No download. SMS/email reminders.",
    },
    {
        icon: <Award className="w-5 h-5" />,
        title: "Encora App (optional)",
        sub: "Rewards, history, push reminders.",
    },
    {
        icon: <Radio className="w-5 h-5" />,
        title: "Staff/RFID (BOH)",
        sub: "Low-range RFID for fast assignment; no stray scans.",
    },
];

export const howSteps = [
    {
        icon: <TagsIcon />,
        title: "Assign (Tag)",
        body: "QR or staff/RFID links container ↔ student ID/phone.",
    },
    {
        icon: <TagsIcon />,
        title: "Use (Archive)",
        body: "Students dine as usual; container stays tagged to them.",
    },
    {
        icon: <BinIcon />,
        title: "Return",
        body: "Container is brought to the bin or assisted-return point; RFID or QR identifies the container.",
    },
    {
        icon: <VerifyIcon />,
        title: "Verified check-in",
        body: "Container is marked returned and cleared from the user's account. Late-return status resolved automatically.",
    },
    {
        icon: <VerifyIcon />,
        title: "Operator record",
        body: "Return event logged to operator dashboard. Reminders, recovery alerts, and reporting updated in real time.",
    },
    {
        icon: <ConnectIcon />,
        title: "Sync (Webhook)",
        body: "Webhooks update campus card/POS/LMS; late reminders fire automatically.",
    },
];
