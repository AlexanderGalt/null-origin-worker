// worker.js
self.onmessage = async function(e) {
  try {
    const response = await fetch(e.data);
    const text = await response.text();
    self.postMessage({ success: true, data: text });
  } catch (err) {
    self.postMessage({ success: false, error: err.toString() });
  }
};
