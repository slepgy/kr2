const animals = [
    { name: "Раф", price: "Парень я активный: люблю долгие прогулки и подвижные игры. Правила жизни в доме знаю на отлично, надеюсь, что скоро найду любящего хозяина! Скорее приезжайте знакомиться, всех жду!", img: "./собака1.jpg" },
    { name: "Кася", price: "У меня очень красивая и улыбчивая мордочка, шикарные уши и добрые глазки! Моя мечта — обрести дом и любящего хозяина, которому я смогу раскрыть своё сердце.", img: "./собака2.jpg" },
    { name: "Валдай", price: "Я ласковый парень, очень люблю внимание от людей — когда меня чешут за ушком и играются со мной удочкой.", img: "./собака3.jpg" },
    { name: "Пэнни", price: "Я красивая смешнуля с большими-большими глазами. Во мне течет кровь настоящей аристократки, ведь я породистая Британка.", img: "./собака4.jpg" },
    { name: "Джо", price: "Ищу дом со скрипкой", img: "./собака5.jpg" },
     { name: "Джери", price: "Просто хороший друг", img: "./собака6.jpg" },
];

function renderAnimals() {
    const container = document.getElementById("animal-list");
    if (!container) return;

    animals.forEach(animal => {
        const card = `
        <div class="col-md-4 mb-4 d-flex justify-content-center">
            <div class="animal-card">
                <img src="${animal.img}" class="img-fluid rounded mb-2">
                <h5>${animal.name}</h5>
                <p>${animal.price}</p>
                <p class="card-text">Выбор <input class="w-25" type="checkbox" name="choice"></p>
            </div>
        </div>`;
        container.innerHTML += card;
    });
}

renderAnimals();
