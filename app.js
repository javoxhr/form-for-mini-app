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

tg.MainButton.onClick(()=> {
    if(!InpTitle.length) {
        InpTitle.style.border = "2px solid red"
    } else {
        tg.sendData(JSON.stringify(data))
    }
})