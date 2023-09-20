import Image from 'next/image';
import general from '@/app/general.module.css';

export default function AboutUs(){
    return(
        <div id="about" className={general.about}>
            <Image src="/assets/img/sobre nosotros.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.aboutImg}/>
        </div>
    );
}