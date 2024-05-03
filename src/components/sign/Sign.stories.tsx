import type { Meta } from "@storybook/react";

import { useSign } from "@/hooks/useSign";
import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import CP from "..";
import Component from "./Sign";

const meta: Meta<typeof Component> = {
  title: "Sign",
  component: Component,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;
// type Story = StoryObj<typeof Component>;

export const Sign = () => {
  const [files, setFiles] = useState<string[]>([]);
  //: Story
  const { signRef, clear, getFile, isSigned, setIsSigned } = useSign();

  return (
    <CP.Styled.Div style={{ width: "100%", height: "100%", padding: 20 }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "700px",
          height: "500px"
        }}
      >
        <Component
          width="700"
          height="500"
          placeholder="서명"
          signRef={signRef}
          isSigned={isSigned}
          setIsSigned={setIsSigned}
        ></Component>
      </div>
      <Button onClick={clear}>clear</Button>
      <Button
        onClick={() => {
          const file = getFile();
          if (file) setFiles(files.concat([file]).reverse());
          clear();
        }}
      >
        get
      </Button>
      <Button onClick={() => setFiles([])}>clear All</Button>
      <div style={{ display: "flex", gap: 5, width: "100%", overflow: "auto" }}>
        {files?.map((item) => {
          return <CustomImg src={item} />;
        })}
      </div>
    </CP.Styled.Div>
  );
};

const CustomImg = styled.img`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  height: 100px;
`;
