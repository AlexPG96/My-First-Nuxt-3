<template>
  <div>
    <p>Hola config</p>
    <h3>Api response with useAsyncData</h3>
    <template v-for="(character, index) in data.results" :key="index">
      <p>{{character.name}}</p>
    </template>
    <p>{{data.results}}</p>
  </div>
</template>

<script setup>
import {API_URL} from '~/utils/constants';
  const { data } = await useAsyncData('character', () => $fetch(`${API_URL}` +  '/character'));
</script>
