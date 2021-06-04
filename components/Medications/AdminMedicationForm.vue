<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedMedication.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedMedication.title">Title</AppControlInput>
    <AppControlInput v-model="editedMedication.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedMedication.content">Content</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedMedication.previewText">Preview Text</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
export default {
  props: {
    medication: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedMedication: this.medication
        ? { ...this.medication }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the medication
      this.$emit('submit', this.editedMedication)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/medications");
    }
  }
};
</script>
