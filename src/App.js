import React from 'react';
import Diagram from "./containers/DiagramContainer";
import createDiagram from "./helper/createDiagram";
import createGrpDiagram from "./helper/createGrpDiagram";
import { grp } from "./constants";

import './App.css';

function App() {
  return (
    <table width="100%">
      <tr width="100%">
        <td width="50%">
          <Diagram
            id={'ERD123'}
            createDiagram={createDiagram}
            model={null} />
        </td>
        <td width="50%">
          <Diagram
            id={'GRP123'}
            createDiagram={createGrpDiagram}
            model={grp} />
        </td>
      </tr>
    </table>
  )
}

export default App;
