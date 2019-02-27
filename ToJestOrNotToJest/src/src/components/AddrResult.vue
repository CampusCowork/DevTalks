<template>
  <div class="addr-result">
    <span data-cy="result">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AddrResult',

  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
