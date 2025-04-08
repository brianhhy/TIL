package ch08.sec02;

public interface RemoteControl {
	int VOLUME = 0;
	void turnOn();		// public abstract
	default int add (int x, int y) {
		return x+y;
	}
}
