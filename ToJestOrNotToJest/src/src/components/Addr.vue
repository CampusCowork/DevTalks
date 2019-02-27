<template>
  <div>
    <h1 class="logo text-purple text-5xl">
      {{ getAppName() }}
    </h1>

    <div class="addr flex mx-auto items-center justify-center mt-8">
      <addr-input @change="firstValue = $event"></addr-input>
      <span class="font-bold mx-4">+</span>
      <addr-input @change="secondValue = $event"></addr-input>
      <span class="font-bold mx-4">=</span>
      <addr-result :value="result"></addr-result>
    </div>
  </div>
</template>

<script>
import AddrInput from './AddrInput'
import AddrResult from './AddrResult'

export default {
  components: { AddrInput, AddrResult },

  data: () => ({ firstValue: null, secondValue: null }),

  computed: {
    result () {
      return this.firstValue + this.secondValue
    }
  },

  methods: {
    getAppName (wantNoBugs = true) {
      let name = null
      if (wantNoBugs) {
        name = 'addr+'
      }
      return name.toUpperCase()
    }
  }
}
</script>
