import { bouncy } from "ldrs";

const LoadBtn = ({
  speed,
  color,
  size,
}: {
  speed: string;
  color: string;
  size: string;
}) => {
  bouncy.register();

  // Default values shown
  return (
    <>
      <div>
        <l-bouncy size={size} speed={speed} color={color}></l-bouncy>
      </div>
    </>
  );
};

export default LoadBtn;
