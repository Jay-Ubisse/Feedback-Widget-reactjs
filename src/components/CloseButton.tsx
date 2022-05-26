import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton() {
    return (
        <Popover.Button className=" absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 focus:border-brand-500 focus:border-2 focus:outline-none" title="fechar formulário de feedback">
            <X weight="bold" className="w-4 h4"/>
        </Popover.Button>
    );
}