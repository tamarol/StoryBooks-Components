import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
    title:'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: {control:'select'},
        color:{control:'select'},
        fontcolor:{control:'color'}
    }
} as ComponentMeta<typeof MyLabel>
const template:ComponentStory<typeof MyLabel> = (args) =><MyLabel {...args} />


export const Basic  = template.bind({});
Basic.args={
    size:"normal",
    allCaps:false
}
export const AllCaps  = template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps:true
}
export const Secondary  = template.bind({});
Secondary.args = {
    size:'normal',
    color:'text-secondary'
}
export const tertiary  = template.bind({});
tertiary.args = {
    size:'normal',
    color:'text-tertiary'
}

//custom font-color
//font color
//size
export const CustomFontColor  = template.bind({});
tertiary.args = {
    size:'h1',
    fontcolor:'#5517ac'
}