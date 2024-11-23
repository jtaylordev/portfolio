import styles from './styles.module.css';
import { pageRoutes } from '../../utils/page_routes.ts';
import MainHeader from '../../components/header/mainHeader.tsx';
import MainFooter from '../../components/footer/mainFooter.tsx';


function HomePage(){
    return (
        <div className={styles.home}>
            <MainHeader />
            <main>
                <h1>Home Page</h1>
                <p>Welcome to the Home Page</p>
            </main>
            <MainFooter />
        </div>
    )
}

export default HomePage;

