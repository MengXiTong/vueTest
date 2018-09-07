const state = {
    count: 0,
}

const getters = {
    getCount: state => state.count,
};

const actions = {
    add({ }, text) {
        console.log(text);
        state.count++;
    },
    reduce({ }, text) {
        console.log(text);
        state.count--;
    }
}

export default {
    state,
    getters,
    actions
}