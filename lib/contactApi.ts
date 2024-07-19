export const sendContactForm = (url, data) =>
  fetch(`/api/contact/${url}/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });
