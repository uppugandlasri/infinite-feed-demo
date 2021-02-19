import React from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import styles from "../styles/Home.module.css";

export default function Info() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div>This is Info Page</div>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back
      </Button>
    </div>
  );
}
