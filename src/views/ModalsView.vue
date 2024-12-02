<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>Show dark modals?</label>
            <input
                v-model="showDarkModals"
                type="checkbox"
            />
        </div>
        <button @click="showModal = true">Show modal</button>
        <component
            v-model="showModal"
            :is="showDarkModals ? ModalDark : Modal"
            title="This is a modal"
        >
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus earum aperiam ex reprehenderit dolore voluptas autem
                debitis ratione, placeat, sunt obcaecati accusantium ea
                architecto atque inventore iusto ipsam voluptatum omnis?
            </p>
        </component>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const showDarkModals = ref(false);
const showModal = ref(false);
</script>
