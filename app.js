document.getElementById("pdfForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const pdfFile = document.getElementById("pdfFile").files[0];
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
      const response = await fetch("https://resume-parser-2-hj8t.onrender.com/test", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process the file.");
      }

      const result = await response.json();
      document.getElementById("htmlResult").value = JSON.stringify(
        result.originalText
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the file.");
    }
  });
