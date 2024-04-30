#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>
using namespace cv;
using namespace std;

void histogram_stretching();
void binarize();
void binarize2();
void on_threshold(int pos, void* userdata);

void on_trackbar(int pos, void* userdata);

void erode_dilate();
void open_close();

Mat getGrayHistImage(const Mat& hist) {
	CV_Assert(hist.type() == CV_32FC1);
	CV_Assert(hist.size() == Size(1, 256));

	double histMax;
	minMaxLoc(hist, 0, &histMax);
	histMax = histMax / 10;

	Mat imgHist(100, 256, CV_8UC1, Scalar(255));
	for (int i = 0; i < 256; i++) {
		line(imgHist, Point(i, 100),
			Point(i, 100 - cvRound(hist.at<float>(i, 0) * 100 / histMax)), Scalar(0));
	}
	return imgHist;
}
Mat calcGrayHist(const Mat& img) {
	CV_Assert(img.type() == CV_8UC1);

	Mat hist;
	int channels[] = { 0 };
	int dims = 1;
	const int histSize[] = { 256 };
	float graylevel[] = { 0,256 };
	const float* ranges[] = { graylevel };

	calcHist(&img, 1, channels, noArray(), hist, dims, histSize, ranges);
	return hist;
}


int main() {

	open_close();
	/*		binary& histogram
	Mat src;

	if (argc < 2)
		src = imread("neutrophils.png", IMREAD_GRAYSCALE);
	else
		src = imread(argv[1], IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}

	double gmin, gmax;
	minMaxLoc(src, &gmin, &gmax);

	Mat dst = (src - gmin) * 255 / (gmax - gmin);

	imshow("dst", dst);
	imshow("dstHist", getGrayHistImage(calcGrayHist(dst)));

	imshow("src", src);

	namedWindow("dst");
	createTrackbar("Threshold", "dst", 0, 255, on_threshold, (void*)&src);
	setTrackbarPos("Threshold", "dst", 128);*/



	/*	
	Mat src = imread("sudoku.jpg", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}
	imshow("src", src);

	namedWindow("dst");
	createTrackbar("Block Size", "dst", 0, 200, on_trackbar, (void*)&src);
	setTrackbarPos("Block Size", "dst", 11);*/
	waitKey(0);
	return 0;
}

void on_threshold(int pos, void* userdata) {
	
	Mat src = *(Mat*)userdata;

	Mat dst;
	threshold(src, dst, pos, 255, THRESH_BINARY);

	imshow("dst", dst);
}

void on_trackbar(int pos, void* userdata) {
	Mat src = *(Mat*)userdata;

	int bsize = pos;
	if (bsize % 2 == 0)bsize--;
	if (bsize < 3) bsize = 3;

	Mat dst;
	adaptiveThreshold(src, dst, 255, ADAPTIVE_THRESH_GAUSSIAN_C, THRESH_BINARY, bsize, 5);

	imshow("dst", dst);
}

void binarize() {
	Mat src = imread("document.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}

	Mat dst1, dst2;
	threshold(src, dst1, 128, 255, THRESH_BINARY);
	threshold(src, dst2, 128, 255, THRESH_BINARY_INV);

	imshow("src", src);
	imshow("dst1", dst1);
	imshow("dst2", dst2);

	waitKey();
	destroyAllWindows();
}

void binarize2() {
	Mat src = imread("cameraman256.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}

	Mat dst;

	int th = (int)threshold(src, dst, 128, 255, THRESH_BINARY | THRESH_OTSU);

	printf("%d", th);

	imshow("src", src);
	imshow("dst", dst);
	
	

	waitKey();
	destroyAllWindows();
}

void histogram_stretching() {

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

	if (src.empty()) {
		cerr << "image load failed!" << endl;
		return;
	}

	double gmin, gmax;
	minMaxLoc(src, &gmin, &gmax);

	Mat dst = (src - gmin) * 255 / (gmax - gmin);

	imshow("src", src);
	imshow("srcHist", getGrayHistImage(calcGrayHist(src)));
	imshow("dst", dst);
	imshow("dstHist", getGrayHistImage(calcGrayHist(dst)));

	waitKey();
	destroyAllWindows();
}

void erode_dilate() {
	Mat src = imread("milkdrop.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat bin;
	threshold(src, bin, 0, 255, THRESH_BINARY | THRESH_OTSU);
	Mat dst1, dst2;
	erode(bin, dst1, getStructuringElement(MORPH_CROSS, Size(7,7)));
	dilate(bin, dst2, getStructuringElement(MORPH_ELLIPSE, Size(3,5)));

	imshow("src", src);
	imshow("bin", bin);
	imshow("dst1", dst1);
	imshow("dst2", dst2);

	waitKey();
	destroyAllWindows();
}

void open_close() {

	VideoCapture cap(0);

	if (!cap.isOpened()) {
		cerr << "Camera open failed!" << endl;
		return;
	}
	cout << "Frame width" << cvRound(cap.get(CAP_PROP_FRAME_WIDTH)) << endl;
	cout << "Frame height" << cvRound(cap.get(CAP_PROP_FRAME_HEIGHT)) << endl;

	Mat frame1, frame2;

	while (true) {
		
		cap >> frame1;
		cap >> frame2;
		
		if (frame1.empty())
			break;


		imshow("frame", frame1);
		imwrite("res.jpg", frame1);
		imwrite("res2.jpg", frame2);

		if (waitKey(10) == 27)
			break;
	}

	Mat src = imread("res.jpg", IMREAD_GRAYSCALE);
	Mat src2 = imread("res2.jpg", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat bin;
	threshold(src, bin, 0, 255, THRESH_BINARY | THRESH_OTSU);

	Mat dst1, dst2, dst3, dst4, dst5;
	morphologyEx(src, dst1, MORPH_ERODE, Mat());
	morphologyEx(src, dst2, MORPH_DILATE, Mat());
	morphologyEx(src, dst3, MORPH_GRADIENT, Mat());
	
	Canny(src, dst4, 50, 100);
	
	absdiff(src, src2, dst5);
	
	imshow("src", src);
	imshow("bin", bin);
	imshow("erode", dst1);
	imshow("dilate", dst2);
	imshow("gradient", dst3);
	imshow("canny", dst4);

	imshow("AD", dst5);

	waitKey();
	destroyAllWindows();

}

