import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {useState, forwardRef} from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <div className="flex justify-center bg-red-400 h-full">
                    <div className="self-center bg-blue-200 text-center p-6 rounded-lg">
                        <div className=" text-xl font-semibold pb-6">The Wedding</div>
                        <div className=" text-3xl font-bold pb-1">Jhonny &amp; Manembo</div>

                        <div className=" pb-8">Sabtu, 32 Agustus 1990</div>

                        <div className="text-sm font-thin ">Untuk</div>
                        <div className="text-lg font-bold pb-8">
                            Jony Morena &amp; Keluarga
                        </div>

                        <button onClick={handleClose}>Open</button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
