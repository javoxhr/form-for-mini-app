async function sendAd() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;

    const imageFiles = [
        document.getElementById("image1").files[0],
        document.getElementById("image2").files[0],
        document.getElementById("image3").files[0]
    ].filter(file => file !== undefined); // Убираем пустые значения

    if (!title || !description || !price || imageFiles.length === 0) {
        alert("Заполните все поля!");
        return;
    }

    let fileIds = [];

    for (const file of imageFiles) {
        const formData = new FormData();
        formData.append("chat_id", "-1002572096308");  // Вставь ID чата
        formData.append("photo", file);

        const uploadResponse = await fetch(`https://api.telegram.org/bot8133411753:AAFs7d7oFkSfjZOTeS12MfZT7vWhczQ48Xc/sendPhoto`, {
            method: "POST",
            body: formData
        });

        const uploadData = await uploadResponse.json();
        if (!uploadData.ok) {
            alert("Ошибка загрузки изображения");
            return;
        }

        fileIds.push(uploadData.result.photo.pop().file_id);
    }

    // Отправляем все данные в Telegram WebApp
    const adData = JSON.stringify({
        title,
        description,
        price,
        status,
        images: fileIds // Теперь массив корректный
    });

    window.Telegram.WebApp.sendData(adData);
}

document.getElementById("submit").addEventListener("click", sendAd);



const fileId = "AgACAgIAAxkDAAM0Z-Y-6bvk9R-dNsTs1bl1jdEX7xgAAtfkMRs5YTBL3acJpQSJ3HIBAAMCAAN5AAM2BA";
fetch(`https://api.telegram.org/bot8133411753:AAFs7d7oFkSfjZOTeS12MfZT7vWhczQ48Xc/getFile?file_id=${fileId}`)
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          const filePath = data.result.file_path;
          const fileUrl = `https://api.telegram.org/file/bot8133411753:AAFs7d7oFkSfjZOTeS12MfZT7vWhczQ48Xc/${filePath}`;
          console.log("Ссылка на изображение:", fileUrl);
      } else {
          console.error("Ошибка получения файла:", data.description);
      }
  })
  .catch(error => console.error("Ошибка запроса:", error));
