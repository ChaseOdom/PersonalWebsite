"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Polyfill MUST be imported on the client
import "react-barcode-scanner/polyfill";

/**
 * react-barcode-scanner exports a NAMED export, not default
 * This is the critical fix
 */
const BarcodeScanner = dynamic(
    async () => {
        const mod = await import("react-barcode-scanner");
        return mod.BarcodeScanner as unknown as React.FC<any>;
    },
    {
        ssr: false,
        loading: () => <p>Loading camera…</p>,
    }
);

export default function BarcodeScannerPage() {
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    return (
        <main
            style={{
                padding: "1rem",
                maxWidth: 480,
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <h1>Code 39 Barcode Scanner</h1>

            <BarcodeScanner
                options={{ formats: ["code_39"] }}
                onCapture={(result: any) => {
                    const cleaned = result?.rawValue?.replace(/\*/g, "");
                    setValue(cleaned);
                    setError(null);
                }}
                onError={(err: any) => {
                    console.error(err);
                    setError("Camera access failed");
                }}
            />

            {value && (
                <div style={{ marginTop: "1rem" }}>
                    <strong>Scanned Value:</strong>
                    <p style={{ fontSize: "1.2rem" }}>{value}</p>
                </div>
            )}

            {error && (
                <p style={{ marginTop: "1rem", color: "red" }}>{error}</p>
            )}
        </main>
    );
}