import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./PdfViewerTest.css"; // 스타일 파일 추가

const PdfViewerTest = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/pdfs/example.pdf`; // PDF 파일 경로

  return (
    <div className="pdf-container">
      <h1 className="pdf-header">Custom PDF Viewer</h1>
      <div className="pdf-viewer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewerTest;
