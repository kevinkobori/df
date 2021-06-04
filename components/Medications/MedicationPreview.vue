<template>
  <nuxt-link :to="medicationLink" class="medication-preview">
    <article>
      <div
        class="medication-thumbnail"
        :style="{ backgroundImage: 'url(' + medication.thumbnail + ')' }"
      ></div>
      <div class="medication-content">
        <h1>{{ medication.title }}</h1>
        <p>{{ medication.previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "MedicationPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    medication: {
      type: Object,
      required: true,
    },
    // title: {
    //   type: String,
    //   required: true
    // },
    // previewText: {
    //   type: String,
    //   required: true
    // },
    // thumbnail: {
    //   type: String,
    //   required: true
    // }
  },
  computed: {
    medicationLink() {
      return this.isAdmin
        ? "/medications/" + this.id
        : "/medications/" + this.id;
    },
  },
};
</script>


<style scoped>
.medication-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .medication-preview {
    width: 400px;
    margin: 10px;
  }
}

.medication-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.medication-content {
  padding: 10px;
  text-align: center;
}

a:hover .medication-content,
a:active .medication-content {
  background-color: #ccc;
}
</style>
