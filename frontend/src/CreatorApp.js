import React, { useEffect, useRef, useState } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

export default function CreatorApp() {
  const creatorRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const creator = new SurveyCreator({
      showLogicTab: true,
      isAutoSave: false
    });

    const saved = localStorage.getItem("survey-design");
    if (saved) {
      creator.JSON = JSON.parse(saved);
    }

    creator.saveSurveyFunc = (saveNo, callback) => {
      localStorage.setItem("survey-design", JSON.stringify(creator.JSON));
      callback(saveNo, true);
    };

    creatorRef.current = creator;
    setReady(true);
  }, []);

  if (!ready) return <div>Loading builder...</div>;

  return (
    <div className="App">
      <h2>Survey Builder</h2>
      <SurveyCreatorComponent creator={creatorRef.current} />
    </div>
  );
}
