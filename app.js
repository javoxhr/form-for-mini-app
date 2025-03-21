let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.setText("Отправить")
tg.MainButton.show()

const InpTitle = document.querySelector('#title').value
const InpDesc = document.querySelector('#desc').value
const InpStar = document.querySelector('#star').value
const category = document.querySelector('#categorys').value

tg.MainButton.onClick(() => {
    const InpTitle = document.querySelector('#title').value
    const InpDesc = document.querySelector('#desc').value
    const InpStar = document.querySelector('#star').value
    const category = document.querySelector('#categorys').value

    let data = {
        title: InpTitle,
        desc: InpDesc,
        stars: InpStar,
        category: category
    }
    
    tg.sendData(JSON.stringify(data))
})