import { Dialog } from './Dialog';

export default {
  title: 'Examen/Dialog',
  component: Dialog,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    showModal: true,
    title: 'título',
    text: 'Escriba aquí todo el parrafo',
  },
};


