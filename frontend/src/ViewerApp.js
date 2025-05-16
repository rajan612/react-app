import React, { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

export default function ViewerApp() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("survey-design");
    if (saved) {
      setModel(new Model(JSON.parse(saved)));
    }
  }, []);

  if (!model) return <div>No survey found. Please create one in /creator</div>;

  return (
    <div className="App">
      <h2>Survey Viewer</h2>
      <Survey model={model} />
    </div>
  );
}
