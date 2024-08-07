import Image from "next/image";
import styles from "./page.module.css";
import { inter, roboto } from "./font";
import Aashi from "../img/aashi.jpg";

export default function Home() {
  return (
    <>
      <div style={{ width: "500px", height: "500px", position: "relative" }}>
        <Image
          priority
          placeholder="blur"
          fill
          src={Aashi}
          alt="Daugher image"
        />
      </div>
      <h1 className={inter.className}>Home</h1>
      <p className={roboto.className}>Paragraph</p>
    </>
  );
}
