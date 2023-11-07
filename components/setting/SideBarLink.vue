<template>
    <NuxtLink class="transition duration-150 ease-in-out hover:bg-gray-200 px-3 py-2 rounded-md text-center"
    :to="to">
    <slot />
    </NuxtLink>
</template>
<script setup land="ts">
    const props = defineProps([
        'to'
    ])
</script>