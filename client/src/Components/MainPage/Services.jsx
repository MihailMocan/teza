import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import {
  faBalanceScale,
  faBriefcase,
  faEarthAmerica,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";

export const Services = ({ onClick }) => {
  return (
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
              <span className={style.servicesLabel}>Acte de stare civila</span>
            </h3>
            <p className={style.servicesContent}>
              transcriere, înregistrare certificat de naştere, deces, căsătorie
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
      <div className={style.buttonContainer}>
        <button onClick={onClick} className={style.applyButton}>
          Verifica Acte
        </button>
      </div>
    </div>
  );
};
