import React from "react";
import {createPortal} from 'react-dom';
import styles from "./Modal.module.css"

export interface IModalProps {
    onClose: () => void;
    children: React.ReactNode
}

export const Modal: React.FC<IModalProps> = ({
                                                 children,
                                                 onClose
                                             }) => {
    const modalRootEl = React.useRef(document.querySelector("#modal-root"));

    React.useEffect(() => {
        const handleKeyPress = (evt: KeyboardEvent) => {
            evt.code === 'Escape' && onClose();
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [onClose]);

    const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.target === evt.currentTarget && onClose();
    };

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return modalRootEl.current ? createPortal(
        <div className={styles.modal_overlay} onClick={handleBackdropClick}>
            <div className={styles.modal_content}>
                {children}
                <button onClick={onClose}>close</button>
            </div>
        </div>,
        modalRootEl.current,
    ) : null
};