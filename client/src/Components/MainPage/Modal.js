import style from "./index.module.scss";
import { Modal as ReactModal } from "react-overlays";
export const Modal = ({ handleClose, headingContent, children, showModal }) => {
  return (
    <ReactModal className={style.modal} show={showModal} onHide={handleClose}>
      <div>
        <div className={style.modalHeader}>
          <div className={style.modalHeader}>{headingContent}</div>
          <div>
            <span className={style.closeButton} onClick={handleClose}>
              x
            </span>
          </div>
        </div>
        <div className={style.modalDesc}>{children}</div>
        <div className={style.modalFooter}>
          <button className={style.secondaryButton} onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
