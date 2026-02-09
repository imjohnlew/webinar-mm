
import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFExportButton = ({ targetId, fileName = 'journey-builder-export' }) => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        const element = document.getElementById(targetId);
        if (!element) return;

        setIsExporting(true);

        try {
            // Add a generous buffer to the height to prevent bottom cutoff
            const fullHeight = element.scrollHeight + 500;
            const fullWidth = element.scrollWidth;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#0f172a',
                width: fullWidth,
                height: fullHeight,
                windowWidth: fullWidth,
                windowHeight: fullHeight,
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0,
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.getElementById(targetId);
                    if (clonedElement) {

                        // 1. Force styles on the target element itself
                        clonedElement.style.height = `${fullHeight}px`;
                        clonedElement.style.minHeight = `${fullHeight}px`;
                        clonedElement.style.maxHeight = 'none';
                        clonedElement.style.overflow = 'visible';
                        clonedElement.style.transform = 'none';

                        // 2. Clear transforms on all children
                        Array.from(clonedElement.querySelectorAll('*')).forEach(el => {
                            el.style.transform = 'none';
                            // Also ensure no child is hiding overflow inappropriately
                            if (getComputedStyle(el).overflow === 'hidden' || getComputedStyle(el).overflowY === 'hidden') {
                                el.style.overflow = 'visible';
                            }
                        });

                        // 3. Make sticky elements static so they render in flow
                        const stickyElements = clonedElement.querySelectorAll('.sticky');
                        stickyElements.forEach(el => {
                            el.style.position = 'static';
                        });

                        // 4. Important: Walk up the DOM to un-constrain all parents
                        // This ensures the "window" of the clone is fully expanded
                        let parent = clonedElement.parentElement;
                        while (parent && parent.tagName !== 'HTML') {
                            parent.style.height = 'auto';
                            parent.style.minHeight = '100%';
                            parent.style.maxHeight = 'none';
                            parent.style.overflow = 'visible';
                            parent = parent.parentElement;
                        }
                    }
                }
            });

            const imgData = canvas.toDataURL('image/png');

            // Create PDF based on canvas dimensions
            const pdf = new jsPDF({
                orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${fileName}.pdf`);

        } catch (error) {
            console.error('PDF Export failed:', error);
            alert('Failed to export PDF');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className={`
        fixed bottom-6 right-6 z-50 
        flex items-center gap-2 px-4 py-3 
        bg-blue-600 hover:bg-blue-500 text-white 
        rounded-full shadow-lg shadow-blue-900/50 
        transition-all transform hover:scale-105 active:scale-95
        disabled:opacity-70 disabled:cursor-not-allowed
      `}
            title="Export to PDF"
        >
            {isExporting ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="font-medium">Generating DO NOT TOUCH...</span>
                </>
            ) : (
                <>
                    <Download className="w-5 h-5" />
                    <span className="font-medium">Export PDF</span>
                </>
            )}
        </button>
    );
};

export default PDFExportButton;
