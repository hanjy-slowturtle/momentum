const quotes = [
    {
        quote: "잭팟을 터뜨렸다고 말하는 사람들을 부러워해서는 안 된다. 이것이 성공적인 투자의 핵심이다.",
        author: "워렌버핏"
    },
    {
        quote: "장기적으로 뛰어난 투자 성적을 얻으려면, 단기적으로 나쁜 성적을 견뎌내야 한다.",
        author: "찰리멍거"
    },
    {
        quote: "투자의 성공 여부는 얼마나 오랫동안 세상의 비관론을 무시할 수 있는지에 달려있다.",
        author: "피터린치"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;