import { useContext } from "react";
import { Context } from "../../../context/Context";

import useClickOutside from "../../../utils/useClickOutside";

const ModalContainer = ({ children, nullValue }) => {

  const { modalToggle } = useContext(Context);

  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  
  return (
    <div className="tokyo_tm_modalbox opened">
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a
            href="#"
            onClick={() => {
              modalToggle(false);
              nullValue(null);
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default ModalContainer;
