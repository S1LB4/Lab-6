import { FilmsType } from "./Type";

export type observer = ({render: () => void} & HTMLElement);

export type AppState = {
    FavFilms: FilmsType[]
}

export enum FilmsActions{
    "ADD" = "ADD",
    "GET" = "GET"
}

export interface AddFilmsActions{
    action: FilmsActions.ADD,
    payload: FilmsType
}

export interface GetFilmsActions{
    action: FilmsActions.GET,
    payload: FilmsType[]
}

export type Actions = AddFilmsActions | GetFilmsActions