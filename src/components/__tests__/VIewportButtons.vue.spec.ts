import { VueWrapper, shallowMount } from '@vue/test-utils'
import { describe, it, beforeAll, expect } from 'vitest'
import ViewportButtons from '../ViewportButtons.vue'

describe('ViewportButtons', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    wrapper = shallowMount(ViewportButtons)
  })
  it('Renders the root ViewportButtons div', () => {
    expect(wrapper.find('[data-vitest-id=ViewportButtons]').exists()).toBe(true)
  })
})
