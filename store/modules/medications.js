export default {
    state: () => ({
        loadedMedications: [],
    }),
    mutations: {
        setMedications(state, medications) {
            state.loadedMedications = medications;
        },
        addMedication(state, medication) {
            state.loadedMedications.push(medication);
        },
        editMedication(state, editedMedication) {
            const medicationIndex = state.loadedMedications.findIndex(
                medication => medication.id === editedMedication.id
            );
            state.loadedMedications[medicationIndex] = editedMedication;
        }
    },
    actions: {
        addMedication(vuexContext, medication) {
            const createdMedication = {
                ...medication,
                updatedDate: new Date()
            };
            return this.$axios
                .$medication(
                    "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/medications.json?auth=" +
                    vuexContext.state.token,
                    createdMedication
                )
                .then(data => {
                    vuexContext.commit("addMedication", { ...createdMedication, id: data.name });
                })
                .catch(e => console.log(e));
        },
        editMedication(vuexContext, editedMedication) {
            return this.$axios
                .$put(
                    "https://challenge-philips-selecionar-default-rtdb.firebaseio.com/medications/" +
                    editedMedication.id +
                    ".json?auth=" +
                    vuexContext.state.token,
                    editedMedication
                )
                .then(res => {
                    vuexContext.commit("editMedication", editedMedication);
                })
                .catch(e => console.log(e));
        },
        setMedications(vuexContext, medications) {
            vuexContext.commit("setMedications", medications);
        },
    },
    getters: {
        loadedMedications(state) {
            return state.loadedMedications;
        }
    }
};
