import {Button} from "antd";
import {MouseEventHandler, ReactNode} from "react";
import classNames from "classnames";

interface ISubmitBuyBtn {
  onClick?: MouseEventHandler;
  right?: ReactNode;
  body?: ReactNode;
  left?: ReactNode;
  type?: "supermarket" | "restaurant";
}

function SubmitBuyBtn(props: ISubmitBuyBtn) {
  const {onClick, right, left, body, type = "restaurant"} = props;
  const btnClassName = classNames({
    "flex w-full items-center rounded-[5px]": true,
    "submit-btn": type === "restaurant",
    "submit-btn-supermarket": type === "supermarket",
  });
  return (
    <div className="fixed z-10 bottom-0 right-0 left-0">
      <div className="pb-[29px] px-[27px] max-width-screen">
        <Button type="primary" className={btnClassName} onClick={onClick}>
          {right}
          <div className="flex flex-1 justify-center">{body}</div>
          <div className="text-[13px] font-normal">{left}</div>
        </Button>
      </div>
    </div>
  );
}

export default SubmitBuyBtn;
