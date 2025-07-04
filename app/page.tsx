import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      Hello World
    </main>
  );
}
