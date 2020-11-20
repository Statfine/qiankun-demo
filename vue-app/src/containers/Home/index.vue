<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <p>Home Page</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('vue2.0写法 created');
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    close() {
      console.log('close');
    },
  },
};
</script>