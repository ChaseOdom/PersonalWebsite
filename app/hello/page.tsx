"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const BarcodeScanner = dynamic(
    async () => {
        // Standard import for the polyfill side-effect
        await import("react-barcode-scanner");
        const mod = await import("react-barcode-scanner");
        return mod.BarcodeScanner;
    },
    {
        ssr: false,
        loading: () => <p className="p-4 text-gray-500 italic">Initializing Camera...</p>
    }
);

export default function Page() {
    const [scannedData, setScannedData] = useState<string | null>(null);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
            <div className="z-10 max-w-lg w-full flex flex-col items-center gap-6">
                <h1 className="text-3xl font-extrabold text-gray-900">Barcode Scanner</h1>

                <div className="relative w-full aspect-video overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-black">
                    <BarcodeScanner
                        // FIXED: Changed from onCaptured to onCapture
                        // FIXED: Result is typically an array of detected barcodes
                        onCapture={(result) => {
                            if (result && result.length > 0) {
                                setScannedData(result[0].rawValue);
                            }
                        }}
                    />
                </div>

                <div className="w-full p-6 bg-white rounded-xl shadow-md">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
            Scan Result
          </span>
                    <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg min-h-[60px] flex items-center justify-center">
                        {scannedData ? (
                            <span className="text-xl font-mono text-blue-600 break-all">{scannedData}</span>
                        ) : (
                            <span className="text-gray-400 italic">Hold barcode up to camera</span>
                        )}
                    </div>
                    {scannedData && (
                        <button
                            type="button"
                            onClick={() => setScannedData(null)}
                            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                            Clear Result
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
}