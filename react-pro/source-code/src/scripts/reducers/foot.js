import immutable from "immutable"

const defaultState = immutable.fromJS({
    data: []
})

export const foot = (state = defaultState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case "getFoot":
            return state.set("data", action.payload);

        default:
            return state;
    }
}