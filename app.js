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
    if (InpTitle.length == 0) {
        InpTitle.style.border = "2px solid red"
        labelTitle.style.color = "red"
        setTimeout(() => {
            InpTitle.style.border = "2px solid var(--tg-theme-text-color)"
            labelTitle.style.color = "var(--tg-theme-text-color)"
        }, 2000)
    } else if (InpDesc.length == 0) {
        InpDesc.style.border = "2px solid red"
        labelDesc.style.color = "red"
        setTimeout(() => {
            InpDesc.style.border = "2px solid var(--tg-theme-text-color)"
            labelDesc.style.color = "var(--tg-theme-text-color)"
        }, 2000)
    } else if (InpStar.length == 0) {
        InpStar.style.border = "2px solid red"
        InpStar.style.color = "red"
        setTimeout(() => {
            InpStar.style.border = "2px solid var(--tg-theme-text-color)"
            InpStar.style.color = "var(--tg-theme-text-color)"
        }, 2000)
    } else {
        tg.sendData(JSON.stringify(data))
    }
})