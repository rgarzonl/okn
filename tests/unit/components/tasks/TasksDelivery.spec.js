import { mount, shallowMount } from './../../common.js';
import TasksDelivery from '@/components/tasks/TasksDelivery.vue'

describe('TasksDelivery.vue', () => {
  test('component has a name', () => {
    const wrapper = mount(TasksDelivery);
    expect(wrapper.vm.$options.name).toBe('TasksDelivery');
  });

  test('openDialog method is called when button is pressed', () => {
    const wrapper = mount(TasksDelivery);
    wrapper.setData({
      msg: 'Hello Word'
    });
    expect(wrapper.vm.msg).toBe('Hello Word');
  });
  
  test('openDialog method is called when button is pressed', () => {
    const wrapper = mount(TasksDelivery);
    wrapper.setData({
      taskModel: {}
    });
    expect(wrapper.vm.deliveries).toStrictEqual([])
  });

  test('the button to add a comment is initially disabled', () => {
    const wrapper = shallowMount(TasksDelivery);
    const button = wrapper.find('.delivery__input-button el-button-stub');
    const buttonDisabled = button.find('[disabled="true"]');
    expect(buttonDisabled.exists()).toBe(true)
  });

  test('the button to add a comment is enabled when the message is initialized with a text string ', async () => {
    const wrapper = shallowMount(TasksDelivery);
    wrapper.setData({
      msg: 'Hello Word'
    });
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.delivery__input-button el-button-stub');
    const buttonDisabled = button.find('[disabled]');
    expect(buttonDisabled.exists()).toBe(false)
  });

  test('PRUEBA4 ', () => {
    const wrapper = shallowMount(TasksDelivery, {
      data() {
        return {
          msg: 'Hello Word',
        }
      }
    })
    wrapper.vm.addComment();
    expect(wrapper.vm.msg).toBe('')
  });

  test('when calling the addComment method, a new message is added to the taskModel object and the message is set to empty ', () => {
    const newMsg = 'Hello Word'
    const wrapper = shallowMount(TasksDelivery, {
      data() {
        return {
          msg: newMsg,
        }
      }
    })
    wrapper.vm.addComment();
    expect(wrapper.vm.msg).toBe('')
    const ultimoMsg = !!wrapper.vm.taskModel.deliveries[wrapper.vm.taskModel.deliveries.length - 1].comments.find(({ comment }) => comment.toString() === newMsg.toString())
    expect(ultimoMsg).toBe(true)
  });

})
