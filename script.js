
    function verifyNumber() {
      const input = document.getElementById("numberInput").value;
      const resultDiv = document.getElementById("result");
      const downloadBtn = document.getElementById("downloadBtn");
      resultDiv.innerHTML = "";
      downloadBtn.style.display = "none";

      if (input === "88055088") {
        const img = document.createElement("img");
        img.src = "/storage/emulated/0/Download/wallpaper-fond-ecran-mobile-iphone-android-4k-hd-dragon-ball-5.png?text=Your+Winner+Certificate";
        img.alt = "Winner Image";
        img.style.marginTop = "20px";
        img.style.maxWidth = "90%";
        resultDiv.appendChild(img);
        downloadBtn.style.display = "inline-block";
      } else {
        resultDiv.innerHTML = "<p style='color: red;'>Authentication failed</p>";
      }
    }

    function downloadImage() {
      const link = document.createElement('a');
      link.href = "/storage/emulated/0/Download/wallpaper-fond-ecran-mobile-iphone-android-4k-hd-dragon-ball-5.png?text=Your+Winner+Certificate";
      link.download = "Winner_Image.png";
      link.click();
    }
  
