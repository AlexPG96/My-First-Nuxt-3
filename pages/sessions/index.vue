<template>
  <div>
    <BasicLayout>
      <button @click="showElement">Click</button>
      <h1 v-if="message">Vue is awesome!</h1>
	    <h1 v-else>Oh no 😢</h1>
      <p>Message is: {{message}}</p>
      <template v-for="character in characters" :key="character.id">
        <Character :character="character" />
      </template>
    </BasicLayout>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import { getCharacters } from '~/api/characters';
export default {
  name: 'Characters',
  setup() {
    let characters = ref(null);
    const message = ref(true);
    const showElement = () => {
      message.value = !message.value;
      console.log(message.value);
    }
    
    onMounted(async () => {
      const response = await getCharacters();
      console.log(response);
      characters.value = response.results;
    })


    return {
      characters,
      showElement,
      message,
    }
  }
}
</script>

<style>

</style>