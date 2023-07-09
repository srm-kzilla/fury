import React from "react";
import {toast as Toast, ToastOptions} from "react-toastify";
import classNames from "classnames";
import {BiCheck, BiInfoCircle, BiMessageDetail, BiX} from "react-icons/bi";
import Markdown from "markdown-to-jsx";

interface Props extends ContentProps {
    options?: ToastOptions;
}

export const toast = (props: Props) => {
    return Toast(<ToastContent {...props} />, {
        ...props.options,
        className: classNames(props.theme),
    });
};

type ToastTheme = "success" | "warning" | "error" | "info";

interface ContentProps {
    title?: string;
    message?: string;
    theme?: ToastTheme;
}

export const ToastContent = ({message, title, theme}: ContentProps) => {
    const icon = (theme: ToastTheme | undefined) => {
        switch (theme) {
            case "success":
                return <BiCheck/>;
            case "error":
                return <BiX/>;
            case "info":
                return <BiInfoCircle/>;
            case "warning":
                return <BiMessageDetail/>;
            default:
                return null;
        }
    };
    return (
        <div className={classNames("kz-toast", theme)}>
            {icon(theme)}
            <div>
                {title && <h4>{title}</h4>}
                {message && (
                    <Markdown options={{forceBlock: true}}>{message}</Markdown>
                )}
            </div>
        </div>
    );
};
