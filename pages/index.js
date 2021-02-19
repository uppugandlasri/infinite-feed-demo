import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PostList />
    </div>
  );
}
