import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicComponent from "../components/test.tsx";

export default function About({ name }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <div>This is the about page.</div>
        <p />

        <div>
          Name: {name}
          <p />
          Long name: {name.length > 1 ? "yes" : "no"}
        </div>

        <p />
        <div>
          <DynamicComponent name/>
        </div>
      </main>
    </div>
  );
}

// // https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps(context) {
  return {
    props: {
      name: "default name",
      //   name: "-",
    },
    revalidate: 1,
  };
}
