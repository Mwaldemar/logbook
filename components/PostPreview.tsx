import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

import styles from '../app/page.module.scss'

export const PostPreview = (props: PostMetadata) => {
    return (
    <Link className={styles.logTitle} href={`/posts/${props.slug}`}>
    <div className={styles.logs}>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.subtitle}</p>
    </div>
    </Link>
    )
};