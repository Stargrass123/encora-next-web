import React from "react";
import { Smartphone, Award, Radio } from "lucide-react";
import { BinIcon, TagsIcon, VerifyIcon, ConnectIcon } from "@/components/icon";

export const threeSteps = [
    {
        img: "/images/Borrow_image.jpeg",
        title: "01 — Borrow",
        sub: "A QR, staff scan, or RFID workflow links a tagged container to the student, customer, phone number, or account.",
    },
    {
        img: "/images/three step photo.png",
        title: "02 — Remind",
        sub: "Text or email reminders tell users when and where to return. Standard return window: 7 days.",
    },
    {
        img: "/images/three step reuse step 3.png",
        title: "03 — Return + Clear",
        sub: "RFID, QR, or staff scan checks the container back in, marks it returned, and clears it from the user's account.",
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
        title: "01 — Assign",
        body: "A QR, staff scan, or RFID workflow links a tagged container to a student, customer, phone number, or account.",
    },
    {
        icon: <BinIcon />,
        title: "02 — Use",
        body: "The participant takes the meal as usual. The container remains assigned while checked out.",
    },
    {
        icon: <VerifyIcon />,
        title: "03 — Remind",
        body: "Users receive text or email reminders with the return deadline, approved return location, and instructions. Standard return window: 7 days.",
    },
    {
        icon: <BinIcon />,
        title: "04 — Return",
        body: "At a smart bin or assisted return point, the tagged container is checked in by RFID, QR, or staff scan.",
    },
    {
        icon: <VerifyIcon />,
        title: "05 — Clear",
        body: "The container is marked as returned and cleared from the user's account. Late or missing containers may trigger a replacement fee.",
    },
    {
        icon: <ConnectIcon />,
        title: "06 — Track",
        body: "Operators can view return status, late containers, reminder activity, recovery rates, and container inventory from the dashboard or reporting workflow.",
    },
];
