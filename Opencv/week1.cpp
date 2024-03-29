#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>
using namespace cv;
using namespace std;

Mat img;
Point ptOld;



// 1주차
void Matop2();
void Matop3();
void Matop5();



int main() {
	
	Matop2();
		
	return 0;
}

void Matop2() {

	Mat img1 = imread("dog.bmp");

	Mat img2 = img1;
	Mat img3;
	img3 = img1;

	Mat img4 = img1.clone();
	Mat img5;
	img1.copyTo(img5);

	img1.setTo(Scalar(0, 255, 255));	//노란색 설정

	imshow("img1", img1);
	imshow("img2", img2);
	imshow("img3", img3);
	imshow("img4", img4);
	imshow("img5", img5);

	waitKey();
	destroyAllWindows();
}

void Matop3() {
	
	Mat img1 = imread("cat.bmp");

	if (img1.empty()) {
		cerr << "Image load failed" << endl;
		return;
	}
	Mat img2 = img1(Rect(220, 120, 340, 240));			//img1 특정 부분 추출
	Mat img3 = img1(Rect(220, 120, 340, 240)).clone();	//img1 특정 부분 복사

	img2 = ~img2;										//img2 리버스

	imshow("img1", img1);
	imshow("img2", img2);
	imshow("img3", img3);								

	waitKey();
	destroyAllWindows();

}
void Matop5() {
	Mat img1 = imread("C:\\Users\\flyin\\source\\repos\\Helloworld\\Helloworld\\lenna.bmp");

	cout << "width : " << img1.cols << endl;
	cout << "height : " << img1.rows << endl;
	cout << "Channels : " << img1.channels() << endl;

	if (img1.type() == CV_8UC1)
		cout << "img1 is a grayscale image." << endl;
	else if (img1.type() == CV_8UC3)
		cout << "img1 is a truecolor image." << endl;

	float data[] = { 2.f, 1.414f, 3.f, 1.732f };
	Mat mat1(2, 2, CV_32FC1, data);
	cout << "mat1:\n" << mat1 << endl;
}