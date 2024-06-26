"use client"
import { cn } from "@/components/ui/core/styling"
import { getAssetUrl } from "@/lib/server/assets"
import { useThemeSettings } from "@/lib/theme/hooks"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"


export function CustomLibraryBanner() {

    const ts = useThemeSettings()
    const image = React.useMemo(() => getAssetUrl(ts.libraryScreenCustomBannerImage), [ts.libraryScreenCustomBannerImage])

    return (
        <>
            <div className="py-20"></div>
            <div
                className="CUSTOM_LIB_BANNER_FADE_BG w-full absolute z-[1] top-0 h-[44rem] opacity-100 bg-gradient-to-b from-[--background] via-[--background] via-80% to-transparent via"
            />
            <div className="__header h-[20rem] z-[1] top-0 w-full absolute group/library-header">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn(
                        "h-[30rem] z-[0] w-full flex-none absolute top-0 overflow-hidden",
                    )}
                >
                    <div
                        className="CUSTOM_LIB_BANNER_TOP_FADE w-full absolute z-[2] top-0 h-[5rem] opacity-40 bg-gradient-to-b from-[--background] to-transparent via"
                    />
                    <div
                        className={cn(
                            "CUSTOM_LIB_BANNER_IMG z-[1] absolute inset-0 w-full h-full bg-cover bg-no-repeat transition-opacity duration-1000",
                        )}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: ts.libraryScreenCustomBannerPosition || "50% 50%",
                            opacity: (ts.libraryScreenCustomBannerOpacity || 100) / 100,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    />
                    <div
                        className="CUSTOM_LIB_BANNER_BOTTOM_FADE w-full z-[2] absolute bottom-0 h-[20rem] bg-gradient-to-t from-[--background] via-opacity-50 via-10% to-transparent"
                    />
                    <div className="h-full absolute z-[2] w-full xl-right-48">
                        <Image
                            src={"/mask-2.png"}
                            alt="mask"
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                            className={cn(
                                "object-cover object-left z-[2] transition-opacity duration-1000 opacity-10",
                            )}
                        />
                    </div>
                    <div className="h-full absolute z-[2] w-full xl:-right-48">
                        <Image
                            src={"/mask.png"}
                            alt="mask"
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                            className={cn(
                                "object-cover object-right z-[2] transition-opacity duration-1000 opacity-10",
                            )}
                        />
                    </div>
                </motion.div>
            </div>
        </>
    )

}
