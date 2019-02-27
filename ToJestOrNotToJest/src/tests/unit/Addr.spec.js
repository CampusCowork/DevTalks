import { shallowMount } from '@vue/test-utils'
import Addr from '@/components/Addr.vue'

describe('Addr.vue', () => {
  describe('a bugged function', () => {
    const wrapper = shallowMount(Addr)
    const vm = wrapper.vm

    it('works great and has perfect line coverage', () => {
      expect(vm.getAppName()).toBe('ADDR+')
    })

    it('sometimes buggs out', () => {
      expect(() => vm.getAppName(false))
        .toThrow(new TypeError("Cannot read property 'toUpperCase' of null"))
    })
  })
})
