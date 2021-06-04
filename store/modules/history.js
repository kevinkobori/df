export default {
    state: () => ({
        loadedHistories: [],
    }),
    mutations: {
        setHistories(state, histories) {
            state.loadedHistories = histories;
        },
        addHistory(state, history) {
            state.loadedHistories.push(history);
        },
        editHistory(state, editedHistory) {
            const historyIndex = state.loadedHistories.findIndex(
                history => history.id === editedHistory.id
            );
            state.loadedHistories[historyIndex] = editedHistory;
        }
    },
    actions: {
        addHistory(vuexContext, history) {
            const createdHistory = {
                ...history,
                updatedDate: new Date()
            };
            return this.$axios
                .$history(
                    "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/histories.json?auth=" +
                    vuexContext.state.token,
                    createdHistory
                )
                .then(data => {
                    vuexContext.commit("addHistory", { ...createdHistory, id: data.name });
                })
                .catch(e => console.log(e));
        },
        editHistory(vuexContext, editedHistory) {
            return this.$axios
                .$put(
                    "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/histories/" +
                    editedHistory.id +
                    ".json?auth=" +
                    vuexContext.state.token,
                    editedHistory
                )
                .then(res => {
                    vuexContext.commit("editHistory", editedHistory);
                })
                .catch(e => console.log(e));
        },
        setHistories(vuexContext, histories) {
            vuexContext.commit("setHistories", histories);
        },
    },
    getters: {
        loadedHistories(state) {
            return state.loadedHistories;
        }
    }
};
