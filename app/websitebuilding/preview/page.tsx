"use client";
import { useEffect, useState } from "react";

const PreviewPage = () => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    const storedHtml = sessionStorage.getItem("previewHtml");
    if (storedHtml) {
      setHtmlContent(storedHtml);
      sessionStorage.removeItem("previewHtml");
    }
  }, []);

  return (
    <div>
      {htmlContent ? (
        <iframe
          srcDoc={htmlContent}
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      ) : (
        <div className="flex flex-col items-center translate-y-60 relative">
        <img
          src="/LoadingCircles.gif"
          alt="Loading"
          className="w-32 h-32 mb-2"
        />
      </div>
      )}
    </div>
  );
};

export default PreviewPage;
