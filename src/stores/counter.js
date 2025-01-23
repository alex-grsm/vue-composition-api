import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const title = ref('My Counter Title');

    function increaseCounter(amount) {
        count.value += amount;
    }

    function decreaseCounter(amount) {
        if (count.value > 0) count.value -= amount;
    }

    const oddOrEven = computed(() => (count.value % 2 === 0 ? 'even' : 'odd'));

    return { count, title, increaseCounter, decreaseCounter, oddOrEven }
})
