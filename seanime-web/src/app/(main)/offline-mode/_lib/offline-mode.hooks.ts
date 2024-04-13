import { useWebsocketMessageListener } from "@/atoms/websocket"
import { SeaEndpoints, WSEvents } from "@/lib/server/endpoints"
import { useSeaMutation, useSeaQuery } from "@/lib/server/query"
import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

type CreateOfflineSnapshot_QueryVariables = {
    animeMediaIds: number[]
}

export type OfflineSnapshotEntry = {
    id: number
    createdAt: string
}

export function useOfflineSnapshotEntry() {
    const qc = useQueryClient()

    const { mutate, isPending: isCreating } = useSeaMutation<void, CreateOfflineSnapshot_QueryVariables>({
        endpoint: SeaEndpoints.OFFLINE_SNAPSHOT,
        mutationKey: ["create-offline-snapshot"],
        onSuccess: () => {
            toast.info("Creating snapshot...")
        },
    })

    const { data, isLoading } = useSeaQuery<OfflineSnapshotEntry>({
        endpoint: SeaEndpoints.OFFLINE_SNAPSHOT_ENTRY,
        queryKey: ["get-offline-snapshot-entry"],
        muteError: true,
    })

    useWebsocketMessageListener({
        type: WSEvents.OFFLINE_SNAPSHOT_CREATED,
        onMessage: _ => {
            qc.refetchQueries({ queryKey: ["get-offline-snapshot-entry"] })
        },
    })

    return {
        createOfflineSnapshot: mutate,
        snapshot: data,
        isLoading,
        isCreating,
    }
}