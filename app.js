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
    formData.append("chat_id", "5816401755");  // Вставь ID чата или user_id
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