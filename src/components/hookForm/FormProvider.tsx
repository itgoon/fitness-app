import React, { KeyboardEventHandler } from 'react';
import { UseFormReturn, FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLFormElement> | undefined;
  onKeyUp?: KeyboardEventHandler<HTMLFormElement> | undefined;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  ...props
}: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...props} style={{ width: '100%' }}>
        {children}
      </form>
    </Form>
  );
}
