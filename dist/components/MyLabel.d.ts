/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * tamaño de label
     */
    label?: string;
    /**
     * tamaño
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    fontcolor?: string;
    backgroundColor?: string;
}
declare const MyLabel: ({ label, size, allCaps, color, fontcolor, backgroundColor }: Props) => JSX.Element;
export { MyLabel };
