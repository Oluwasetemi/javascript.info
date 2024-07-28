import { saveAs } from "file-saver";

let ctx = canvasElem.getContext("2d");
const { width, height } = canvasElem;

canvasElem.onmousemove = function (e) {
  ctx.strokeStyle = 'black';
  ctx.lineTo((e.clientX-canvasElem.offsetLeft) * 2, (e.clientY-canvasElem.offsetTop)*2);
  ctx.lineWidth = 1
  ctx.stroke();
};
canvasElem.onmousemove = function (e) {
  ctx.strokeStyle = 'black';
  ctx.lineTo((e.clientX - canvasElem.offsetLeft) * 2, (e.clientY - canvasElem.offsetTop) * 2);
  ctx.lineWidth = 1;
  ctx.stroke();
};

function saveAsNew(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

async function submit() {
  let blob = await new Promise((resolve) =>
    canvasElem.toBlob(resolve, "image/png")
  );


  // can replace saveAs with function
  saveAs(blob, "signature.png");
  saveAsNew(blob, "signature-new.png");
  uploadFile(blob)

}

async function uploadFile(file) {
  let cloudName = "drnqdd87d";

  let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  let fd = new FormData();
  fd.append("upload_preset", "new_preset");
  fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
  fd.append("file", file);
  console.log(fd);
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "X-Requested-With": "fetch",
    },
    body: fd
  });

  const response = await res.json();

  var newUrl = response.secure_url;
  // Create a thumbnail of the uploaded image, with 150px width
  var tokens = newUrl.split("/");
  tokens.splice(-3, 0, "w_150,c_scale");
  var img = new Image(); // HTML5 Constructor
  img.src = tokens.join("/");
  img.alt = response.public_id;
  document.body.appendChild(img);
}

document.querySelector('input[type="button"]').onclick = function () {
  submit();
};

document.querySelector('#clear').addEventListener('click',function () {
  ctx.clearRect(0, 0, width, height);
});
