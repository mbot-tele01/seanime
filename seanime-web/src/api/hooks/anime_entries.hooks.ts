import { useServerMutation, useServerQuery } from "@/api/client/requests"
import {
    AnimeEntryBulkAction_Variables,
    AnimeEntryManualMatch_Variables,
    FetchAnimeEntrySuggestions_Variables,
    OpenAnimeEntryInExplorer_Variables,
    ToggleAnimeEntrySilenceStatus_Variables,
    UpdateAnimeEntryProgress_Variables,
} from "@/api/generated/endpoint.types"
import { API_ENDPOINTS } from "@/api/generated/endpoints"
import { AL_BasicMedia, Anime_LocalFile, Anime_MediaEntry, Anime_MissingEpisodes, Nullish } from "@/api/generated/types"
import { useQueryClient } from "@tanstack/react-query"

export function useGetAnimeEntry(id: Nullish<string | number>) {
    return useServerQuery<Anime_MediaEntry>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.endpoint.replace("id", String(id)),
        method: API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.methods[0],
        queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.key, id],
        enabled: !!id,
    })
}

export function useAnimeEntryBulkAction(id?: Nullish<number>) {
    const queryClient = useQueryClient()

    return useServerMutation<Array<Anime_LocalFile>, AnimeEntryBulkAction_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryBulkAction.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryBulkAction.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryBulkAction.key, id],
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.key] })
        },
    })
}

export function useOpenAnimeEntryInExplorer() {
    return useServerMutation<boolean, OpenAnimeEntryInExplorer_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.OpenAnimeEntryInExplorer.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.OpenAnimeEntryInExplorer.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.OpenAnimeEntryInExplorer.key],
        onSuccess: async () => {

        },
    })
}

export function useFetchAnimeEntrySuggestions() {
    return useServerMutation<Array<AL_BasicMedia>, FetchAnimeEntrySuggestions_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.FetchAnimeEntrySuggestions.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.FetchAnimeEntrySuggestions.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.FetchAnimeEntrySuggestions.key],
        onSuccess: async () => {

        },
    })
}

export function useAnimeEntryManualMatch() {
    const queryClient = useQueryClient()

    return useServerMutation<Array<Anime_LocalFile>, AnimeEntryManualMatch_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryManualMatch.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryManualMatch.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.AnimeEntryManualMatch.key],
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_COLLECTION.GetLibraryCollection.key] })
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.key] })
        },
    })
}

export function useGetMissingEpisodes(enabled?: boolean) {
    return useServerQuery<Anime_MissingEpisodes>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.GetMissingEpisodes.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.GetMissingEpisodes.methods[0],
        queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetMissingEpisodes.key],
        enabled: enabled ?? true, // Default to true if not provided
    })
}

export function useGetAnimeEntrySilenceStatus(id: Nullish<string | number>) {
    const { data, ...rest } = useServerQuery({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntrySilenceStatus.endpoint.replace("id", String(id)),
        method: API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntrySilenceStatus.methods[0],
        queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntrySilenceStatus.key],
        enabled: !!id,
    })

    return { isSilenced: !!data, ...rest }
}

export function useToggleAnimeEntrySilenceStatus() {
    const queryClient = useQueryClient()

    return useServerMutation<boolean, ToggleAnimeEntrySilenceStatus_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.ToggleAnimeEntrySilenceStatus.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.ToggleAnimeEntrySilenceStatus.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.ToggleAnimeEntrySilenceStatus.key],
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntrySilenceStatus.key] })
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetMissingEpisodes.key] })
        },
    })
}

export function useUpdateAnimeEntryProgress() {
    const queryClient = useQueryClient()

    return useServerMutation<boolean, UpdateAnimeEntryProgress_Variables>({
        endpoint: API_ENDPOINTS.ANIME_ENTRIES.UpdateAnimeEntryProgress.endpoint,
        method: API_ENDPOINTS.ANIME_ENTRIES.UpdateAnimeEntryProgress.methods[0],
        mutationKey: [API_ENDPOINTS.ANIME_ENTRIES.UpdateAnimeEntryProgress.key],
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.ANIME_ENTRIES.GetAnimeEntry.key] })
        },
    })
}

