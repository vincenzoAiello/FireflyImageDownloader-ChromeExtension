document
  .getElementById("downloadButton")
  .addEventListener("click", downloadImage);

function downloadImage() {
  chrome.tabs.query({ active: true }).then((tabs) => {
    const activeTab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ["content_script.js"],
    });
  });
}
