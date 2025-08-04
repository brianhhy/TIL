export async function getData() {
  try {
    const response = await fetch('https://catfact.ninja/facts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
}
