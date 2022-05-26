import { FeedbackTypes, feedbackTypes } from "../";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypesStepProps {
    onFeedbackTypeChange: (type: FeedbackTypes) => void;
}

export function FeedbackTypesStep(props: FeedbackTypesStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe o seu feedback</span>
                <CloseButton />
            </header>
            <main className="flex py-8 gap-4">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg w-24 py-8 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() => props.onFeedbackTypeChange(key as FeedbackTypes)}
                        >
                            <img src={value.icon.source} alt={value.icon.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </main>
        </>
    );
}