<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
            <h1>This is a modal</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus earum aperiam ex reprehenderit dolore voluptas autem
                debitis ratione, placeat, sunt obcaecati accusantium ea
                architecto atque inventore iusto ipsam voluptatum omnis?
            </p>
            <button @click="showModal = false">Hide modal</button>
        </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
