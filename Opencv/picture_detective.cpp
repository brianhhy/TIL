#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>
#include <fstream>
#include <vector>

using namespace cv;
using namespace std;
using namespace cv::dnn;





int main(int argc, char* argv[]) {

	Mat img;
	if (argc < 2)
		img = imread("space_shuttle.jpg", IMREAD_COLOR);
	else
		img = imread(argv[1], IMREAD_COLOR);

	if (img.empty()) {
		cerr << "image load failed" << endl;
		return -1;
	}
	Net net = readNet("bvlc_googlenet.caffemodel", "deploy.prototxt");

	if (net.empty()) {
		cerr << "network load failed" << endl;
		return -1;
	}

	ifstream fp("classification_classes_ILSVRC2012.txt");

	if (!fp.is_open()){
		cerr << "class file load failed" << endl;
		return -1;

		vector<String> classNames;
		String name;
		while (!fp.eof()) {
			getline(fp, name);
			if (name.length())
				classNames.push_back(name);
		}
		fp.close();

		Mat inputBlob = blobFromImage(img, 1, Size(224, 224), Scalar(104, 117, 123));
		net.setInput(inputBlob);
		Mat prob = net.forward();

		double maxVal;
		Point maxLoc;
		minMaxLoc(prob, NULL, &maxVal, NULL, &maxLoc);

		String str = format("%s (%4.2lf%%)", classNames[maxLoc.x].c_str(), maxVal * 100);
		putText(img, str, Point(10, 30), FONT_HERSHEY_SIMPLEX, 0.8, Scalar(0, 0, 255));

		imshow("img", img);

		waitKey();
		return 0;
	}
}