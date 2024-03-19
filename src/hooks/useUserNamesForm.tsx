import { useGame } from "./useGame";
import { useRef, FormEvent } from "react";

type UseUserNamesFormReturnType = {
  userXRef: React.RefObject<HTMLInputElement>;
  userORef: React.RefObject<HTMLInputElement>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const useUserNamesForm = (): UseUserNamesFormReturnType => {
  const { setUserNames } = useGame();

  const userXRef = useRef<HTMLInputElement>(null);
  const userORef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userX = userXRef.current?.value;
    const userO = userORef.current?.value;

    if (!userX || !userO) {
      alert("Please enter both user names");
      return;
    }

    setUserNames({ X: userX, O: userO });
  };

  return { userXRef, userORef, onSubmit };
};
