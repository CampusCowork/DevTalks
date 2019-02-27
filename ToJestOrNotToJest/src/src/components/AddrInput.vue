<template>
  <div class="addr-input">
    <input data-cy="input" type="text" v-model="value" @input="broadcast" class="px-4 py-2 w-32 bg-grey-lighter outline-none">
  </div>
</template>

<script>
export default {
  name: 'AddrInput',

  data: () => ({
    value: null
  }),

  methods: {
    broadcast (e) {
      this.$emit('change', parseFloat(e.target.value))
    }
  }
}
</script>
