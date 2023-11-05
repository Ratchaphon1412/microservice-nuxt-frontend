<template>
    <div class="flex items-center justify-center">
        <button @click="down()" id="decrement-btn"
            class="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        <span id="counter" class="w-4 text-center text-xl font-semibold mx-4">{{ counter }}</span>
        <button @click="up()" id="increment-btn"
            class="flex justify-center items-center w-8 h-8 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12"></path>
            </svg>
        </button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(['counter'])
const emits = defineEmits(['update-counter'])
const counter = ref(props.counter);

function up() {
    counter.value++
    console.log(counter)
    emits(
        'update-counter', 
        counter.value)
}
function down() {
    if (counter.value > 1)
        counter.value--
    console.log(counter)
    emits(
        'update-counter', 
        counter.value)}
</script>