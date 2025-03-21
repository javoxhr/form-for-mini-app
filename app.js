let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("Отправить")
tg.MainButton.show()

const InpTitle = document.querySelector('#title')
const InpDesc = document.querySelector('#desc').value
const InpStar = document.querySelector('#star').value
const category = document.querySelector('#categorys').value

let data = {
    title: InpTitle.value,
    desc: InpDesc,
    stars: InpStar,
    category: category
}

tg.MainButton.onClick(() => {
    if (!InpTitle.length) {
        InpTitle.style.border = "2px solid red"
        setTimeout(() => {
            InpTitle.style.border = "2px solid var(--tg-theme-text-color)"
        }, 2000)
    } else {
        tg.sendData(JSON.stringify(data))
    }
})