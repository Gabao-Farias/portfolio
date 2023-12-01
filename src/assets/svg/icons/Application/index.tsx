import { FC } from "react";
import { Path } from "./styles";

const Application: FC<SVGIconProps> = ({ size = 24, color }) => (
  <svg width={size} height={size} viewBox="0 0 83 83" fill="none">
    <Path
      d="M72.6252 6.91675H10.3752C6.571 6.91675 3.4585 10.0292 3.4585 13.8334V69.1667C3.4585 72.9709 6.571 76.0834 10.3752 76.0834H72.6252C76.4293 76.0834 79.5418 72.9709 79.5418 69.1667V13.8334C79.5418 10.0292 76.4293 6.91675 72.6252 6.91675ZM72.6252 69.1667H10.3752V20.7501H72.6252V69.1667Z"
      fillColor={color}
    />
  </svg>
);

export default Application;
