<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal
            v-model="showModal"
            title="This is a modal"
        >
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus earum aperiam ex reprehenderit dolore voluptas autem
                debitis ratione, placeat, sunt obcaecati accusantium ea
                architecto atque inventore iusto ipsam voluptatum omnis?
            </p>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>
