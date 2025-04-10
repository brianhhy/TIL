package ch12.sec10;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PatternExample {
	public static void main(String[] args) {
		String regExp = "(02|010)-\\d{3,4}-\\d{4}";
		String data = "010-123-4567";
		
		boolean result = Pattern.matches(regExp, data);
		if(result) {
			System.out.println("정규식과 일치합니다.");
		} else {
			System.out.println("정규식과 일치하지 않습니다.");
		}
		regExp = "\\w+@\\w+\\.\\w+(\\.\\w+)?";
		data = "angel@mycompanycom";
		result = Pattern.matches(regExp, data);
		
		if(result) {
			System.out.println("정규식과 일치합니다");
		} else {
			System.out.println("정규식과 일치하지 않습니다");
		}
				
		Pattern p = Pattern.compile("b[a-z]*");	// b로 시작하는 영문소문자 0개 이상
		Matcher m = p.matcher("ball");
		System.out.println(m.matches());
		System.out.println(p.matcher("abatman").matches());
		
		String source = "안녕하세요 저는 홍길동입니다. 어떻고 저떻고 제 전화번호는 010-1234-5678입니다.";
		p = Pattern.compile("(0\\d{1,2})-(\\d{3,4})-(\\d{4})");	// (그룹핑)
		m = p.matcher(source);
		while(m.find()) {
			System.out.println(m.group());		// 전체
			System.out.println(m.group(1) + "-" + m.group(2) + "-" + m.group(3));	//그룹단위
			
		}
		
	}
}
