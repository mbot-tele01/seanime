"use client"
import { serverStatusAtom } from "@/atoms/server-status"
import { Button } from "@/components/ui/button"
import { MAL_CLIENT_ID } from "@/lib/anilist/config"
import { SeaEndpoints } from "@/lib/server/endpoints"
import { useSeaMutation } from "@/lib/server/queries/utils"
import { useQueryClient } from "@tanstack/react-query"
import { useAtomValue } from "jotai/react"
import React from "react"
import { BiCheckCircle, BiLogOut, BiXCircle } from "react-icons/bi"
import { SiMyanimelist } from "react-icons/si"

export default function Page() {
    const status = useAtomValue(serverStatusAtom)
    const qc = useQueryClient()

    const OAUTH_URL = React.useMemo(() => {
        const challenge = generateRandomString(50)
        const state = generateRandomString(10)
        sessionStorage.setItem("mal-" + state, challenge)
        return `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${MAL_CLIENT_ID}&state=${state}&code_challenge=${challenge}&code_challenge_method=plain`
    }, [])

    const { mutate: logout, isPending, isSuccess } = useSeaMutation<boolean>({
        endpoint: SeaEndpoints.MAL_LOGOUT,
        onSuccess: () => {
            qc.refetchQueries({ queryKey: ["status"] })
        },
    })

    if (!status?.mal) return (
        <div className="p-12 text-center">
            <p className="flex justify-center w-full text-8xl"><SiMyanimelist /></p>
            <p className="-mt-2 pb-6 text-lg">Connect your MyAnimeList account to Seanime</p>
            <Button
                onClick={() => {
                    window.open(OAUTH_URL, "_self")
                }}
                intent={"primary"}
                size={"lg"}
            >Log in with MAL</Button>
        </div>
    )

    return (
        <div className="p-12 pt-0 space-y-0">
            <p className="flex justify-between items-center w-full text-8xl relative">
                <SiMyanimelist />
                <Button
                    intent={"alert-subtle"}
                    size={"sm"}
                    isLoading={isPending || isSuccess}
                    onClick={() => {
                        logout()
                    }}
                    leftIcon={<BiLogOut />}
                >Log out</Button>
            </p>

            <div className="border border-[--border] rounded-[--radius] p-4 bg-[--paper] text-lg space-y-2">
                <p>
                    Your MyAnimeList account is connected to Seanime.
                </p>
                <h4>Integration features:</h4>
                <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-1.5 [&>li]:truncate">
                    <li><BiCheckCircle className="text-green-300" /> Progress tracking <span className="text-[--muted] italic text-base">
                        Your progress will be automatically updated on MAL when you watch an episode on Seanime.
                    </span></li>
                    <li><BiCheckCircle className="text-green-300" /> List synchronization <span className="text-[--muted] italic text-base">
                    </span>
                    </li>
                    <li><BiXCircle className="text-red-400" /> List management <span className="text-[--muted] italic text-base">
                        To manage your lists (status, score, ...), use the official MAL website or app.
                    </span></li>
                </ul>
            </div>
        </div>
    )

}

function generateRandomString(length: number): string {
    let text = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}