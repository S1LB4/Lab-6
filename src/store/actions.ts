import { starapi } from "../services/starapi";
import { AddFilmsActions, GetFilmsActions, FilmsActions } from "../types/store";

export const getFilms = async (): Promise<GetFilmsActions> => {
        const Films = starapi();
        return{
            action: FilmsActions.GET,
            payload: []
        }
}

export const addNewQuote = ({payload}: Pick<AddFilmsActions, "payload">): AddFilmsActions => {
    return{
        action: FilmsActions.ADD,
        payload
    }
}
