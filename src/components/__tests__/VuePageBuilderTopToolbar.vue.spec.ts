import { VueWrapper, shallowMount } from '@vue/test-utils'
import { beforeAll, describe, expect, it } from 'vitest'
import VuePageBuilderTopToolbar from '../VuePageBuilderTopToolbar.vue'

describe('VuePageBuilderTopToolbar', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    wrapper = shallowMount(VuePageBuilderTopToolbar)
  })
  it('Renders the root VuePageBuilderTopToolbar div', () => {
    expect(wrapper.find('[data-vitest-id=VuePageBuilderTopToolbar]').exists()).toBe(true)
  })
})
