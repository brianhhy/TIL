package ch13.se02.exam01;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Product<K, M> {

	private K kind;
	private M model;
	

}
