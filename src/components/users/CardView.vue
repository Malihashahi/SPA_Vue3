<template>
  <div class="card">
    <div class="card-header">{{ user.name }}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.email }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        user:Object
    }
};
</script>

<style>
</style>