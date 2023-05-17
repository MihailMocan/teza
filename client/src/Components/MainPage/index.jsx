import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import {
  faBalanceScale,
  faBriefcase,
  faDiamond,
  faDiamondTurnRight,
  faEarthAmerica,
  faFileText,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const MainPage = () => {
  const username = "Mocan Mihail";
  return (
    <div className={style.container}>
      <div className={style.navbarWrapper}>
        <div className={style.navbar}>
          <div>
            <a href={"#"} className={style.item_link}>
              Despre Noi
            </a>
          </div>
          <div>
            <a href={"#"} className={style.item_link}>
              Depunere Cerere
            </a>
          </div>
          <div>
            <a href={"#"} className={style.item_link}>
              Cererile Mele
            </a>{" "}
          </div>
          <div>
            <a href={"#"} className={style.item_link}>
              Contacte
            </a>
          </div>
        </div>
        <div className={style.userInfo}>
          <span>Bine ati venit,</span>
          <a href={"#"} className={style.userName}>
            {username}
          </a>
        </div>
        <div className={style.socialPage}>
          <a href={"#"}>
            <i className={style.socialBtn}> </i>
          </a>
        </div>
      </div>
      <div>
        <img
          src={
            "https://www.econsulat.ro/Content/new-ui/dist/assets/images/home-bg.jpg"
          }
        />
      </div>
      <div className={style.serviceContainer}>
        <div className={style.searchService}>
          <h2>Servicii consulare</h2>
          <div className={style.searchBox}>
            <FontAwesomeIcon className={style.searchIcon} icon={faSearch} />
            <span>
              <input type={"text"} placeholder={"Cautati serviciul dorit"} />
            </span>
          </div>
        </div>
        <div className={style.services}>
          <div className={style.servicesItem}>
            <a>
              <h3>
                <FontAwesomeIcon
                  className={style.serviceIcon}
                  icon={faEarthAmerica}
                />
                <span className={style.servicesLabel}>Cetatenie</span>
              </h3>
              <p className={style.servicesContent}>
                dobândirea, redobândirea, renunţarea la cetăţenia română,
                clarificarea statutului juridic
              </p>
            </a>
          </div>
          <div className={style.servicesItem}>
            <a>
              <h3>
                <FontAwesomeIcon
                  className={style.serviceIcon}
                  icon={faBriefcase}
                />
                <span className={style.servicesLabel}>
                  Documente de calatorie
                </span>
              </h3>
              <p className={style.servicesContent}>
                titlu de călătorie, paşaport simplu electronic, paşaport simplu
                temporar, prima carte de identitate
              </p>
            </a>
          </div>
          <div className={style.servicesItem}>
            <a>
              <h3>
                <FontAwesomeIcon
                  className={style.serviceIcon}
                  icon={faFileText}
                />
                <span className={style.servicesLabel}>
                  Acte de stare civila
                </span>
              </h3>
              <p className={style.servicesContent}>
                transcriere, înregistrare certificat de naştere, deces,
                căsătorie
              </p>
            </a>
          </div>

          <div className={style.servicesItem}>
            <a>
              <h3>
                <FontAwesomeIcon
                  className={style.serviceIcon}
                  icon={faBalanceScale}
                />
                <span className={style.servicesLabel}>Acte notariale</span>
              </h3>
              <p className={style.servicesContent}>
                procuri, declaraţii, efectuarea şi legalizarea de traduceri,
                certificări
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
