"use client"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  forceLight?: boolean
}

export default function Logo({ forceLight = false }: LogoProps) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Show white/light logo when over dark hero background
    const showLightLogo = forceLight || (mounted && resolvedTheme === "dark")

    return (
        <div className="relative">
            <Image
                src="/images/encora_light_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className={`h-8 w-auto transition-opacity duration-300 ${showLightLogo ? "block" : "hidden"}`}
                priority
            />
            <Image
                src="/images/encora_dark_logo.png"
                alt="Encora Logo"
                width={120}
                height={40}
                className={`h-8 w-auto transition-opacity duration-300 ${showLightLogo ? "hidden" : "block"}`}
                priority
            />
        </div>
    )
}
