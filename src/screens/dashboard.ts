import '../components/export'
import { starapi } from "../services/starapi";
import { AttributesCard } from "../components/card/card";
import { FilmsType } from "../types/Type";
import { appState, dispatch } from '../store/index';

export default class AppDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async connectedCallback() {
        const data = await starapi();
        this.render(data)

        if(appState.FavFilms.length === 0){
            const action = await starapi();
            dispatch(action);
        }else{
            this.render(data)
        }
    }

    render(data : any) {

        if(this.shadowRoot){this.shadowRoot.innerHTML=``}

            const tittle = this.ownerDocument.createElement('h1');
            tittle.innerText = "Characters"

            const sectionFilms = this.ownerDocument.createElement('section');

            sectionFilms.appendChild(tittle)

        data.forEach((e: FilmsType) => {
            const cards = this.ownerDocument.createElement('app-card');
            cards.setAttribute(AttributesCard.name, e.name);
            cards.setAttribute(AttributesCard.height, e.height);
            cards.setAttribute(AttributesCard.mass, e.mass);
            cards.setAttribute(AttributesCard.gender, e.gender);
            sectionFilms.appendChild(cards);



        });
        this.shadowRoot?.appendChild(sectionFilms)

        const favTittle = this.ownerDocument.createElement('h1');
        favTittle.innerText = "Favorite Films"

        const sectionFavorites = this.ownerDocument.createElement('section');
        sectionFavorites.appendChild(favTittle);

        appState.FavFilms.forEach((fav, i)=>{
            const cards = this.ownerDocument.createElement('app-card');
            cards.setAttribute(AttributesCard.name, fav.name);
            cards.setAttribute(AttributesCard.height, fav.height);
            cards.setAttribute(AttributesCard.mass, fav.mass);
            cards.setAttribute(AttributesCard.gender, fav.gender);
            sectionFavorites.appendChild(cards);
        })
        this.shadowRoot?.appendChild(sectionFavorites)
    }
}


customElements.define('app-dashboard', AppDashboard)
