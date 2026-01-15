"use client"

import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { jsPDF } from 'jspdf';
import Tesseract from 'tesseract.js'; // npm install tesseract.js

const CameraToPdf: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImg, setCapturedImg] = useState<string | null>(null);
    const [detectedNumber, setDetectedNumber] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);

    const videoConstraints = { width: 1280, height: 720, facingMode: { ideal: "environment" } };

    const capture = useCallback(async () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImg(imageSrc);
            setDetectedNumber(null);
            setIsScanning(true);

            // OCR processing to find a 10-digit number
            try {
                const { data: { text } } = await Tesseract.recognize(imageSrc, 'eng');
                const match = text.match(/\b\d{10}\b/); // Matches exactly 10 digits
                setDetectedNumber(match ? match[0] : "No number found");
            } catch (error) {
                console.error("OCR Error:", error);
                setDetectedNumber("Error scanning image");
            } finally {
                setIsScanning(false);
            }
        }
    }, [webcamRef]);

    const generatePDF = () => {
        if (!capturedImg) return;
        const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1280, 720] });
        doc.addImage(capturedImg, 'JPEG', 0, 0, 1280, 720);
        doc.save("camera-capture.pdf");
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Camera to PDF Converter</h2>

            {!capturedImg ? (
                <>
                    <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} style={cameraStyle} />
                    <br />
                    <button onClick={capture} style={buttonStyle}>Capture & Scan</button>
                </>
            ) : (
                <>
                    <img src={capturedImg} alt="Captured" style={cameraStyle} />
                    <div style={resultBoxStyle}>
                        <strong>Detected 10-Digit Number:</strong>
                        <p>{isScanning ? "Scanning text..." : detectedNumber}</p>
                    </div>
                    <button onClick={() => setCapturedImg(null)} style={buttonStyle}>Retake</button>
                    <button onClick={generatePDF} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>Download PDF</button>
                </>
            )}
        </div>
    );
};

const cameraStyle = { width: '100%', maxWidth: '600px', borderRadius: '10px', border: '2px solid #ddd' };
const buttonStyle = { margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white' };
const resultBoxStyle = { margin: '15px auto', padding: '10px', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' };

export default CameraToPdf;