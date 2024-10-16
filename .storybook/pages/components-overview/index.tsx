import React, { useEffect, useState } from "react";
import { Gap } from "../../components/Gap";
import { Card } from "./components/card";
import { CONFIG } from "./config";
import styles from "./index.module.css";

const EMPTY_GROUP = "EMPTY";

export const ComponentsOverview = () => {
  const [mode, setMode] = useState<string>("light");
  const [query, setQuery] = useState("");

  const data = query
    ? Object.keys(CONFIG).reduce(
        (res, groupName) => {
          const group = CONFIG[groupName].filter((componentName) =>
            componentName.toLowerCase().includes(query.toLowerCase())
          );

          if (group.length > 0) {
            if (!res[EMPTY_GROUP]) {
              res[EMPTY_GROUP] = [];
            }

            res[EMPTY_GROUP].push(...group);
          }

          return res;
        },
        {} as typeof CONFIG
      )
    : CONFIG;

  const groups = Object.keys(data);
  const hasData = groups.length > 0;

  return (
    <div
      id="components-overview"
      className="sb-unstyled"
      style={{ : 30 }}
    >
      <h2>Components overview</h2>

      <Gap size={16} />

      {hasData ? (
        groups.map((groupTitle) => {
          const componentsList = data[groupTitle];

          return (
            <div key={groupTitle} className={styles.group}>
              {groupTitle !== EMPTY_GROUP && (
                <h3 className={styles.groupTitle}>{groupTitle}</h3>
              )}

              <div className={styles.cardContainer}>
                {componentsList.map((componentName) => (
                  <Card
                    componentName={componentName}
                    key={componentName}
                    mode={mode}
                  />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <h3 className={styles.emptySearchResult}>데이터가 없습니다.</h3>
      )}
    </div>
  );
};
