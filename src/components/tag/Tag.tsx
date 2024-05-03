import * as Styled from "../styled";
import Typography from "../typography";
import { TypoVariantType } from "../typography/Typography";

export const StateTag = {
  isWorkEnd: { label: "퇴근", color: "--danger-color" },
  isLeaveEarly: { label: "조퇴", color: "--success-color" },
  isLate: { label: "지각", color: "--menu-employee-color " },
  isAbsence: { label: "결근", color: "--dark-color" },
  work: { label: "근무중", color: "--primary-color" },
  goToWork: { label: "출근 예정", color: "--dark-color" },
  isOffDuty: { label: "휴무", color: "--safety-color" },

  signed: { label: "서명완료", color: "--light-color" },
  toBeSign: { label: "서명대기", color: "--dark-color" },
  expire: { label: "만료", color: "--dark-color" },
  resign: { label: "퇴사자", color: "--resign-color" }
};

export interface TagProps {
  state:
    | "isWorkEnd"
    | "isLeaveEarly"
    | "isLate"
    | "isAbsence"
    | "work"
    | "goToWork"
    | "isOffDuty"
    | "signed"
    | "toBeSign"
    | "expire"
    | "resign";
}

const Tag = ({ state }: TagProps) => {
  const content = StateTag[state];

  if (!content) return;

  return (
    <Styled.Tag
      color={content.color}
      style={{ opacity: state === "signed" ? "0.4" : "1" }}
    >
      <Typography color="--white-color"> {content.label}</Typography>
    </Styled.Tag>
  );
};

export default Tag;
