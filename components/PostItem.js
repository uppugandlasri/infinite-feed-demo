import React from "react";
import { Card } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function PostItem({ title }) {
  const router = useRouter();
  return (
    <div>
      <Card
        className={styles.card}
        onClick={() => {
          router.push("/info");
        }}
      >
        {title}
      </Card>
    </div>
  );
}
