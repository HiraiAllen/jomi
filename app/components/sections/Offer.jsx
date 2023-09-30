//import Image from 'next/image';
import general from '@/app/general.module.css';
import Image from 'next/image';

export default function Offer(){
    return(
        <div id="offer" className={general.offer}>
            <h2 className={general.offerSubtitle}>¿CÓMO LO HACEMOS?</h2>
            <h2 className={general.offerTitle}>Nuestra oferta de valor</h2>

            <div className={general.offerImgResponsiveContainer}>
                <Image src="/assets/img/como-lo-hacemos-responsive.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.offerImgResponsive}/>
            </div>

            <div className={general.offerContainer}>
                <div className={general.offerBox} style={{borderBottom: `2px #F7A728 solid`}}>
                    <h2 className={general.offerBoxTitle}>Esquipo <br/> Multidisciplinar</h2>
                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                        <b>Expertos en tecnología, diseño, marketing y negocio,</b> que nos permite crear soluciones 
                        a otro nivel.
                    </p>
                </div>

                <div className={general.offerBox} style={{borderBottom: `2px #F7A728 solid`}}>
                    <h2 className={general.offerBoxTitle}>Diseño centrado <br/> en el cliente</h2>
                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                        Colaboración estrecha con nuestros clientes para <b>entender sus necesidades y ofrecer 
                        soluciones adaptadas a sus objetivos.</b>
                    </p>
                </div>

                <div className={general.offerBox}>
                    <h2 className={general.offerBoxTitle}>Enfoque <br/> Metodológico</h2>
                    <span className={general.offerSeparator}></span>
                    <p className={general.OfferBoxDescription}>
                        Utilizamos metodologías como <b>design thinking, agile, lean startup,</b> entre otras; 
                        que nos permite trabajar de manera eficiente y efectiva.
                    </p>
                </div>
            </div>
        </div>
    );
}