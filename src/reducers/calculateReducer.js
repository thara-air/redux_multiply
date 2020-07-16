let init = {
    total : 0,
};
export default function calculate(state = init, action) {
    console.log(action);
    switch (action.type) {
        case "CAL_TOTAL":
            return { state, ...{ total: action.total } };
        default:
            return state;
    }

}