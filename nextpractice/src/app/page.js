import styles from "./page.module.css";
import Button from "./cat/components/Button";
import InstallPWA from "./components/InstallPWA";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>홈 화면</h1>
        <Button href="/menu" variant="primary">
          메뉴로 이동
        </Button>
      </main>
      <InstallPWA />
    </div>
  );
}
