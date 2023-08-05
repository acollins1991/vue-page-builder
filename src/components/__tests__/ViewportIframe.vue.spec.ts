import { shallowMount, type VueWrapper } from '@vue/test-utils'
import { beforeAll, describe, expect, it } from 'vitest'
import ViewportIframe from '../ViewportIframe.vue'

describe('ViewportIframe', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    wrapper = shallowMount(ViewportIframe)
  })
  it('Renders the root ViewportIframe iframe', () => {
    expect(wrapper.find('iframe[data-vitest-id=ViewportIframe]').exists()).toBe(true)
  })
})
