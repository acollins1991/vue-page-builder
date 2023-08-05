import { VueWrapper, shallowMount } from '@vue/test-utils'
import { describe, it, beforeAll, expect } from 'vitest'
import ViewportButton from '../ViewportButton.vue'

describe('ViewportButtons', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    wrapper = shallowMount(ViewportButton)
  })
  it('Renders the root ViewportButton button', () => {
    expect(wrapper.find('button[data-vitest-id=ViewportButton]').exists()).toBe(true)
  })
})
