import style from "./index.module.scss";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Services } from "./Services";
import { CheckPassport } from "../Services/Passport/CheckPassport";
import { Modal } from "./Modal";
import { PassportPreview } from "../Services/Passport/PassportPreview";
import { ServiceAPIInstance } from "../../Axios/service";
import { logout } from "../../Redux/Reducers/authReducer";

export const MainPage = ({ name = "nicolai", isAuth = true, logout }) => {
  const [changeContent, setContent] = useState(false);
  const [checkPassport, setCheckPassport] = useState(false);
  const [createPassport, setCreatePassport] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passportData, setData] = useState(null);
  const navigate = useNavigate();
  const returnToHome = () => {
    setContent(false);
  };

  const [children, setChildren] = useState(null);
  const createPassportData = useCallback(async () => {
    try {
      const data = await ServiceAPIInstance.createPassport();
      if (data.statusCode === 200) {
        setData(data.data);
        setChildren(
          <div>
            Pasaportul dumneavoastra a fost generat cu IDNP -ul :
            {data.data.idnp}
          </div>
        );
      } else {
        const idnp = data.idnp;
        setChildren(
          <div>
            Eroare , Dumneavoatra deja aveti un pasaport cu IDNP -ul : {idnp} !
          </div>
        );
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }, []);
  const handleClose = () => {
    setCheckPassport(false);
    setCreatePassport(false);
    setShowModal(false);
    setData(null);
  };
  const handleClickCheckPassport = () => {
    setCheckPassport(true);
    setShowModal(true);
  };
  const handleClickCreatePassport = () => {
    setCreatePassport(true);
    setShowModal(true);
  };

  const headerContent = checkPassport
    ? "Verificare pasaport"
    : createPassport
    ? "Pasaportul generat "
    : "";

  useEffect(() => {
    if (checkPassport) {
      const tempValue = passportData ? (
        <PassportPreview passportData={passportData} />
      ) : (
        <CheckPassport onChange={setData} />
      );
      setChildren(tempValue);
    }
  }, [checkPassport, passportData]);
  useEffect(() => {
    if (createPassport) {
      createPassportData();
    }
  }, [createPassport]);

  return isAuth ? (
    <div className={style.container}>
      <div className={style.navbarWrapper}>
        <div className={style.navbar}>
          <div>
            <a
              href={"https://chisinau.mae.ro/node/148"}
              className={style.item_link}
            >
              Despre Noi
            </a>
          </div>
          <div>
            <a href={"#"} onClick={returnToHome} className={style.item_link}>
              Depunere Cerere
            </a>
          </div>
          <div>
            <a
              href={"https://chisinau.mae.ro/node/270"}
              className={style.item_link}
            >
              Acte necesre
            </a>{" "}
          </div>
          <div>
            <a
              href={"https://asp.gov.md/ro/contacte"}
              className={style.item_link}
            >
              Contacte
            </a>
          </div>
        </div>
        <div className={style.userInfo}>
          <span>Bine ati venit,</span>
          <span className={style.userName}>{name}</span>
        </div>
        <div className={style.socialPage}>
          <a
            href={
              "https://www.facebook.com/ambasada.romaniei.in.republica.moldova?sk=timeline"
            }
          >
            <i className={style.socialBtn}> </i>
          </a>
          <button onClick={logout} className={style.delogareButton}>
            Delogare
          </button>
        </div>
      </div>
      <div>
        <img
          src={
            "https://www.econsulat.ro/Content/new-ui/dist/assets/images/home-bg.jpg"
          }
        />
      </div>

      <Modal
        showModal={showModal}
        children={children}
        handleClose={handleClose}
        headingContent={headerContent}
      />

      {changeContent ? (
        <div className={style.decisionContainer}>
          <div className={style.buttonContainer}>
            <button
              onClick={() => handleClickCheckPassport()}
              className={style.passportButton}
            >
              Verifica pasaportul
            </button>
            <div className={style.condition}>Sau</div>
            <button
              onClick={() => handleClickCreatePassport()}
              className={style.passportButton}
            >
              Creaza unul nou
            </button>
          </div>
        </div>
      ) : (
        <Services onClick={setContent} />
      )}
    </div>
  ) : (
    navigate("/login")
  );
};
const mapStateToProps = (state) => ({
  name: state.auth.name,
  isAuth: state.auth.name,
});
export default connect(mapStateToProps, { logout })(MainPage);
