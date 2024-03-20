import React, { ReactNode, useId } from 'react';
import styles from './accordionv2.module.scss';
import clsx from 'clsx';
interface AccordionProps {
    className?: string
    trigger: ReactNode;
    children: ReactNode;
}
export const Accordionv2: React.FC<AccordionProps> = ({ className, trigger, children }) => {
    const id = useId()
    return (
        <div className={clsx(styles.accordion, className)}>
            <input type="checkbox" id={id} className={styles.checkbox} />
            <label htmlFor={id} className={styles.trigger}>
                {trigger}
            </label>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};