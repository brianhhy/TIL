#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>

using namespace cv;
using namespace std;

void edge();
void sobel_edge();
void canny_edge();
void hough_lines();
void hough_line_segments();
void hough_circles();

int main() {
	
	hough_circles();

	return 0;
}
void edge() {
	Mat src = imread("lenna.bmp");
	if (src.empty()) {
		cerr << "image load failed!" << endl;
	}

	Mat mx = cv::Mat_<float>({ 1,3 }, { -1 / 2.f,0,1 / 2.f });
	Mat my = cv::Mat_<float>({ 3,1 }, { -1 / 2.f , 0, 1 / 2.f });

	Mat dx, dy;
	filter2D(src, dx, -1, mx, Point(-1, -1), 128);
	filter2D(src, dy, -1, my, Point(-1, -1), 128);

	int w = src.cols;
	int h = src.rows;
	float gradient;
	float fx, fy;
	Mat gdst(h, w, CV_8UC1);
	int pixel;

	for (int j = 0; j < h; j++) {
		for (int i = 0; i < w; i++) {
			fx = (float)dx.at<uchar>(j, i);
			fy = (float)dy.at<uchar>(j, i);
			gradient = sqrt(fx * fx + fy * fy);
			if (gradient > 200)
				pixel = 255;
			else
				pixel = 0;
			gdst.at<uchar>(j, i) = (uchar)pixel;
		}
	}

	imshow("src", src);
	imshow("dx", dx);
	imshow("dy", dy);
	imshow("gdst", gdst);

	waitKey();
	destroyAllWindows();
}

void sobel_edge() {
	
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
		cerr << "image load failed" << endl;
		return;
	}


	Mat dx, dy;
	Sobel(src, dx, CV_32FC1, 1, 0);
	Sobel(src, dy, CV_32FC1, 0, 1);
	
	

	Mat fmag, mag;
	magnitude(dx, dy, fmag);
	fmag.convertTo(mag, CV_8UC1);

	Mat edge = mag > 150;

	Mat phase_img,dst;

	phase(dx, dy, phase_img, true);
	normalize(phase_img, dst, 0, 255, NORM_MINMAX, CV_8UC1);

	imshow("src", src);
	imshow("mag", mag);
	imshow("edge", edge);
	imshow("phase", dst);

	waitKey();
	destroyAllWindows();
}

void canny_edge() {
	Mat src = imread("lenna.bmp", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat dst1, dst2;
	Canny(src, dst1, 50, 100);
	Canny(src, dst2, 50, 150);

	imshow("src", src);
	imshow("dst1", dst1);
	imshow("dst2", dst2);

	waitKey();
	destroyAllWindows();
}

void hough_lines() {
	Mat src = imread("building.jpg", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat edge;
	Canny(src, edge, 50, 150);
	
	vector<Vec2f> lines;
	HoughLines(edge, lines, 1, CV_PI / 180, 250);
	
	Mat dst;
	cvtColor(edge, dst, COLOR_GRAY2BGR);
	
	for (size_t i = 0; i < lines.size(); i++) {
		float r = lines[i][0], t = lines[i][1];
		double cos_t = cos(t), sin_t = sin(t);
		double x0 = r * cos_t, y0 = r * sin_t;
		double alpha = 1000;
		Point pt1(cvRound(x0 + alpha * (-sin_t)), cvRound(y0 + alpha * cos_t));
		Point pt2(cvRound(x0 - alpha * (-sin_t)), cvRound(y0 - alpha * cos_t));
		line(dst, pt1, pt2, Scalar(0, 0, 255), 2, LINE_AA);

	}
	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}

void hough_line_segments() {
	Mat src = imread("building.jpg", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat edge;
	Canny(src, edge, 50, 150);
	vector<Vec4i> lines;
	HoughLinesP(edge, lines, 1, CV_PI / 180, 160, 50, 5);

	Mat dst;
	cvtColor(edge, dst, COLOR_GRAY2BGR);

	for (Vec4i l : lines) {
		line(dst, Point(l[0], l[1]), Point(l[2], l[3]), Scalar(0, 0, 255),
			2, LINE_AA);
	}
	imshow("src", src);
	imshow("dst", dst);
	
	waitKey();
	destroyAllWindows();
}

void hough_circles() {
	Mat src = imread("coins.png", IMREAD_GRAYSCALE);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat blurred;
	blur(src, blurred, Size(3, 3));

	vector<Vec3f> circles;
	HoughCircles(blurred, circles, HOUGH_GRADIENT, 1, 50, 150, 30);

	Mat dst;
	cvtColor(src, dst, COLOR_GRAY2BGR);

	for (Vec3f c : circles) {
		Point center(cvRound(c[0]), cvRound(c[1]));
		int radius = cvRound(c[2]);
		circle(dst, center, radius, Scalar(0, 0, 255), 2, LINE_AA);

	}
	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}