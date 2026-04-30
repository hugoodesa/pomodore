import type React from "react";
import { PomodoreApp } from "../../components/Pomodore";

type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return <PomodoreApp>{children}</PomodoreApp>;
};
