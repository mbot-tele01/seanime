import { PlaylistManager } from "@/app/(main)/(library)/_containers/playlists/_components/playlist-manager"
import { useCreatePlaylist, useDeletePlaylist, useUpdatePlaylist } from "@/app/(main)/(library)/_containers/playlists/_lib/playlist-actions"
import { Vaul, VaulContent, VaulHeader, VaulTitle, VaulTrigger } from "@/components/shared/vaul"
import { Button, CloseButton } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TextInput } from "@/components/ui/text-input"
import { Playlist } from "@/lib/server/types"
import React from "react"
import { toast } from "sonner"

type PlaylistModalProps = {
    playlist?: Playlist
    trigger: React.ReactNode
}

export function PlaylistModal(props: PlaylistModalProps) {

    const {
        trigger,
        ...rest
    } = props

    const [isOpen, setIsOpen] = React.useState(false)
    const [name, setName] = React.useState(props.playlist?.name ?? "")
    const [paths, setPaths] = React.useState<string[]>(props.playlist?.localFiles?.map(l => l.path) ?? [])

    const isUpdate = !!props.playlist

    const { createPlaylist, isCreating } = useCreatePlaylist()

    const { deletePlaylist, isDeleting } = useDeletePlaylist()

    const { updatePlaylist, isUpdating } = useUpdatePlaylist()

    function handleSubmit() {
        if (name.length === 0) {
            toast.error("Please enter a name for the playlist")
            return
        }
    }

    return (
        <Vaul open={isOpen} onOpenChange={v => setIsOpen(v)}>
            <VaulTrigger asChild>
                {trigger}
            </VaulTrigger>
            <VaulContent className="h-full mt-24 lg:mt-72 max-h-[90%]">
                <CloseButton className="absolute top-2 right-2" onClick={() => setIsOpen(false)} />
                <div className="w-full p-4 lg:p-8 space-y-4" data-vaul-no-drag>
                    <VaulHeader className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <VaulTitle>
                            {isUpdate ? "Edit playlist" : "Create playlist"}
                        </VaulTitle>
                    </VaulHeader>

                    <div className="space-y-4">
                        <TextInput
                            label="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <Separator />

                        <PlaylistManager
                            paths={paths}
                            setPaths={setPaths}
                        />
                        <div className="">
                            <Button disabled={paths.length === 0} onClick={handleSubmit}>
                                {isUpdate ? "Update" : "Create"}
                            </Button>
                        </div>
                    </div>
                </div>
            </VaulContent>
        </Vaul>
    )
}