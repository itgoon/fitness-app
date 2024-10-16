import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useRouter } from "src/routes/hooks";

import { useTranslate } from "src/locales";

import { User } from "src/types/user";

// ----------------------------------------------------------------------

type Props = {
  user: User;
};

export default function UserToolbar({ user }: Props) {
  const router = useRouter();

  const { t } = useTranslate();

  return (
    <>
      <Stack sx={{ mb: { xs: 3 }, mt: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="flex-end"
          spacing={1}
          sx={{ width: 1 }}
        >
          <Button variant="contained" color="success">
            {t("목록")}
          </Button>
          <Button variant="contained" color="info">
            {t("수정")}
          </Button>
          <Button variant="contained" color="error">
            {t("탈퇴")}
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
