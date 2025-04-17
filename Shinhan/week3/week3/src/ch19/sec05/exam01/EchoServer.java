package ch19.sec05.exam01;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class EchoServer {
	
	private static ServerSocket serverSocket = null;
	private static ExecutorService executorService = Executors.newFixedThreadPool(10);
	
	public static void main(String[] args) {
		System.out.println("-----");
		System.out.println("서버 종료 q 또는 Q");
		System.out.println("-----");
		
		startServer();
		
		Scanner sc = new Scanner(System.in);
		while(true) {
			String key = sc.nextLine();
			if(key.toLowerCase().equals("q")) {
				break;
			}
		}
		sc.close();
		
		stopServer();
	}
	public static void startServer() {
		Thread thread = new Thread() {
			@Override
			public void run() {
				try {
					serverSocket = new ServerSocket(50001);
					System.out.println("서버 시작됨 ");
					
					while(true) {
						Socket socket = serverSocket.accept();
						
						executorService.execute(() -> {
							try {
								InetSocketAddress isa = (InetSocketAddress)socket.getRemoteSocketAddress();
								System.out.println("서버" + isa.getHostName() + "의 연결 요청을 수락함");
								
								DataInputStream dis = new DataInputStream(socket.getInputStream());
								String message = dis.readUTF();
								
								DataOutputStream dos = new DataOutputStream(socket.getOutputStream());
								dos.writeUTF(message);
								dos.flush();
								System.out.println("서버 받은 데이터를 다시 보냄: " + message);
								
								socket.close();
								System.out.println("서버" + isa.getHostName() + "의 연결을 끊음");
								
							} catch(IOException e) {}
						});
					}
				} catch(IOException e) {
					System.out.println("서버" + e.getMessage());
				}
			}
		};
		thread.start();
	}
	public static void stopServer() {
		try {
			serverSocket.close();
			executorService.shutdownNow();
			System.out.println("서버 종료됨");
		} catch(IOException e1) {}
	}
}
