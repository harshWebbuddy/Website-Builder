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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PreviewPage;
