import React, { FC, useState } from "react";
import clsx from "clsx";
import styles from './accordion.module.scss';

interface AccordionProps {
    items: { title: string; content: string }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        setActiveIndices((prevIndices) => {
            if (prevIndices.includes(index)) {
                return prevIndices.filter((i) => i !== index);
            } else {
                return [...prevIndices, index];
            }
        });
    };

    const handleClose = () => {
        setActiveIndices([]);
    };

    return (
        <>
            {/* Overlay to gray out content */}
            {activeIndices.length > 0 && (
                <div className={styles.overlay} onClick={handleClose}></div>
            )}
            <div className={clsx(styles.accordionWrapper)}>
                {items.map((item, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`accordion-checkbox-${index}`}
                            className={styles.checkbox}
                            checked={activeIndices.includes(index)}
                            onChange={() => handleToggle(index)}
                        />
                        <label
                            htmlFor={`accordion-checkbox-${index}`}
                            className={clsx(styles.label, {
                                [styles.active]: activeIndices.includes(index),
                                [styles.firstLabel]: index === 0,
                            })}
                        >
                            <span>{item.title}</span>
                            <button
                                className={styles.button}
                                onClick={() => handleToggle(index)}
                            >
                                <div className={clsx(styles.svgWrapper, styles.active)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={clsx(styles.svg, {
                                            [styles.rotate]: activeIndices.includes(index),
                                        })}
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </button>
                        </label>
                        <div
                            className={clsx(styles.content, {
                                [styles.active]: activeIndices.includes(index),
                            })}
                        >
                            <button className={styles.closeButton} onClick={handleClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={styles.closeIcon}
                                    style={{ zIndex: 1000 }}
                                >
                                    <path d="M18 6L6 18M6 6l12 12"></path>
                                </svg>
                            </button>

                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Accordion;
