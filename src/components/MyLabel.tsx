import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface Props{
  /**
   * tamaño de label
   */
  label?: string;
  /**
   * tamaño
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  allCaps?:boolean;

  color?:'text-primary' | 'text-secondary' | 'text-tertiary'

  fontcolor?:string;

  backgroundColor?:string;
}


const MyLabel = ({
  label="No Label",
  size='normal',
  allCaps=false,
  color='text-primary',
  fontcolor,
  backgroundColor = 'transparent'
}:Props) => {
  return (
    <span className={`label ${size} ${color}` }  style={{ color:fontcolor, backgroundColor:backgroundColor}}>
        {allCaps ? label.toUpperCase():label}
    </span>
  )
}

export {MyLabel}