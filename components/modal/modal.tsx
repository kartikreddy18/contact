import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { close } from "@/slice/model";
import { ReactElement } from "react";

interface Props {
  title: string;
  body: ReactElement;
  footer?: ReactElement;
  action: () => void;
  actionLabel: string;
}

function Model({ title, body, footer, action, actionLabel }: Props) {
  const dispatch = useDispatch();
  return (
    <div
      className="
    fixed
    bg-gray-900/70
    inset-0
    overflow-x-hidden
    overflow-y-auto
    grid place-items-center
    z-50
  "
    >
      <div
        className="
      bg-white
      rounded-lg
      w-full
      h-full
      p-5
      sm:h-auto
      sm:w-4/5
      md:w-3/4
      lg:w-2/3
      xl:w-3/5
      2xl:w-1/2
      border border-black
    "
      >
        {/* header */}
        <div
          className="
            flex items-center justify-center
            w-full relative border-b border-b-gray-200 pb-3
          "
        >
          <button onClick={() => dispatch(close())} className="absolute left-0">
            <XMarkIcon className="w-5 h-5" />
          </button>
          <h1 className="font-semibold">{title}</h1>
        </div>
        {/* body */}
        <div className="p-5">{body}</div>
        <button
          onClick={action}
          className="border border-black rounded p-3 font-medium"
        >
          {actionLabel}
        </button>
        {/* footer */}
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}

export default Model;
