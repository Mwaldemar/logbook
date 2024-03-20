import React, { FC, ReactNode } from "react";
import clsx from 'clsx';
import styles from './accordion.module.scss';

interface AccordionProps {
    className?: string
    trigger: ReactNode;
    children: ReactNode;
    id: string;
    desktopSidepanel?: boolean;
    mobileSidepanel?: boolean;
    SVG?: ReactNode
}

export const Accordion: FC<AccordionProps> = ({ className, trigger, children, id, desktopSidepanel, mobileSidepanel, SVG }) => {
    return (
        <div className={clsx(styles.accordionWrapper, className)}>
            <input type="checkbox" id={id} className={styles.checkbox} />
            <label htmlFor={id} className={styles.trigger}>
                {trigger}
            </label>
            <div className={clsx(styles.content, desktopSidepanel && styles.desktopSidepanel, mobileSidepanel && styles.mobileSidepanel)}>
                <label htmlFor={id} className={styles.close}>
                    {SVG}
                </label>
                {children}
            </div>
        </div>
    )
}