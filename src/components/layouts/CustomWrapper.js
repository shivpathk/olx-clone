import Styles from './CustomWrapper.module.css';

function CustomWrapper(props){
    return <div className={Styles.customWrapper}>
      {props.children}
    </div>
}

export default CustomWrapper;