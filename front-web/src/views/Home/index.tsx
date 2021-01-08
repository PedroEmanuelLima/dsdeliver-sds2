import './styles.css';
import Footer from '../../Componets/footer';

import { ReactComponent as MainImage } from './main.svg';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br />
                            que entregamos <br />
                            para você!!!
                        </h1>

                        <h3 className="home-subtitle">
                            Escolha seu pedido e em poucos minutos <br />
                            levaremos na sua porta
                        </h3>

                        <Link to="/orders" className="home-btn-order">
                            FAZER PEDIDO
                        </Link>
                    </div>

                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}