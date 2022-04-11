import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";


export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-red-600 ">
        Hello world!
      </h1>
    </Layout>
  );
}
