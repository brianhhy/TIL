#include "opencv2/opencv.hpp"
#include "opencv2/core.hpp"
#include "opencv2/stitching.hpp"
#include <iostream>
#include <vector>


using namespace cv;
using namespace std;


int main(int argc, char* argv[]) {
    if (argc < 3) {
        cerr << "Usage: stitching.exe <image_file1> <image_file2> [<image_file3> ...]" << endl;
        return -1;
    }

    vector<Mat> imgs;
    for (int i = 1; i < argc; i++) {
        Mat img = imread(argv[i]);

        if (img.empty()) {
            cerr << "Image load failed: " << argv[i] << endl;
            return -1;
        }
        imgs.push_back(img);
    }

    Ptr<Stitcher> stitcher = Stitcher::create(Stitcher::SCANS);
    Mat dst;
    Stitcher::Status status = stitcher->stitch(imgs, dst);

    if (status != Stitcher::OK) {
        cerr << "Error during stitching, status code: " << int(status) << endl;
        return -1;
    }

    imwrite("result.jpg", dst);
    imshow("Stitched Image", dst);
    waitKey(0);
    destroyAllWindows();

    return 0;
}

void corner_harris() {
    Mat src = imread("building.jpg", IMREAD_GRAYSCALE);

    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }
    Mat harris;
    cornerHarris(src, harris, 3, 3, 0.04);

    Mat harris_norm;
    normalize(harris, harris_norm, 0, 255, NORM_MINMAX, CV_8U);

    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);

    for (int j = 1; j < harris.rows - 1; j++) {
        for (int i = 1; i < harris.cols - 1; i++) {
            if (harris_norm.at<uchar>(j, i) > 120) {
                if (harris.at<float>(j, i) > harris.at<float>(j - 1, i) &&
                    harris.at<float>(j, i) > harris.at<float>(j + 1, i) &&
                    harris.at<float>(j, i) > harris.at<float>(j, i - 1) &&
                    harris.at<float>(j, i) > harris.at<float>(j, i + 1)) {
                    circle(dst, Point(i, j), 5, Scalar(0, 0, 255), 2);
                }
            }
        }
    }
    imshow("src", src);
    imshow("harris_norm", harris_norm);
    imshow("dst", dst);

    waitKey(0);
    destroyAllWindows();
}

void corner_fast() {
    Mat src = imread("building.jpg", IMREAD_GRAYSCALE);

    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }

    vector<KeyPoint> keypoints;

    FAST(src, keypoints, 60, true);

    Mat dst;
    cvtColor(src, dst, COLOR_GRAY2BGR);

    for (KeyPoint kp : keypoints) {
        Point pt(cvRound(kp.pt.x), cvRound(kp.pt.y));
        circle(dst, pt, 5, Scalar(0, 0, 255), 2);
    }
    imshow("src", src);
    imshow("dst", dst);

    waitKey(0);
    destroyAllWindows();
}

void detect_keypoints() {
    Mat src = imread("box_in_scene.png", IMREAD_GRAYSCALE);
    if (src.empty()) {
        cerr << "image load failed" << endl;
        return;
    }

    Ptr<Feature2D> feature = ORB::create();

    vector<KeyPoint> keypoints;
    feature->detect(src, keypoints);

    Mat desc;
    feature->compute(src, keypoints, desc);

    cout << "keypoints.size():" << keypoints.size() << endl;
    cout << "desc.size():" << desc.size() << endl;

    Mat dst;
    drawKeypoints(src, keypoints, dst, Scalar::all(-1),
        DrawMatchesFlags::DRAW_RICH_KEYPOINTS);

    imshow("src", src);
    imshow("dst", dst);

    waitKey();
    destroyAllWindows();
}

