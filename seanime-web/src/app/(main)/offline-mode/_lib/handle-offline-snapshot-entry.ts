import { API_ENDPOINTS } from "@/api/generated/endpoints"
import { useCreateOfflineSnapshot, useGetOfflineSnapshotEntry, useSyncOfflineData } from "@/api/hooks/offline.hooks"
import { useWebsocketMessageListener } from "@/app/(main)/_hooks/handle-websockets"
import { WSEvents } from "@/lib/server/ws-events"
import { useQueryClient } from "@tanstack/react-query"

export function useHandleOfflineSnapshotEntry() {
    const qc = useQueryClient()

    const { mutate, isPending: isCreating } = useCreateOfflineSnapshot()

    const { mutate: sync, isPending: isSyncing } = useSyncOfflineData()

    const { data, isLoading } = useGetOfflineSnapshotEntry()

    useWebsocketMessageListener({
        type: WSEvents.OFFLINE_SNAPSHOT_CREATED,
        onMessage: _ => {
            qc.invalidateQueries({ queryKey: [API_ENDPOINTS.OFFLINE.GetOfflineSnapshotEntry.key] })
        },
    })

    return {
        createOfflineSnapshot: mutate,
        snapshot: data,
        isLoading,
        isCreating,
        sync,
        isSyncing,
    }
}
