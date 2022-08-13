import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabel from "../../components/MyLabel/MyLabel";


export default {
  title: 'Components/MyLabel',
  component: MyLabel,
  argTypes:{
    size: {control: 'select'},
    color: {control: 'select'},
    fontColor: {control: 'color'},
  }
} as ComponentMeta<typeof MyLabel>;

// regresa una nueva instancia de mi componente
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// creamos una copia del template, rompiendo la referencia que se tiene del objeto de javascript.
// Si esto no se hace, estariamos mutando sobre el mismo objeto.

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  allCaps: true,
  fontColor: '#5517ac',
  size: 'h1',
}