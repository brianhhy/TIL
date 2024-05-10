#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include <iostream>

using namespace cv;
using namespace std;


void labeling_basic() {
    uchar data[] = {
        0,0,1,1,0,0,0,0,
        1,1,1,1,0,0,1,0,
        1,1,1,1,0,0,0,0,
        0,0,0,0,0,1,1,0,
        0,0,0,1,1,1,1,0,
        0,0,0,1,0,0,1,0,
        0,0,1,1,1,1,1,0,
        0,0,0,0,0,0,0,0,
    };
    Mat src = Mat(8, 8, CV_8UC1, data) * 255;

    Mat labels;
    int cnt = connectedComponents(src, labels);

    cout << "src:\n" << src << endl;
    cout << "labels:\n" << labels << endl;
    cout << "number of labels: " << cnt << endl;
}

void labeling_stats() {
    Mat src = imread("keyboard.bmp", IMREAD_GRAYSCALE);

    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }
    Mat bin;
    threshold(src, bin, 0, 255, THRESH_BINARY | THRESH_OTSU);

    Mat labels, stats, centroids;
    int cnt = connectedComponentsWithStats(bin, labels, stats, centroids);

    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);

    for (int i = 1; i < cnt; i++) {
        int* p = stats.ptr<int>(i);

        if (p[4] < 20) continue;

        rectangle(dst, Rect(p[0], p[1], p[2], p[3]), Scalar(0, 255, 255), 2);
    }
    imshow("src", src);
    imshow("dst", dst);

    waitKey();
    destroyAllWindows();
}

void contours_basic() {
    Mat src = imread("contours.bmp", IMREAD_GRAYSCALE);
    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }
    vector<vector<Point>> contours;
    findContours(src, contours, RETR_LIST, CHAIN_APPROX_NONE);

    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);

    for (int i = 0; i < contours.size(); i++) {
        Scalar c(rand() & 255, rand() & 255, rand() & 255);
        drawContours(dst, contours, i, c, 2);
    }
    imshow("src", src);
    imshow("dst", dst);

    waitKey();
    destroyAllWindows();
}

void contours_hier() {

    Mat src = imread("contours.bmp", IMREAD_GRAYSCALE);
    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }

    vector<vector<Point>> contours;
    vector<Vec4i> hierarchy;
    findContours(src, contours, hierarchy, RETR_TREE, CHAIN_APPROX_SIMPLE);

    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);

    for (int idx = 0; idx >= 0; idx = hierarchy[idx][0]) {
        Scalar c(rand() & 255, rand() & 255, rand() & 255);
        drawContours(dst, contours, idx, c, 4, LINE_8, hierarchy,0);
    }
    for (int i = 0; i < contours.size(); i++) {
        cout << "Hierarchy of contour index :" << i << "-->" << hierarchy[i] << endl;
    }
    imshow("src", src);
    imshow("dst", dst);

    waitKey();
    destroyAllWindows();
}

void contour_approximation() {
    Mat src = imread("kmap_simple.jpg", IMREAD_GRAYSCALE);

    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }
    Mat bin;
    vector<vector<Point>> contours;
    vector<Vec4i> hierarchy;

    threshold(src, bin, 128, 255, THRESH_BINARY_INV | THRESH_OTSU);
    findContours(bin, contours, hierarchy, RETR_TREE, CHAIN_APPROX_NONE);
    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);
    for (int idx = 0; idx >= 0; idx = hierarchy[idx][0]) {
        Scalar c(rand() & 255, rand() & 255, rand() & 255);
        drawContours(dst, contours, idx, c, 2, LINE_AA, hierarchy, 2, Point(0, 0));

        vector<Point> approxCurve;
        approxPolyDP(contours[idx], approxCurve, arcLength(contours[idx], true) * 0.005, true);
        int no_vertex = approxCurve.size();
        cout << "num of vertex : " << no_vertex << endl;
        for (int v = 0; v < no_vertex; v++) {
            circle(dst, approxCurve[v], 3, Scalar(0, 0, 255), 2);
            line(dst, approxCurve[v], approxCurve[(v + 1) % no_vertex], Scalar(255, 255, 0), 2);
        }
    }
    imshow("src", src);
    imshow("dst", dst);
    waitKey();
    destroyAllWindows();

}

void setLabel(Mat& img, const vector<Point>& pts, const String& label) {
    Rect rc = boundingRect(pts);
    rectangle(img, rc, Scalar(0, 0, 255), 1);
    putText(img, label, rc.tl(), FONT_HERSHEY_PLAIN, 1, Scalar(0, 0, 255));
}

int main(int argc, char* argv[]) {
    
    Mat img = imread("polygon.bmp", IMREAD_COLOR);

    if (img.empty()) {
        cerr << "image load failed" << endl;
        return -1;
    }
    Mat gray;
    cvtColor(img, gray, COLOR_BGR2GRAY);

    Mat bin;
    threshold(gray, bin, 200, 255, THRESH_BINARY_INV | THRESH_OTSU);

    vector<vector<Point>> contours;
    findContours(bin, contours, RETR_EXTERNAL, CHAIN_APPROX_NONE);

    for (vector<Point>& pts : contours) {
        if (contourArea(pts) < 400)
            continue;
        
        vector<Point> approx;
        approxPolyDP(pts, approx, arcLength(pts, true) * 0.02, true);

        int vtc = (int)approx.size();

        if (vtc == 3) {
            setLabel(img, pts, "TRI");
        }
        else if (vtc == 4) {
            setLabel(img, pts, "RECT");
        }
        else if (vtc > 4) {
            double len = arcLength(pts, true);
            double area = contourArea(pts);
            double ratio = 4. * CV_PI * area / (len * len);

            if (ratio > 0.8) {
                setLabel(img, pts, "CIR");
            }
            else {
                setLabel(img, pts, "Arbitrary Shape");
            }
        }

    }
    imshow("img", img);

    waitKey(0);
    return 0;
}
