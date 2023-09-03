<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['guest']
})
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>