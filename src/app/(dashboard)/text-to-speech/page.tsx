import { Metadata } from "next";
import { trpc, prefetch, HydrateClient } from "@/trpc/server";

import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";

export const metadata: Metadata = { title: "Text to speech" }

export default async function TextToSpeech({
    searchParams
}: {
    searchParams: Promise<{ text?: string, voiceId?: string }>
}) {
    const { text, voiceId } = await searchParams;
    prefetch(trpc.voices.getAll.queryOptions());

    return (
        <HydrateClient>
            <TextToSpeechView initialValues={{ text, voiceId }} />
        </HydrateClient>
    );
};