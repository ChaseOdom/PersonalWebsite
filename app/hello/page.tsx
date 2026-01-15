"use client"

import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { jsPDF } from 'jspdf';

const CameraToPdf: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImg, setCapturedImg] = useState<string | null>(null);

    const videoConstraints = {
        width: 1280,
        height: 720,
        // Using 'environment' is standard for document capture
        facingMode: { ideal: "environment" }
    };

    // Trigger focus on mobile devices
    const handleFocus = async () => {
        const video = webcamRef.current?.video;
        if (!video || !video.srcObject) return;

        const stream = video.srcObject as MediaStream;
        const track = stream.getVideoTracks()[0];
        const capabilities = track.getCapabilities() as any;

        // Check if the browser and hardware support focusMode control
        if (capabilities.focusMode) {
            try {
                // To trigger a "re-focus" event, we toggle the mode
                await track.applyConstraints({
                    advanced: [{ focusMode: "manual", focusDistance: 0 }]
                } as any);

                // Immediately return to continuous for the best user experience
                await track.applyConstraints({
                    advanced: [{ focusMode: "continuous" }]
                } as any);
            } catch (err) {
                console.error("Focus adjustment not supported or failed:", err);
            }
        }
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) setCapturedImg(imageSrc);
    }, [webcamRef]);

    const generatePDF = () => {
        if (!capturedImg) return;
        const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1280, 720] });
        doc.addImage(capturedImg, 'JPEG', 0, 0, 1280, 720);
        doc.save("camera-capture.pdf");
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Camera to PDF</h2>
            {!capturedImg ? (
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        onClick={handleFocus} // Click video area to focus
                        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', cursor: 'crosshair' }}
                    />
                    <p style={{ fontSize: '12px', color: '#666' }}>Tap video to focus</p>
                    <button onClick={capture} style={buttonStyle}>Capture Photo</button>
                </div>
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

const buttonStyle = { margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' };

export default CameraToPdf;