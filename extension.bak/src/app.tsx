import { ReactElement, useEffect } from "react";
import "./app.css";
import { findDiscountField, generateId } from "./util";

export default function App(): ReactElement {
  useEffect(() => {
    findDiscountField().map((el: Element) => console.log(el.textContent));
  }, []);

  useEffect(() => {
    chrome.runtime.sendMessage(console.log("working"));
  }, []);

  return (
    <div className="App-header">
      <header>Id: { generateId() }</header>
      <header>Quepon, a coupon managament app</header>
      <p>discount</p>
      <div>
        <header>Coupon areas: {findDiscountField().length}</header>
      </div>
    </div>
  );
}
