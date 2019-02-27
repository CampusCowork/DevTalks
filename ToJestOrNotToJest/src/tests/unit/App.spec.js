import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders the app component', () => {
    const wrapper = mount(App)
    expect(wrapper.element).toMatchSnapshot()
  })
})
