import { beforeAll, describe, expect, it } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import { VuePageBuilder } from '@/build'

describe('test', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    wrapper = shallowMount(VuePageBuilder)
  })
  it('Renders the root VuePageBuilder div', () => {
    expect(wrapper.find('[data-vitest-id=VuePageBuilder]').exists()).toBe(true)
  })
})
