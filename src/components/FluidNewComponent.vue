<template>
  <fluid-theme-provider theme="corp">
    <fluid-card
      title="FLUID Form Vue 3 Example"
      collapsible="false"
      remove-header-border
    >
      <fluid-form ref="form" .config="config"> </fluid-form>
    </fluid-card>

    <fluid-footer>
      <fluid-footer-content>
        © 2022 FLUID Design Team | Liberty Mutual Insurance, 175 Berkeley
        Street, Boston, MA 02116
      </fluid-footer-content>
    </fluid-footer>
  </fluid-theme-provider>
</template>

<script>
import { onMounted } from 'vue';
const config = {
  layout: 'vertical',
  submitConfig: {
    actionText: 'Submit',
    actionKey: 'formSubmitted',
  },
  cancelConfig: {
    actionText: 'Cancel',
    actionKey: 'formCancelled',
  },
  elements: [
    {
      dataPath: 'textInput',
      label: 'My Text Input',
      type: 'input',
    },
    {
      dataPath: 'currencyInput',
      label: 'My Currency Input',
      type: 'currency',
    },
    {
      dataPath: 'dateInput',
      label: 'My Date Input',
      type: 'date',
    },
    {
      dataPath: 'numberInput',
      label: 'My Number Input',
      type: 'number',
    },
  ],
};
export default {
  name: 'FluidNewComponent',
  setup() {
    const onActionClickedHandler = (event) => {
      console.log('actionClicked', event.detail);
    };

    const onValueChangedHandler = (event) => {
      console.log('valueChanged', event.detail);
    };

    const onFormChangedHandler = (event) => {
      console.log('formChanged', event.detail);
    };

    onMounted(() => {
      const fluidForm = document.querySelector('fluid-form');
      fluidForm.addEventListener('actionClicked', onActionClickedHandler);
      fluidForm.addEventListener('valueChanged', onValueChangedHandler);
      fluidForm.addEventListener('formChanged', onFormChangedHandler);
    });
  },
  data() {
    return {
      config,
    };
  },
};
</script>
