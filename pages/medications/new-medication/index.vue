<template>
  <div class="admin-new-medication-page">
    <section class="new-medication-form">
      <AdminMedicationForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminMedicationForm from "@/components/Medications/AdminMedicationForm";

export default {
  middleware: ['check-auth', 'auth'],
  components: {
    AdminMedicationForm
  },
  methods: {
    onSubmitted(medicationData) {
      this.$store.dispatch("addMedication", medicationData).then(() => {
        this.$router.push("/medications");
      });
    }
  }
};
</script>

<style scoped>
.new-medication-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-medication-form {
    width: 500px;
  }
}
</style>
