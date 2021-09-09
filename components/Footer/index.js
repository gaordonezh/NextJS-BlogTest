import styles from "./styles";
import Link from "next/link";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-prueba"></div>
        <div className="footer-top">
          <h4>QUEREMOS TRABAJAR CONTIGO</h4>
          <p>Comunicate con Nosotros</p>
          <Link href="/contact">
            <a>IR A CONTACTO</a>
          </Link>
        </div>
        <div className="footer__content">
          <div className="footer__content-left">
            <img
              src="http://localhost:3000/images/logo.png"
              alt="Logo Image"
              height="100px"
            />
            <div className="social">
              <Link href="https://www.facebook.com/netappperu/" target="_blank">
                <AiFillFacebook style={{ cursor: "pointer" }} />
              </Link>
              <Link href="mailto:902034246">
                <MdEmail style={{ cursor: "pointer" }} />
              </Link>
              <AiFillPhone style={{ cursor: "pointer" }} />
            </div>
            <div></div>
          </div>
          <div className="footer__content-right">
            <h3>Yuri Montenegro</h3>
            <p>Contadores y Auditores SAC</p>
          </div>
        </div>
        <div className="copyright">
          &copy; TODOS LOS DERECHOS RESERVADOS
          <br />
          <Link href="https://www.netappperu.com/">
            <a>NETAPP PERÚ</a>
          </Link>
        </div>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
}
