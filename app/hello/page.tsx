"use client"

import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { jsPDF } from 'jspdf';

const CameraToPdf: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImg, setCapturedImg] = useState<string | null>(null);

    // Video constraints (use 'environment' for back camera on mobile)
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setCapturedImg(imageSrc);
        }
    }, [webcamRef]);

    const generatePDF = () => {
        if (!capturedImg) return;

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [1280, 720]
        });

        doc.addImage(capturedImg, 'JPEG', 0, 0, 1280, 720);
        doc.save("camera-capture.pdf");
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Camera to PDF Converter</h2>

            {!capturedImg ? (
                <>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
                    />
                    <br />
                    <button onClick={capture} style={buttonStyle}>Capture Photo</button>
                </>
            ) : (
                <>
                    <img src={capturedImg} alt="Captured" style={{ width: '100%', maxWidth: '600px' }} />
                    <br />
                    <button onClick={() => setCapturedImg(null)} style={buttonStyle}>Retake</button>
                    <button onClick={generatePDF} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>
                        Download PDF
                    </button>
                </>
            )}
        </div>
    );
};

const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
};

export default CameraToPdf;