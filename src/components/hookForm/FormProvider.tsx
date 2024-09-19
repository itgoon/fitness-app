import { CSSProperties, KeyboardEventHandler, ReactNode } from "react";
import { UseFormReturn, FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLFormElement> | undefined;
  onKeyUp?: KeyboardEventHandler<HTMLFormElement> | undefined;
  sx?: CSSProperties;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  sx,
  ...props
}: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={sx} {...props}>
        {children}
      </form>
    </Form>
  );
}
