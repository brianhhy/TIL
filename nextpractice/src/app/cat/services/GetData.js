const API_URL = 'https://api.odcloud.kr/api/15056429/v1/uddi:1b4c1847-29a3-447b-8b4c-f3001781eede_201911051431';
// 고양이 정보 API
const CAT_API_URL = 'https://catfact.ninja/facts';

export async function getData() {
  try {
    
    // 고양이 정보 API 사용
    const response = await fetch(CAT_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
}

export async function getDataWithParams(params = {}) {
  try {
    const url = new URL(CAT_API_URL);
    
    // 파라미터 추가
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }
}
