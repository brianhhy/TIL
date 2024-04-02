#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>
using namespace cv;
using namespace std;

Mat img;
Point ptOld;

void on_mouse(int event, int x, int y, int flags, void*);
void on_level_change(int pos, void* userdata);

//4주차

void add_img();
int pmmd();		//��Ģ����
void filter_embossing();
void blurring_mean();
void noise_gaussian();
void filter_bilateral();
void filter_median();
void homework();


int main() {
	
	histogram_stretching();
		
	return 0;
}

void add_img() {
	Mat img1 = imread("aero2_256.bmp", IMREAD_GRAYSCALE);
	Mat img2 = imread("cameraman256.bmp", IMREAD_GRAYSCALE);

	Mat adding;

	add(img1, img2, adding, noArray(), -1);

	imshow("img1", img1);
	imshow("img2", img2);
	imshow("adding", adding);

	waitKey();
	destroyAllWindows();
}

int pmmd() {
	Mat src1 = imread("lenna256.bmp", IMREAD_GRAYSCALE);
	Mat src2 = imread("square.bmp", IMREAD_GRAYSCALE);

	if (src1.empty() || src2.empty()) {
		cerr << "image load failed!" << endl;
		return -1;
	}
	imshow("src1", src1);
	imshow("src2", src2);

	Mat dst1, dst2, dst3, dst4;

	add(src1, src2, dst1);
	addWeighted(src1, 0.5, src2, 0.5, 0, dst2);
	subtract(src1, src2, dst3);
	absdiff(src1, src2, dst4);

	imshow("dst1", dst1);
	imshow("dst2", dst2);
	imshow("dst3", dst3);
	imshow("dst4", dst4);

	waitKey();
	destroyAllWindows();

	return 0;
}

void filter_embossing() {
	Mat src = imread("rose.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	float data[] = { -1,-1,0,-1,0,1,0,1,1 };
	Mat emboss(3, 3, CV_32FC1, data);

	Mat dst;
	filter2D(src, dst, -1, emboss, Point(-1, -1), 128);

	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}

void blurring_mean() {
	Mat src = imread("rose.bpm", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "Image load faield" << endl;
		return;
	}
	imshow("src", src);

	Mat dst;
	for (int ksize = 3; ksize <= 7; ksize += 2) {
		blur(src, dst, Size(ksize, ksize));

		String desc = format("Mean : %dx%d", ksize, ksize);
		putText(dst, desc, Point(10, 30), FONT_HERSHEY_SIMPLEX, 1.0,
			Scalar(255), 1, LINE_AA);

		imshow("dst", dst);
		waitKey(0);
	}
	destroyAllWindows();
}

void noise_gaussian() {
	Mat src = imread("lenna.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	imshow("src", src);

	for (int stddev = 10; stddev <= 50; stddev += 10) {
		Mat noise(src.size(), CV_32SC1);
		randn(noise, 0, stddev);
		
		Mat dst;
		add(src, noise, dst, Mat(), CV_8U);
		
		String desc = format("stddev = %d", stddev);
		putText(dst, desc, Point(10, 50), FONT_HERSHEY_SIMPLEX, 1.0,
				Scalar(255), 1, LINE_AA);
		imshow("dst", dst);
		waitKey();
	}
	destroyAllWindows();
}

void filter_bilateral() {
	
	Mat src = imread("res.jpg", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat noise(src.size(), CV_32SC1);
	randn(noise,0,5);
	add(src, noise, src, Mat(), CV_8U);

	Mat dst1;
	GaussianBlur(src, dst1, Size(), 5);

	imshow("src", src);
	imshow("dst1", dst1);

	waitKey();
	destroyAllWindows();

}



void filter_median() {
	

	Mat src = imread("lenna.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}

	int num = (int)(src.total() * 0.1);
	for (int i = 0; i < num; i++) {
		int x = rand() % src.cols;
		int y = rand() % src.rows;
		src.at<uchar>(y, x) = (i % 2) * 255;
	}

	Mat dst1;
	GaussianBlur(src, dst1, Size(), 1);

	Mat dst2;
	medianBlur(src, dst2, 3);

	imshow("salt&pepper noise", src);
	imshow("dst1", dst1);
	imshow("dst2", dst2);

	waitKey();
	destroyAllWindows();
}

void homework() {
	
	VideoCapture cap(0);

	if (!cap.isOpened()) {
		cerr << "Camera open failed!" << endl;
		return;
	}
	cout << "Frame width" << cvRound(cap.get(CAP_PROP_FRAME_WIDTH)) << endl;
	cout << "Frame height" << cvRound(cap.get(CAP_PROP_FRAME_HEIGHT)) << endl;

	Mat frame;

	while (true) {
		cap >> frame;
		if (frame.empty())
			break;


		imshow("frame", frame);
		imwrite("res.jpg", frame);

		if (waitKey(10) == 27)
			break;
	}

	Mat src = imread("res.jpg", IMREAD_GRAYSCALE);

	imshow("src", src);

	Mat dst1;

	Mat noise(src.size(), CV_32SC1);
	randn(noise, 0, 5);
	add(src, noise, dst1, Mat(), CV_8U);

	Mat dst2;
	bilateralFilter(dst1, dst2, -1, 10, 5);
	
	
	int num = (int)(src.total() * 0.1);
	for (int i = 0; i < num; i++) {
		int x = rand() % src.cols;
		int y = rand() % src.rows;
		src.at<uchar>(y, x) = (i % 2) * 255;
	}

	Mat dst4;
	medianBlur(src, dst4, 3);


	
	imshow("gaussian noise", dst1);
	imshow("gaussian after bilateralfilter", dst2);
	imshow("saltpepper filter", src);
	imshow("saltpepper after median filter",dst4);

	waitKey();
	destroyAllWindows();
}