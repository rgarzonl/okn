import { mount, shallowMount } from './../../common.js';

import Tasks from '@/components/tasks/Tasks.vue'

describe('Tasks.vue', () => {

  test('component has a name', () => {
    const wrapper = mount(Tasks);
    expect(wrapper.vm.$options.name).toBe('Tasks');
  });

  test('openDialog method is called when button is pressed', () => {
    const wrapper = mount(Tasks)
    wrapper.find('.el-button').trigger('click');
    expect(wrapper.vm.dialogVisible).toBe(true);
  });

  test('change the value of dialogVisible when the closeDialog method is called', () => {
    const wrapper = mount(Tasks)
    wrapper.vm.closeDialog();
    expect(wrapper.vm.dialogVisible).toBe(false);
  });

  test('change the value of dialogVisible when the handleClose method is called', () => {
    const wrapper = mount(Tasks)
    wrapper.vm.handleClose();
    expect(wrapper.vm.dialogVisible).toBe(false);
  });
  
})