void keypoint_matching() {
    Mat src1 = imread("box.png", IMREAD_GRAYSCALE);
    Mat src2 = imread("box_in_scene.png", IMREAD_GRAYSCALE);

    if (src1.empty() || src2.empty()) {
        cerr << "image load failed!" << endl;
        return;
    }
    Ptr<Feature2D> feature = ORB::create();
    
    vector<KeyPoint> keypoints1, keypoints2;
    Mat desc1, desc2;
    feature->detectAndCompute(src1, Mat(), keypoints1, desc1);
    feature->detectAndCompute(src2, Mat(), keypoints2, desc2);

    Ptr<DescriptorMatcher> matcher = BFMatcher::create(NORM_HAMMING);

    vector<DMatch> matches;
    matcher->match(desc1, desc2, matches);

    Mat dst;
    drawMatches(src1, keypoints1, src2, keypoints2, matches, dst);

    imshow("dst", dst);

    waitKey();
    destroyAllWindows();

}

void good_matching() {
    Mat src1 = imread("box.png", IMREAD_GRAYSCALE);
    Mat src2 = imread("box_in_scene.png", IMREAD_GRAYSCALE);

    if (src1.empty() || src2.empty()) {
        cerr << "image load failed!" << endl;
        return;
    }
    Ptr<Feature2D> feature = ORB::create();

    vector<KeyPoint> keypoints1, keypoints2;
    Mat desc1, desc2;
    feature->detectAndCompute(src1, Mat(), keypoints1, desc1);
    feature->detectAndCompute(src2, Mat(), keypoints2, desc2);

    Ptr<DescriptorMatcher> matcher = BFMatcher::create(NORM_HAMMING);

    vector<DMatch> matches;
    matcher->match(desc1, desc2, matches);

    std::sort(matches.begin(), matches.end());
    vector<DMatch> good_matches(matches.begin(), matches.begin() + 50);

    Mat dst;
    drawMatches(src1, keypoints1, src2, keypoints2, good_matches, dst,
        Scalar::all(-1), Scalar::all(-1), vector<char>(),
        DrawMatchesFlags::NOT_DRAW_SINGLE_POINTS);

    imshow("dst", dst);

    waitKey();
    destroyAllWindows();

}

void find_homography() {
    
    Mat src1 = imread("box.png", IMREAD_GRAYSCALE);
    Mat src2 = imread("box_in_scene.png", IMREAD_GRAYSCALE);

    if (src1.empty() || src2.empty()) {
        cerr << "image load failed!" << endl;
        return;
    }

    Ptr<Feature2D> feature = ORB::create();

    vector<KeyPoint> keypoints1, keypoints2;
    Mat desc1, desc2;
    feature->detectAndCompute(src1, Mat(), keypoints1, desc1);
    feature->detectAndCompute(src2, Mat(), keypoints2, desc2);

    Ptr<DescriptorMatcher> matcher = BFMatcher::create(NORM_HAMMING);

    vector<DMatch> matches;
    matcher->match(desc1, desc2, matches);

    std::sort(matches.begin(), matches.end());
    vector<DMatch> good_matches(matches.begin(), matches.begin() + 50);

    Mat dst;
    drawMatches(src1, keypoints1, src2, keypoints2, good_matches, dst,
        Scalar::all(-1), Scalar::all(-1), vector<char>(),
        DrawMatchesFlags::NOT_DRAW_SINGLE_POINTS);

    vector<Point2f> pts1, pts2;

    for (size_t i = 0; i < good_matches.size(); i++) {
        pts1.push_back(keypoints1[good_matches[i].queryIdx].pt);
        pts2.push_back(keypoints2[good_matches[i].queryIdx].pt);
    }
    Mat H = findHomography(pts1, pts2, RANSAC);

    vector<Point2f> corners1, corners2;
    corners1.push_back(Point2f(0, 0));
    corners1.push_back(Point2f(src1.cols - 1.f, 0));
    corners1.push_back(Point2f(src1.cols - 1.f, src1.rows - 1.f));
    corners1.push_back(Point2f(0, src1.rows - 1.f));
    perspectiveTransform(corners1, corners2, H);

    vector<Point> corners_dst;

    for (Point2f pt : corners2) {
        corners_dst.push_back(Point(cvRound(pt.x = src1.cols), cvRound(pt.y)));
    }
    polylines(dst, corners_dst, true, Scalar(0, 255, 0), 2, LINE_AA);

    imshow("dst", dst);

    waitKey();
    destroyAllWindows();
}

