import React from "react";

interface Props {
  children: React.ReactNode;
  width: string;
}

export default function CarouselItem({ children, width }: Props) {
  return <div style={{ width }}>{children}</div>;
}
