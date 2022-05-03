<template>
    <div class="card">
        <div class="image">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="content">
            <div class="header">{{character.name}}</div>
            <div class="description">{{character.species}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Character",
  props: {
      character: Object,
  },
}
</script>

<style scoped>
.card {
  width: 150px;
  height: 150px;
  border: 1px solid black;

}
.image {
  width: 100%;
  height: 50%;
}
</style>