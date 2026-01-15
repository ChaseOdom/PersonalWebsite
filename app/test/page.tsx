"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode, Html5QrcodeCameraScanConfig } from "html5-qrcode";

export default function Page() {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [scannedText, setScannedText] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SCANNER_ID = "html5-qrcode";

  useEffect(() => {
    return () => {
      stopScanner();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startScanner = async () => {
    setError(null);
    setScannedText(null);

    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
    };

    const html5QrCode = new Html5Qrcode(SCANNER_ID);

    scannerRef.current = html5QrCode;

    try {
      await html5QrCode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          setScannedText(decodedText);
          stopScanner(); // stop after successful scan
        },
        () => {
          // ignore scan errors
        },
      );
      setIsScanning(true);
    } catch (err) {
      console.error(err);
      setError("Failed to access camera.");
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        await scannerRef.current.clear();
      } catch {
        // ignore cleanup errors
      }
      scannerRef.current = null;
    }
    setIsScanning(false);
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Barcode Scanner</h1>

      {!isScanning ? (
        <button onClick={startScanner}>Start Scanner</button>
      ) : (
        <button onClick={stopScanner}>Stop Scanner</button>
      )}

      <div id={SCANNER_ID} style={{ width: 350, marginTop: 16 }} />

      {scannedText && (
        <div style={{ marginTop: 16 }}>
          <strong>Scanned Value:</strong>
          <p>{scannedText}</p>
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}
    </main>
  );
}
