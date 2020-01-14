import immutable from "immutable"

const defaultState = immutable.fromJS({
    disTime: 5
})

export const time = (state = defaultState, action) => {
    // console.log(action)
    switch (action.type) {
        case "changeTime":
            return state.update("disTime", x => x - 1);

        default:
            return state;
    }
}