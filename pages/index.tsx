import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface Engineer {
  name: string;
  social?: {
    facebook: boolean;
    twitter: boolean;
  };
}

const Home: NextPage = () => {
  function getAsync(
    id: string
  ): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: id,
        });
      }, 1000);
    });
  }

  async function asyncFn() {
    const result = await getAsync("111");

    return console.log(`The result is ${result}`);
  }

  asyncFn().then((result) => result);

  return <div className={styles.container}>Hello World</div>;
};

export default Home;
