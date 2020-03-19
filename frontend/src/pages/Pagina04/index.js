import React from "react";
import SelectMonth from "../../components/SelectMonth";
import TotalTransaction from "../../components/TotalTransaction";
import Graph01 from "../../components/Graph01";
import AccountDetails from "../../components/AccountDetails";

function Pagina04() {
  return (
    <div>
      <AccountDetails />
      <SelectMonth />
      <TotalTransaction tipo="ENTRADAS" total="5" valor="785,00" />
      <TotalTransaction tipo="SAÍDAS" total="12" valor="785,00" />
      <Graph01 />
    </div>
  );
}

export default Pagina04;
