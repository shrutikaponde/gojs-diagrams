const model = {
    nodeDataArray: [
      { key: "Alpha", color: "lightblue" },
      { key: "Beta", color: "orange" },
      { key: "Gamma", color: "lightgreen" },
      { key: "Delta", color: "pink" },
      { key: "Omega", color: "grey" }
    ],
    linkDataArray: [
      { from: "Alpha", to: "Beta" },
      { from: "Alpha", to: "Gamma" },
      { from: "Beta", to: "Delta" },
      { from: "Gamma", to: "Omega" }
    ]
  };

export default model ;