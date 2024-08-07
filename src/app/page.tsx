import Image from "next/image";
import styles from "./page.module.css";
import { inter, roboto } from "./font";

export default function Home() {
  return (
    <>
      <h1 className={inter.className}>Home</h1>
      <p className={roboto.className}>Paragraph</p>
    </>
  );
}
