package ch07.sec02;

public class SmartPhoneExample {

	public static void main(String[] args) {
		SmartPhone myPhone = new SmartPhone("갤럭시", "은색");
		
		System.out.println("모델: " + myPhone.model);
		System.out.println("색상: " + myPhone.color);
		
		System.out.println("와이파이 상태: " + myPhone.wifi);
		
		myPhone.bell();
		myPhone.sendVoice("여보세요");
		myPhone.receieveVoice("안녕하세요 저는 홍길동인데요");
		myPhone.sendVoice("네 반갑습니다");
		myPhone.hangUp();
		
		myPhone.setWifi(true);
		myPhone.internet();
		
		Phone myPhone2 = new SmartPhone("아이폰", "검정");			// 자식 타입이 부모 타입으로 형 변환됨
//		myPhone2.internet();				사용불가, Phone에는 internet()이 없음
//		smartPhone myPhone3 = myPhone2;		Phone이 부모고 smartPhone이 자식이므로 myPhone2(Phone)는 myPhone3(smartPhone)에 담길 수 없다
	
		// 강제 형변환 (원래 자식타입이 부모타입으로 형변환된 경우에만 가능)
		SmartPhone myPhone3 = (SmartPhone)myPhone2;
		myPhone3.internet();	// 사용 가능
		
//		Phone myPhone4 = new Phone();	// 부모 클래스 객체
//		SmartPhone myPhone5 = (SmartPhone)myPhone4;
//		myPhone5.internet();
		
	}

}
