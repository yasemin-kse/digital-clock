const hourEl = document.getElementById("hour");
 /* getElementById methodu ile yakaladığımız elemanların değerlerini elde edebilir veya istediğimiz değeri ekleyebilir, güncelleyebiliriz. */
/* JavaScript'de Sabit Tanımlar CONST
Değer olarak sabit olarak tanımlanan ve kod blog boyunca değişmeyen ve değiştirilemeyen değişkenler olarak tanımlanır. Burada dikkat edilmesi gereken tanımlanan sabitin ismi başka bir değişkene ve fonksiyona verilmez. Kod çalışırken sabitlere değer atanması yapılmaz. */
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");



function updateClock() {
    let h = new Date().getHours(); 
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    } 

    h = h < 10 ? "0" + h : h;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()