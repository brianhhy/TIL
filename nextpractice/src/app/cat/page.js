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
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '30px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <h2>고양이 재미있는 사실들</h2>
              <p>총 {data.total}개의 사실 중 {data.per_page}개를 보여줍니다.</p>
              <p>현재 페이지: {data.current_page} / {data.last_page}</p>
            </div>
            
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
