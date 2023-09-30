import Image from 'next/image';
import general from '@/app/general.module.css';

export default function Contact(){
    return(
        <div id="contact" className={general.contact}>
            <h2 className={general.servicesSubtitle}>JOMI</h2>
            <h2 className={general.servicesTitle}>Contactanos</h2>

            <div className={general.contactContent}>
                <div className={general.contactDescription}>
                    <h2 className={general.contactDescriptionTitle}>Trabajemos <br/>
                    <span style={{color: `#336DAA`}}>JUNTOS</span></h2>

                    <p className={general.contactDescriptionText}>
                        Si estás aquí, es hora de <b>emprender un emocionante viaje juntos.</b>
                    </p>
                    <br/>
                    <p className={general.contactDescriptionText}>
                        Transformaremos tus ideas en realiades digitales sorprendentes <b>¡Esperamos con entusiasmo
                        comenzar esta aventura contigo!</b>
                    </p>
                </div>

                <div className={general.contactForm}>
                    <div class={general.inputContainer}>
                        <input type="text" id="nombre" placeholder="Nombre"/>

                        <Image src="/assets/img/nombre.png" 
                        alt="Descripción de la imagen" 
                        width={4} 
                        height={3}
                        layout="responsive"
                        className={general.iconContact}/>
                    </div>

                    <div class={general.inputContainer}>
                        <input type="text" id="email" placeholder="Email"/>

                        <Image src="/assets/img/email.png" 
                        alt="Descripción de la imagen" 
                        width={4} 
                        height={3}
                        layout="responsive"
                        className={general.iconContact}/>
                    </div>

                    <div className={general.inputPhoneContainer}>
                        <div className={general.inputCodeContainer}>
                            <input type="text" id="code" placeholder="+"/>
                        </div>

                        <div className={general.inputNumberContainer}>
                            <input type="text" id="number" placeholder="Numero de teléfono"/>

                            <Image src="/assets/img/celular.png" 
                            alt="Descripción de la imagen" 
                            width={4} 
                            height={3}
                            layout="responsive"
                            className={general.iconContact}/>
                        </div>
                    </div>

                    <textarea name="mensaje" id="mensahe" cols="30" rows="10" 
                    className={general.messageBox} placeholder="Mensaje"></textarea>

                    <button className={general.contactBtn}>Enviar</button>
                </div>
            </div>
        </div>
    );
}