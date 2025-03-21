let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("Отправить")
tg.MainButton.show()

const InpTitle = document.querySelector('#title')
const InpDesc = document.querySelector('#desc')
const InpStar = document.querySelector('#star').value
const category = document.querySelector('#categorys').value

const labelTitle = document.querySelector('.title-label')

let data = {
    title: InpTitle.value,
    desc: InpDesc.value,
    stars: InpStar,
    category: category
}

tg.MainButton.onClick(() => {
    tg.sendData(JSON.stringify(data))
})