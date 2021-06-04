<template>
  <section class="medication-list">
    <MedicationPreview
      v-for="medication in medications"
      :key="medication.id"
      :id="medication.id"
      :is-admin="isAdmin"
      :medication="medication"
    />
      <!-- :thumbnail="medication.thumbnail"
      :title="medication.title"
      :previewText="medication.previewText" -->
  </section>
</template>

<script>
import MedicationPreview from "@/components/Medications/MedicationPreview";

export default {
  components: {
    MedicationPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    medications: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.medication-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

