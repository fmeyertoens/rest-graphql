<template>
    <div class="home mx-auto">
        <Info />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "@/components/Info.vue"; // @ is an alias to /src

export default defineComponent({
    name: "home",
    components: {
        Info,
    },
});
</script>
