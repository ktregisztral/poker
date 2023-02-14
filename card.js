class Card extends HTMLElement {
    //♣, ♦, ♥, ♠
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});

        let card = document.createElement('div');
        card.classList.add('card');
        //card.className = 'card';

        let sign = document.createElement('div');
        let jelek = ['♥', '♦', '♣', '♠'];
        sign.classList.add('sign');
        sign.innerHTML = jelek[Number(this.dataset.sign)];

        if ((this.dataset.sign==0) || (this.dataset.sign==1)) {
            card.classList.add('red');
        };

        let number = document.createElement('div');
        number.classList.add('number');

        //number.innerHTML = this.dataset.ertek;
        // VAGY number.innerHTML = this.getAttribute('data-ertek');
        let ertek = this.dataset.ertek;
        let tisztek = ['J', 'Q', 'K'];
        if (ertek == 1) {ertek = 'A'}
        else {
            if (ertek > 10) {ertek = tisztek[ertek-11]}
        };
        number.innerHTML = ertek;

        let value = document.createElement('div');
        value.classList.add('value');

        value.appendChild(number);
        value.appendChild(sign);

        card.appendChild(value);
        card.appendChild(sign.cloneNode(true));
        card.appendChild(value.cloneNode(true));

        let cardCSS = document.createElement('link');
        cardCSS.setAttribute('rel', 'stylesheet');
        cardCSS.setAttribute('href', 'card.css');

        shadow.appendChild(cardCSS);
        shadow.appendChild(card);
    }
};
customElements.define('my-card',Card);
