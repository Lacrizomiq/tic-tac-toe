import { useUserNamesForm } from "../hooks/useUserNamesForm";

export const UserNameForm = () => {
  const { userXRef, userORef, onSubmit } = useUserNamesForm();

  return (
    <form onSubmit={onSubmit} className="vertical-stack">
      <h3>Put players usernames</h3>
      <label htmlFor="user1">User X</label>
      <input id="user1" ref={userXRef} required minLength={2} />
      <label htmlFor="user2">User O</label>
      <input id="user2" ref={userORef} required minLength={2} />
      <button type="submit">Submit</button>
    </form>
  );
};
