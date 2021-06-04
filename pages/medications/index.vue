<template>
  <div class="admin-page">
    <section class="new-medication">
      <AppButton @click="$router.push('/medications/new-medication')"
        >Create Medication</AppButton
      >
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-medications">
      <h1>Existing Medications</h1>
      <MedicationsList isAdmin :medications="loadedMedications" />
    </section>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  computed: {
    // ...mapGetters("medications", ["loadedMedications"]),
    // loadedMedications() {
    //   return this.$store.medications.getters.loadedMedications;
    // },
    // ...mapGetters("medications", ["loadedMedications"]),
    loadedMedications() {
      return this.$store.getters.loadedMedications;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/medications/auth");
    },
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-medication {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-medications h1 {
  text-align: center;
}
</style>
