// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = "#0ff"; //color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: haha, //setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = "#0ff"; //color;
  });
}

function haha() {
  // alert(document.location.href);
  // console.log(document.location.href);
  const url =
    "https://example.com/startTime/1634379579180/endTime/1634465979180/tail";

  // const epochRgex = /([0-9]+)×([0-9]+)/;
  const epochRgex = /(.*)startTime\/([0-9]+)\/endTime\/([0-9]+)(.*)/;
  const match = url.match(epochRgex);
  if (match) {
    const head = match[1];
    const epochStart = match[2];
    const epochEnd = match[3];
    const tail = match[4];
    const newUrl = `${head}startTime/abc/endTime/123${tail}`;
    alert(newUrl);
  }

  // alert(document.location.href);

  // window.location.href = "https://yahoo.com";
  // chrome.storage.sync.get("color", ({ color }) => {
  //   document.body.style.backgroundColor = "#0ff"; //color;
  // });
}

// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     var checkPageButton = document.getElementById("checkPage");
//     checkPageButton.addEventListener(
//       "click",
//       function () {
//         chrome.tabs.getSelected(null, function (tab) {
//           d = document;

//           var f = d.createElement("form");
//           f.action = "http://gtmetrix.com/analyze.html?bm";
//           f.method = "post";
//           var i = d.createElement("input");
//           i.type = "hidden";
//           i.name = "url";
//           i.value = tab.url;
//           f.appendChild(i);
//           d.body.appendChild(f);
//           f.submit();
//         });
//       },
//       false
//     );
//   },
//   false
// );
