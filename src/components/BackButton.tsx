import { ArrowLeft } from "phosphor-react";

interface BackButtonProps {
    onFeedbackREsetRequest: () => void;
}

export function BackButton(props: BackButtonProps) {
    return (

        <button 
        type="button" 
        className=" absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 focus:border-brand-500 focus:border-2 focus:outline-none" title="fechar formulário de feedback"
        onClick={props.onFeedbackREsetRequest}
        >
            <ArrowLeft weight="bold" className="w-4 h4"/>
        </button>

    );
}