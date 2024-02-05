import avatar from "../img/avatar.jpg";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <img className="round-image" src={avatar} alt="avatar" />
    </button>
  );
}
