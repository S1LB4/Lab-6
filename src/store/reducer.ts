import { Actions, AppState, FilmsActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const {action, payload} = currentAction;

    switch (action) {
        case FilmsActions.ADD:
            return{
                ...currentState,
                FavFilms:[
                    payload,
                    ...currentState.FavFilms,
                ]
            }

            case FilmsActions.GET:
                return {
                    ...currentState,
                    FavFilms: payload
                }
        default:
            return currentState
    }
}