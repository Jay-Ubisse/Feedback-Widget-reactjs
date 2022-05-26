import { FeedbackTypes, feedbackTypes } from "..";
import { BackButton } from "../../BackButton";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

interface FeedbackTypesContentProps {
    selectedFeedbackType: FeedbackTypes;
    onFeedbackTypeChange: (type: FeedbackTypes | null) => void;
}

export function FeedbackContentStep(props: FeedbackTypesContentProps) {

    function handleFeedbackReset() {
        props.onFeedbackTypeChange(null);
    }

    return (
        <>
            <header>
                <BackButton onFeedbackREsetRequest={handleFeedbackReset} />
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypes[props.selectedFeedbackType].icon.source}
                        alt={feedbackTypes[props.selectedFeedbackType].icon.alt}
                        className="h-6 w-6"
                    />
                    {feedbackTypes[props.selectedFeedbackType].title}
                </span>
                <CloseButton />
            </header>
            <form className="my-2 w-full">
                <textarea
                    placeholder="Descreva com detalhes o problema que está a enfrentar."
                    className="bg-transparent px-2 placeholder-zinc-400 text-zinc-200 min-w-[304px] min-h-[114px] w-full text-sm rounded-md border-zinc-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none resize-none"
                />
            </form>
            <footer className="flex gap-2 mt-2 w-full">
                <ScreenshotButton />
                <button
                    type="submit"
                    className="p-2 bg-brand-500 rounded-[4px] border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
                >
                    Enviar feedback
                </button>
            </footer>
        </>
    );
}