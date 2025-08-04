'use client';

import styles from "../page.module.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { useData } from "./hooks/useData";

export default function Menu() {
  const { data, loading, error, refreshData } = useData();

  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>고양이 이야기</h1>
          <div>
            <Button href="/" variant="secondary">
              홈으로 돌아가기
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>데이터를 불러오는 중...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>고양이 이야기</h1>
          <div>
            <Button href="/" variant="secondary">
              홈으로 돌아가기
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>오류: {error}</p>
            <Button onClick={refreshData} variant="outline" style={{ marginTop: '20px' }}>
              다시 시도
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>고양이 이야기</h1>
        
        <div style={{ marginBottom: '30px' }}>
          <Button href="/" variant="secondary">
            홈으로 돌아가기
          </Button>
          <Button onClick={refreshData} variant="outline" style={{ marginLeft: '10px' }}>
            새로고침
          </Button>
        </div>

        {data && data.data && (
          <div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {data.data.map((fact, index) => (
                <Card 
                  key={index}
                  fact={fact}
                  index={index}
                  totalFacts={data.data.length}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
