import React, { FC, useState } from "react";
import clsx from 'clsx';
import styles from './accordion.module.scss';

interface AccordionProps {
    items: { title: string; content: string }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClose = () => {
        setOpenIndex(null)
    }

    return (
        <div className={clsx(styles.accordionWrapper)}>
            <div className={styles.backdrop} onClick={handleClose}></div>
            {items.map((item, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={`accordion-checkbox-${index}`}
                        className={styles.checkbox}
                        checked={openIndex === index}
                        onChange={() => setOpenIndex(openIndex)}
                    />
                    <label
                        htmlFor={`accordion-checkbox-${index}`}
                        className={clsx(styles.label, {
                            [styles.active]: openIndex === index,
                        })}
                        onClick={() => handleButtonClick(index)}
                    >
                        <span>{item.title}</span>
                        <button
                            type='button'
                        >
                            <div>
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
                                    className={openIndex === index ? styles.rotated : ''}
                                >
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                        </button>
                    </label>
                    <div
                        className={clsx(styles.content)}
                    >
                        <button className={styles.closeButton} onClick={() => handleButtonClick(index)}>
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
                        <p className={styles.accordionContent}>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
