<template>
  <div>
    <BasicLayout>
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
    
    onMounted(async () => {
      const response = await getCharacters();
      console.log(response);
      characters.value = response.results;
    })


    return {
      characters,
    }
  }
}
</script>

<style>

</style>