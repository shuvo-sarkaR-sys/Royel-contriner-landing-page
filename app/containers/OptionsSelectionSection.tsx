"use client";

export const OptionsSelectionSection: React.FC<React.PropsWithChildren<{}>> = (
  props
) => {
  return (
    <div className="flex flex-col items-start gap-3">{props.children}</div>
  );
};
