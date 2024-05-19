import Button from "./Button.jsx";
import { useState, useEffect } from "react";
import "../Styles/Main.css";

const Main = () => {
  const [amountPerson, setamountPerson] = useState(0); //tip for person
  const [total, settotal] = useState(0); //cant for person
  const [tip, setTip] = useState(0); //tip
  const [bill, setBill] = useState(0); //bill
  const [cantPeaple, setCantPeaple] = useState(1); //cant peaple

  useEffect(() => {
    calc();
  }, [bill, tip, cantPeaple, total]);

  const calc = () => {
    let total = bill;
    let amount_Person = (total / cantPeaple).toFixed(2);
    let tips = ((tip * total).toFixed(2) / 100).toFixed(2);
    let totalWithTip = (parseFloat(amount_Person) + parseFloat(tips)).toFixed(
      2
    );
    tips = (tips / cantPeaple).toFixed(2);

    if (isNaN(totalWithTip)) {
      totalWithTip = 0;
    }
    if (isNaN(amount_Person)) {
      amount_Person = 0;
    }
    if (isNaN(amountPerson)) {
      setamountPerson(0);
    }
    if (isNaN(total)) {
      settotal(0);
    }

    settotal(tips);
    setamountPerson(totalWithTip);
  };

  const handleReset = () => {
    setBill(0);
    setCantPeaple(1);
  };

  //console.log({ bill: bill, cantPeaple: cantPeaple, tip });

  const handleChangeTip = (e) => {
    setBill(e.target.value);
  };
  const handleChangeNumPeaple = (e) => {
    setCantPeaple(e.target.value);
  };

  const handleCustom = (e) => {
    setTip(e.target.value);
  };

  return (
    <main className="main_container">
      <section className="confi_container">
        <div>
          <label for="Tip">Bill</label>
          <input
            id="Tip"
            type="number"
            className="input_Bill"
            placeholder="1"
            onChange={handleChangeTip}
            value={bill}
          />
        </div>
        <div>
          <label>Select Tip %</label>
        </div>

        <div className="buttons_container">
          <Button valor={5} setTip={setTip} custom={false} tip={tip} />
          <Button valor={10} setTip={setTip} custom={false} tip={tip} />
          <Button valor={15} setTip={setTip} custom={false} tip={tip} />
          <Button valor={25} setTip={setTip} custom={false} tip={tip} />
          <Button valor={50} setTip={setTip} custom={false} tip={tip} />
          <input
            type="number"
            id="custom"
            className="input_custom"
            placeholder="Custom"
            onChange={handleCustom}
            //value={tip}
          />
        </div>
        <div>
          <label for="NumPeaple">Tip of Peaple</label>
          <input
            type="number"
            id="NumPeaple"
            className="input_NumPeaple"
            placeholder="0"
            min={1}
            onChange={handleChangeNumPeaple}
            value={cantPeaple}
          />
        </div>
      </section>
      <section className="result_container">
        <div className="result_grid">
          <div>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="div_number">
            <h2>${total}</h2>
          </div>
          <div>
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="div_number">
            <h2>${amountPerson}</h2>
          </div>
        </div>
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </section>
    </main>
  );
};

export default Main;
