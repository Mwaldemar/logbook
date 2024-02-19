import { PostPreview } from '@/components/PostPreview';
import { getPostMetadata } from '@/components/getPostMetadata';

import styles from './page.module.scss'

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    // eslint-disable-next-line react/jsx-key
    <PostPreview key={post.slug} {...post} />
  ));
  
  return <div className={styles.logSpace}>{postPreviews}</div>
};

export default HomePage;