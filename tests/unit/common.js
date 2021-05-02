import {
  shallowMount as testShallow,
  mount as testMount,
  createLocalVue
} from '@vue/test-utils'
import Vue from 'vue'

import { i18n } from '@/lang/i18n'
import ElementUI from 'element-ui';
import moment from 'moment'

Vue.prototype.$moment = moment

const localVue = createLocalVue();
localVue.use(ElementUI);    

export function shallowMount(component, options) {
  return testShallow(component, { ...options, i18n, localVue })
}

export function mount(component, options) {
  return testMount(component, { ...options, i18n, localVue })
}
