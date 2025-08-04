// 환경변수에서 API URL 가져오기
const CAT_API_URL = process.env.NEXT_PUBLIC_CAT_API_URL || process.env.CAT_API_URL || 'https://catfact.ninja/facts';

// API 설정
const API_TIMEOUT = parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT) || 10000;
const API_RETRY_COUNT = parseInt(process.env.NEXT_PUBLIC_API_RETRY_COUNT) || 3;

export async function getData() {
  try {
    // 타임아웃 설정
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
    
    // 고양이 정보 API 사용
    const response = await fetch(CAT_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
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

// 재시도 로직이 포함된 강화된 API 함수
export async function getDataWithRetry(params = {}, retryCount = API_RETRY_COUNT) {
  let lastError;
  
  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      console.log(`API 호출 시도 ${attempt}/${retryCount}`);
      
      if (Object.keys(params).length > 0) {
        return await getDataWithParams(params);
      } else {
        return await getData();
      }
    } catch (error) {
      lastError = error;
      console.warn(`API 호출 실패 (시도 ${attempt}/${retryCount}):`, error.message);
      
      // 마지막 시도가 아니면 잠시 대기 후 재시도
      if (attempt < retryCount) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }
  
  throw new Error(`API 호출이 ${retryCount}번 시도 후 실패했습니다: ${lastError.message}`);
}

export async function getDataWithParams(params = {}) {
  try {
    const url = new URL(CAT_API_URL);
    
    // 파라미터 추가
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });
    
    // 타임아웃 설정
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
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
