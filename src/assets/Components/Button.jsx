import "../Styles/Button.css";
const Button = ({ custom, valor, setTip, tip }) => {
  const handleButton = () => {
    setTip(valor);
  };
  return (
    <>
      <button
        onClick={handleButton}
        className={valor == tip ? "buttonSelect" : "noButtonSelect"}
      >
        {valor}%
      </button>
    </>
  );
};

export default Button;
