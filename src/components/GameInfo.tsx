type NonNullableUserNames = {
  X: string;
  O: string;
};

type GameInfoProps = {
  status: string;
  userNames: NonNullableUserNames;
};

export const GameInfo = ({ status, userNames }: GameInfoProps) => {
  return (
    <div className="game-info">
      <div className="flex gap-3 center">
        <span>
          <b>X</b>:{userNames.X}
        </span>
        <span>
          <b>O</b>:{userNames.O}
        </span>
      </div>
      <div>{status}</div>
    </div>
  );
};
