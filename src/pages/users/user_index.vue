<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4" v-for="user in users" :key="user.id">
    <UserCardViwe :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardViwe from "@/components/users/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    UserCardViwe,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    const route = useRoute();

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getUsers();

    return { users, loading, route };
  },
};
</script>

<style>
</style>