

import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="place-self-end bg-gradient-to-br from-stone-200 to-stone-200 group flex items-center justify-center gap-2 h-[3rem] w-[8rem]  rounded-full  transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit{" "}
                </>
            )}
        </button>
    );
}
