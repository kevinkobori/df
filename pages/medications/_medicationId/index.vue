<template>
  <div class="admin-medication-page">
    <section class="update-form">
      <AdminMedicationForm :medication="loadedMedication" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminMedicationForm from "@/components/Medications/AdminMedicationForm";

export default {
  // layout: "admin",
  middleware: ['check-auth', 'auth'],
  components: {
    AdminMedicationForm
  },
  asyncData(context) {
    return context.app.$axios
      .$get(
        process.env.baseUrl + "/medications/" +
          context.params.medicationId +
          ".json"
      )
      .then(data => {
        return {
          loadedMedication: { ...data, id: context.params.medicationId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedMedication) {
      this.$store.dispatch("editMedication", editedMedication).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
