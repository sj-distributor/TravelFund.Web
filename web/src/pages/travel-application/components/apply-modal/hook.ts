import { useState } from "react";

const useAction = () => {
  const [customPrice, setCustomPrice] = useState<number>(0);

  const [isGroup, setIsGroup] = useState<boolean>(true);

  const [travelDate, setTravelDate] = useState<string>("");

  const [returnDate, setReturnDate] = useState<string>("");

  return {
    customPrice,
    setCustomPrice,
    isGroup,
    setIsGroup,
    travelDate,
    setTravelDate,
    returnDate,
    setReturnDate,
  };
};
export default useAction;
