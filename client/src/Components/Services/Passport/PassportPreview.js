import React from "react";
import style from "./index.module.scss";
import { getDate, toUpperCase } from "../../../Utils/customFuntions";
export const PassportPreview = ({ passportData }) => {
  console.log("Passport data", passportData);
  if (!passportData) return;
  const {
    lastName,
    firstName,
    birthday,
    city,
    address,
    createdAt,
    idnp,
    expiredAt,
    series,
    nationality,
  } = passportData;
  return (
    <div className={style.container}>
      <div className={style.label}>
        REPUBLICA MOLDOVA - REPUBLIC OF MOLDOVA - REPUBLIQUE DE MOLDOVA
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={style.labelSmall}>PASAPORT</span>
          <span className={style.labelSmall}>PASSPORT</span>
          <span className={style.labelSmall}>PASSEPORT</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.labelSmall}>Codul Tarii/Country Code</div>
          <div style={{ textAlign: "center" }} className={style.textContent}>
            MDA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <diV>
            <div className={style.labelSmall}>
              Nr.pasaportului/Passport No./Passeport No
            </div>
            <div style={{ textAlign: "center" }} className={style.textContent}>
              {toUpperCase(idnp)}
            </div>
          </diV>
          <div style={{ marginTop: "10px" }}>
            <div className={style.labelSmall}>Seria/Series/Serie</div>
            <div style={{ textAlign: "center" }} className={style.textContent}>
              {toUpperCase(series)}
            </div>
          </div>
        </div>
      </div>
      <div className={style.passportContainer}>
        <div>
          <img
            className={style.icon}
            alt={"img"}
            src={
              "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            }
          />
        </div>
        <div className={style.infoContent}>
          <div className={style.separator}>
            <div className={style.labelSmall}>Numele/Surname/Nom</div>
            <div className={style.textContent}>{toUpperCase(lastName)}</div>
          </div>

          <div className={style.separator}>
            <div className={style.labelSmall}>Prenumele/Given name/Prenom</div>
            <div className={style.textContent}>{toUpperCase(firstName)}</div>
          </div>

          <div className={style.separator}>
            <div className={style.labelSmall}>
              Cetatenia/Nationality/Nationalite
            </div>
            <div className={style.textContent}>{toUpperCase(nationality)}</div>
          </div>

          <div className={style.separator}>
            <div className={style.labelSmall}>
              Data nasterii/Date of birth/Date de naissance
            </div>
            <div className={style.textContent}>{getDate(birthday)}</div>
          </div>

          <div className={style.separator}>
            <div className={style.labelSmall}>
              Locul nasterii/Place of birth/Lieu de naissance
            </div>
            <div className={style.textContent}>
              {toUpperCase(`${city},${address}`)}
            </div>
          </div>

          <div className={style.separator}>
            <div className={style.labelSmall}>
              Data emiterii/Date of issue/Date de delivrance
            </div>
            <div className={style.textContent}>{getDate(createdAt)}</div>
          </div>
          <div className={style.separator}>
            <div className={style.labelSmall}>
              Data expirarii/Date of expiry/Date d'expiration
            </div>
            <div className={style.textContent}>{getDate(expiredAt)}</div>
          </div>
        </div>
      </div>

      <div className={style.textContent}>
        <div className={style.footer}>
          {toUpperCase(lastName)} &lt; &lt;{toUpperCase(firstName)} &lt; &lt;
          &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt;
          {toUpperCase(`${series}`)} &lt; &lt;{idnp}
        </div>
      </div>
    </div>
  );
};
