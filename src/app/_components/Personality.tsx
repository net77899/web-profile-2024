import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Protagonist (ENFJ)</p>
        <p className="pb-2">
        strive to have a positive impact on other people and the world around them.</p>
        <div className="flex gap-1">
          <Badge>Extraverted</Badge>
          <Badge>Intuitive</Badge>
          <Badge>Feeling</Badge>
          <Badge>Judging</Badge>
          <Badge>Turbulent</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
