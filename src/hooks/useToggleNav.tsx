import { useState } from "react";

const useToggleNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleToggle };
};

export default useToggleNav;
