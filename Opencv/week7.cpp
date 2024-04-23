#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>

using namespace cv;
using namespace std;

void color_inverse();
void color_grayscale();
void color_split();
int equalHist();
void color_hsv();
//int hue_change();
int histogram_reverse();
int homework1();

/*		change_hue
int lower_hue = 40, upper_hue = 80;
Mat src, src_hsv, mask;
change_hue static variable
void on_hue_changed(int, void*);*/



int homework1() {
	int channels[] = { 1, 2 };
	int cr_bins = 128, cb_bins = 128;
	int histSize[] = { cr_bins, cb_bins };
	float cr_range[] = { 0,256 };
	float cb_range[] = { 0,256 };
	const float* ranges[] = { cr_range, cb_range };

	Mat src = imread("field.bmp", IMREAD_COLOR);
	if (src.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}

	Mat src_ycrcb, hist;
	cvtColor(src, src_ycrcb, COLOR_BGR2YCrCb);
	calcHist(&src_ycrcb, 1, channels, Mat(), hist, 2, histSize, ranges);

	int scale = 10;
	Mat hist_img = Mat::zeros(cr_bins * scale, cb_bins * scale, CV_8UC3);

	for (int i = 0; i < cb_bins; i++) {
		for (int j = 0; j < cr_bins; j++) {
			float bin_val = hist.at<float>(i, j);
			rectangle(hist_img, Point(i * scale, j * scale), Point((i + 1) * scale - 1, (j + 1) * scale - 1), Scalar::all(bin_val), FILLED);
		}
	}

	imshow("src", src);
	imshow("Histimg", hist_img);

	waitKey(0);
	return 0;
}

int main() {
	homework1();
	return 0;
}

void color_inverse() {
	Mat src = imread("butterfly.jpg", IMREAD_COLOR);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat dst(src.rows, src.cols, src.type());

	for (int j = 0; j < src.rows; j++) {
		for (int i = 0; i < src.cols; i++) {
			Vec3b& p1 = src.at<Vec3b>(j,i);
			Vec3b& p2 = dst.at<Vec3b>(j, i);

			p2[0] = 255 - p1[0];		//B
			p2[1] = 255 - p1[1];		//G
			p2[2] = 255 - p1[2];		//R
		}
	}
	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}

void color_grayscale() {
	Mat src = imread("butterfly.jpg");


	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat dst;
	cvtColor(src, dst, COLOR_BGR2GRAY);

	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}

void color_split() {
	Mat src = imread("candies.png");

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}

	vector<Mat>bgr_planes;
	split(src, bgr_planes);

	imshow("src", src);
	imshow("B_plane", bgr_planes[0]);
	imshow("G_plane", bgr_planes[1]);
	imshow("R_plane", bgr_planes[2]);
	
	waitKey();
	destroyAllWindows();
}

int equalHist() {
	
	Mat src = imread("pepper.bmp", IMREAD_COLOR);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}
	Mat src_ycrcb;
	cvtColor(src, src_ycrcb, COLOR_BGR2YCrCb);

	vector<Mat> ycrcb_planes;
	split(src_ycrcb, ycrcb_planes);

	equalizeHist(ycrcb_planes[0], ycrcb_planes[0]);

	Mat dst_ycrcb;
	merge(ycrcb_planes, dst_ycrcb);

	Mat dst;
	cvtColor(dst_ycrcb, dst, COLOR_YCrCb2BGR);

	imshow("src", src);
	imshow("dst", dst);

	waitKey(0);
	return 0;
}

/*int hue_change() {
	src = imread("candies.png", IMREAD_COLOR);
	if (src.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}
	cvtColor(src, src_hsv, COLOR_BGR2HSV);

	imshow("src", src);
	namedWindow("mask");
	createTrackbar("Lower Hue", "mask", &lower_hue, 179, on_hue_changed);
	createTrackbar("Upper Hue", "mask", &upper_hue, 179, on_hue_changed);
	on_hue_changed(0, 0);

	waitKey(0);
	return 0;
}
void on_hue_changed(int, void*) {
	Scalar lowerb(lower_hue, 100, 0);
	Scalar upperb(upper_hue, 255, 255);
	inRange(src_hsv, lowerb, upperb, mask);

	imshow("mask", mask);
}*/

void color_hsv() {
	Mat src = imread("tekapo.bmp", IMREAD_COLOR);

	if (src.empty()) {
		cerr << "image load failed" << endl;
		return;
	}
	Mat src_hsv;
	cvtColor(src, src_hsv, COLOR_BGR2HSV);

	Mat dst(src.rows, src.cols, src.type());

	for (int j = 0; j < src.rows; j++) {
		for (int i = 0; i < src.cols; i++) {
			Vec3b& p1 = src.at<Vec3b>(j, i);
			Vec3b& p2 = dst.at<Vec3b>(j, i);

			p2[0] = 255 - p1[0];		//B
			p2[1] = 255 - p1[1];		//G
			p2[2] = 255 - p1[2];		//R
		}
	}
	imshow("src", src);
	imshow("dst", dst);

	waitKey();
	destroyAllWindows();
}

int histogram_reverse() {
	Mat ref, ref_ycrcb, mask;
	ref = imread("ref.png", IMREAD_COLOR);
	mask = imread("mask.bmp", IMREAD_GRAYSCALE);
	cvtColor(ref, ref_ycrcb, COLOR_BGR2YCrCb);

	Mat hist;
	int channels[] = { 1,2 };
	int cr_bins = 128, cb_bins = 128;
	int histSize[] = { cr_bins, cb_bins };
	float cr_range[] = { 0,256 };
	float cb_range[] = { 0,256 };
	const float* ranges[] = { cr_range, cb_range };

	calcHist(&ref_ycrcb, 1, channels, mask, hist, 2, histSize, ranges);

	Mat src, src_ycrcb;
	src = imread("kids.png", IMREAD_COLOR);
	cvtColor(src, src_ycrcb, COLOR_BGR2YCrCb);

	Mat backproj;
	calcBackProject(&src_ycrcb, 1, channels, hist, backproj, ranges, 1, true);

	imshow("src", src);
	imshow("backproj", backproj);

	waitKey(0);

	return 0;
}