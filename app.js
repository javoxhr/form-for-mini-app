async function sendAd() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;
    const imageFile = document.getElementById("image").files[0];

    if (!title || !description || !price || !imageFile) {
        alert("Заполните все поля!");
        return;
    }

    // Загружаем изображение в Telegram
    const formData = new FormData();
    formData.append("chat_id", "-1002572096308");  // Вставь ID чата или user_id
    formData.append("photo", imageFile); // Передаем сам файл
    
    const uploadResponse = await fetch(`https://api.telegram.org/bot8133411753:AAFs7d7oFkSfjZOTeS12MfZT7vWhczQ48Xc/sendPhoto`, {
        method: "POST",
        body: formData
    });
    

    const uploadData = await uploadResponse.json();
    if (!uploadData.ok) {
        alert("Ошибка загрузки изображения");
        return;
    }

    const photoFileId = uploadData.result.photo.pop().file_id;

    // Отправляем данные в Telegram WebApp
    const adData = JSON.stringify({
        title,
        description,
        price,
        status,
        img: photoFileId
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
          document.querySelector('#img').srs = fileUrl
          console.log("Ссылка на изображение:", fileUrl);
      } else {
          console.error("Ошибка получения файла:", data.description);
      }
  })
  .catch(error => console.error("Ошибка запроса:", error));
