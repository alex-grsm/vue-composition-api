<template>
    <div class="posts">
        <h1>Posts</h1>

        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
            >
                <RouterLink :to="`/postDetail/${post.id}`">{{
                    post.title
                }}</RouterLink>
            </li>
        </ul>

        <textarea v-autofocus />

        <div>
            <button
                @click="counterStore.increaseCounter(1)"
                class="counter-button"
                :class="{'yellow' : counterStore.oddOrEven === 'odd'}"
            >
                {{ counterStore.count }}
            </button>
        </div>
    </div>
</template>

<script setup>
/*
    imports
  */

import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';
import { useCounterStore } from '@/stores/counter';

/*
    posts
  */

const posts = ref([
    {
        id: 'id1',
        title: 'Post 1',
    },
    {
        id: 'id2',
        title: 'Post 2',
    },
    {
        id: 'id3',
        title: 'Post 3',
    },
]);

/*
    counter
  */
const counterStore = useCounterStore();

</script>

<style scoped>
ul {
    margin-bottom: 30px;
}
.counter-button {
    font-size: 50px;
    background: pink;
    width: 30%;
}
.counter-button .yellow {
    background-color: yellow;
}
</style>
