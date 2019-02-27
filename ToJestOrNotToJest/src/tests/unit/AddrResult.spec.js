import { shallowMount } from '@vue/test-utils'
import AddrResult from '@/components/AddrResult.vue'

describe('AddrResult.vue', () => {
  it('renders props.value when passed', () => {
    const value = 42
    const wrapper = shallowMount(AddrResult, {
      propsData: { value }
    })
    expect(wrapper.text()).toMatch(value.toString())
  })
})
