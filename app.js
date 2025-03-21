let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("Отправить")
tg.MainButton.show()

tg.MainButton.onClick(()=> {
    alert("Кнопка нажата!")
})