import React, { useMemo } from 'react'
import { Accordion } from '../components/accordion/accordion';
import styles from './faq.module.scss'
import CloseButtonSVG from '../svg/CloseButtonSvg'
import ArrowSvg from '../svg/ArrowSvg';
import clsx from 'clsx';

const items = [
  {
    id: "1",
    title: "Accordion Item 1",
    content: "Content for Accordion Item 1",
  },
  {
    id: "2",
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
  },
  {
    id: "3",
    title: "Accordion Item 3",
    content: "Content for Accordion Item 3",
  },
  {
    id: "4",
    title: "Accordion Item 4",
    content: "Content for Accordion Item 4",
  },
];

const FAQ = () => {
  const trigger = useMemo(() => {
    return items.map((item, index) => (
      <div key={item.id} className={styles.ruleTrigger}>
        <p>{item.title}</p>
        <span className={clsx(styles.arrowSvg, index === 2 ? styles.right : styles.up )}>{ArrowSvg}</span>
      </div>
    ))
  }, [])
  return (
    <>
      <h2 className={styles.title}>FAQ</h2>
      {trigger.map((item, index) => (
        <Accordion
          key={index}
          trigger={item}
          id={items[index].id}
          SVG={CloseButtonSVG}
        >
          <div className={styles.accordionContents}>
            <h2 className={clsx(styles.title, styles.mobileSidepanel)}>{items[index].title}</h2>
            <p className={clsx(styles.content, styles.mobileSidepanel, styles.desktopSidepanel)}>{items[index].content}</p>
          </div>
        </Accordion>
      ))}
    </>
  )
}

export default FAQ;