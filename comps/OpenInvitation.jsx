// noinspection JSValidateTypes

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {useState, forwardRef} from "react";
import PropTypes from "prop-types";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const OpenInvitation = ({isDefault, onClickOpenInvitation, builder}) => {
    const [open, setOpen] = useState(true);

    const onClose = () => {
        setOpen(false);
        if (onClickOpenInvitation) onClickOpenInvitation();
    };

    if (builder) {
        const passedParams = {onClose, open};
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >
                {builder(passedParams)}
            </Dialog>
        );
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >
                {isDefault ? (
                    <div className="flex justify-center bg-red-400 h-full">
                        <div className="self-center bg-blue-200 text-center p-6 rounded-lg">
                            <div className=" text-xl font-semibold pb-6">The Wedding</div>
                            <div className=" text-3xl font-bold pb-1">
                                Jhonny &amp; Manembo
                            </div>

                            <div className=" pb-8">Sabtu, 32 Agustus 1990</div>

                            <div className="text-sm font-thin ">Untuk</div>
                            <div className="text-lg font-bold pb-8">
                                Jony Morena &amp; Keluarga
                            </div>

                            <button onClick={onClose}>Open</button>
                        </div>
                    </div>
                ) : null}
            </Dialog>
        </div>
    );
};

OpenInvitation.proptypes = {
    isDefault: PropTypes.bool.isRequired,
    children: PropTypes.element,
};

export default OpenInvitation;
