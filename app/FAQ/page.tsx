"use client"
import React from 'react'
import Accordion from '../components/accordion/accordion';
import styles from './faq.module.scss'

const items = [
  {
    title: "Accordion Item 1",
    content: "Content for Accordion Item 1",
  },
  {
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
  },
  {
    title: "Accordion Item 3",
    content: "Content for Accordion Item 3",
  },
  {
    title: "Accordion Item 4",
    content: "Content for Accordion Item 4",
  },
];

const FAQ = () => {
    return (
        <>
          <h2 className={styles.title}>FAQ</h2>
          <Accordion items={items} />
        </>
    )
}

export default FAQ;