import { shallowMount } from '@vue/test-utils'
import AddrInput from '@/components/AddrInput.vue'

describe('AddrInput.vue', () => {
  it('notifies parent when the value is changed', () => {
    const value = 42
    const wrapper = shallowMount(AddrInput)

    const input = wrapper.find('input')
    input.element.value = value
    input.trigger('input')

    expect(wrapper.emitted().change.length).toBe(1)
    expect(wrapper.emitted().change[0]).toEqual([value])
  })
})
