import React, { useMemo } from 'react'
import styles from './accordionTest.module.scss'
import { Accordionv2 } from '../components/accordionv2/accordionv2'

export const BurgAfAccordion = () => {
    const trigger = useMemo(() => {
        return <div className={styles.ruleTrigger}>
            <p>Accordion Title</p>
        </div>
    }, [])
    return <Accordionv2 className={styles.rules} trigger={trigger}>
        <div className={styles.ruleContent}>
            Hej Mikkel her er indholdet af din accordion
        </div>
    </Accordionv2>
}

const AboutPage = () => {
    return (
        <>
            <p>Just to play around with some navigation and a placeholder if i decide to add more.</p>
            <BurgAfAccordion />
        </>
    )
}

export default AboutPage;