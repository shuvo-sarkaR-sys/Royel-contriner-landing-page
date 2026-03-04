"use client";

export const OptionsSelectionSectionTitle: React.FC<
  React.PropsWithChildren<{}>
> = (props) => {
  return (
    <div className="text-muted-foreground box-decoration-clone bg-white">
      {props.children}
    </div>
  );
};
