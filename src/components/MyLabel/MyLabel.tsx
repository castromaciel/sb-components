import './mylabel.css';

export interface MyLabelProps {
  /**
   * Is this Capitalized?
   */
  allCaps?: boolean;
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Custom background color
   */
  backgroundColor?: string;
  /**
   * Custom color
   */
  fontColor?: string;
  /**
   * MyLabel contents
   */
  label: string;
  /**
   * This is the defualt size
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
}

const MyLabel = ({
  allCaps = false,
  backgroundColor = 'transparent',
  color = 'primary',
  fontColor,
  label = 'No label', 
  size = 'normal' 
}: MyLabelProps) => {
  return (
    <span 
      className={` label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor}}
    >
      { allCaps? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel