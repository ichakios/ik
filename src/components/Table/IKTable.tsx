import React from "react";

export interface IKTableProps {
  label: string;
}

const IKTable = (props: IKTableProps) => {
  return <button>{props.label}</button>;
};

export default IKTable;