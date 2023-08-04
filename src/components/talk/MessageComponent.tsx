yimport { useRef } from "react";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// emailjs
import emailjs from "@emailjs/browser";

const MessageComponent = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm("service_id", "template_id", form.current ?? "", "").then(
            (result: any) => {
                //   console.log(result.text);
                toast.success("message sent successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //   console.log('message sent');
            },
            (error: any) => {
                //   console.log(error.text);
                toast.error("please fill form fields", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        );

        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-10">
                {/* <h1 className="font-bold text-sm dark:text-slate-500 mb-1">First name</h1> */}
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full p-2  rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-full p-2 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                    required
                />

                {/* <h1 className="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1> */}

                <textarea
                    rows={5}
                    placeholder="Message"
                    name="message"
                    className="w-full p-2 h-36  rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                    required
                />

                <div className="w-full flex flex-row justify-between items-center">
                    <button
                        type="submit"
                        className="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
                    >
                        <span className="mt-[2px]">Send</span>
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default MessageComponent;
