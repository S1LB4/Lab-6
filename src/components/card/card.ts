
import { dispatch } from "../../store/index"

export enum AttributesCard{
    "name" = "name",
    "height" = "height",
    "mass" = "mass",
    "gender" = "gender"
}

export default class AppCard extends HTMLElement {
    name?:string
    height?:string
    mass?: string
    gender?:string


    static get observedAttributes(){
        const attrs: Record<AttributesCard, null> = {
            name: null,
            height: null,
            mass: null,
            gender: null
        }
        return Object.keys(attrs)
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(
        propName: AttributesCard,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const section = this.ownerDocument.createElement('section')
        const Name = this.ownerDocument.createElement('h2')
        Name.innerText = `${this.name}`;
        this.shadowRoot?.appendChild(Name);
        const Height = this.ownerDocument.createElement('h3')
        Height.innerText = `${this.height}`;
        this.shadowRoot?.appendChild(Height);
        const Mass = this.ownerDocument.createElement('h3')
        Mass.innerText = `${this.mass}`;
        this.shadowRoot?.appendChild(Mass);
        const Gender = this.ownerDocument.createElement('h3')
        Gender.innerText = `${this.gender}`;
        this.shadowRoot?.appendChild(Gender);
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = "Add Favorite"
        btn.addEventListener('click', ()=>{
            dispatch(
                addNewFilms({
                    payload:{
                        name:String(this.name),
                        height: String(this.height),
                        mass: String(this.mass),
                        gender: String(this.gender),
                    }
                })
            )
        })
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-card', AppCard)

function addNewFilms(arg0: { payload: { name: string; height: string; mass: string; gender: string } }): import("../../types/store").Actions {
    throw new Error("Function not implemented.")
}
