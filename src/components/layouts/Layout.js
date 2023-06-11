import Styles from './Layout.module.css';
import MainMenu from './MainMenu';

function Layout(props) {
    return <div className={Styles.main}>
        <main><MainMenu /></main>
        {props.children}
    </div>
}

export default Layout;