<template>
    <div class="home">
        <h2 ref="appTitleRef">{{ appTitle }}</h2>

        <h3>{{ counterStore.title }}</h3>

        <div>
            <button @click="counterStore.decreaseCounter(2)" class="btn">
                --
            </button>
            <button @click="counterStore.decreaseCounter(1)" class="btn">
                -
            </button>
            <span class="counter">{{ counterStore.count }}</span>
            <button @click="counterStore.increaseCounter(1)" class="btn">
                +
            </button>
            <button @click="counterStore.increaseCounter(2)" class="btn">
                ++
            </button>
        </div>

        <p>This counter is {{ counterStore.oddOrEven }}</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input v-model="counterStore.title" type="text" v-autofocus />
        </div>
    </div>
</template>

<script setup>
/*
    imports
  */

import { ref, onMounted, computed } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

/*
    app title
  */

const appTitle = 'My Ok Counter App';

const appTitleRef = ref(null);

onMounted(() => {
    console.log(`
    The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

/*
  Counter store logic
*/
const counterStore = useCounterStore();

</script>

<style>
.home {
    text-align: center;
    padding: 20px;
}

.btn,
.counter {
    font-size: 40px;
    margin: 10px;
}

.edit {
    margin-top: 60px;
}
</style>
