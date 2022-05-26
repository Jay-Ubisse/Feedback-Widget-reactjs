import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        icon: {
            source: bugImageUrl,
            alt: "Ícone de um inseto"
        },
        title: "Problema"
    },
    IDEA: {
        icon: {
            source: ideaImageUrl,
            alt: "Ícone de uma lâmpada"
        },
        title: "Sugestão"
    },
    OTHER: {
        icon: {
            source: otherImageUrl,
            alt: "Ícone de uma nuvem de pensamento"
        },
        title: "Outro"
    },
};

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
    
    return (
        <div className="bg-zinc-900 p-4 relative mb-4 rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbackTypesStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                selectedFeedbackType={feedbackType}
                onFeedbackTypeChange={setFeedbackType}
                />
            )}
            <footer>
                <span className="text-xs text-neutral-400">Desenvolvido por <a href="https://github.com/Jay-Ubisse" className="underline underline-offset-3 focus:border-brand-500 focus:border-2 focus:outline-none">Jay Ubisse</a></span>
            </footer>
        </div>
    )
}