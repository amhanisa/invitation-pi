<template>
  <div class="invitation">
    <h1>Dear,</h1>
    <h1>{{ user.name }}</h1>
    <h2>you are invited to acara</h2>
    <h2>here is the zoom link</h2>
  </div>
</template>

<script>
import User from "../services/user";

export default {
  data: () => ({
    user: null,
  }),
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id;
    console.log(this.id);

    this.user = User.getUser(this.id);
    console.log(User.getUser(124));
  },
};
</script>
