//apiから受け取ったものを変形して格納
export type ObjInterface = {
  id: string; //table name
  position: {
    x: number;
    y: number;
  };
  label: [
    {
      name: string;
      type: string;
      options: string[] | null;
    }
  ];
};
export type ObjRelationInterface = {
  id: string;
  source: string;
  target: string;
  markerEnd: {
    type: string;
  };
  markerStart: {
    type: string;
    orient: string;
  };
};

export type ObjPositionType = {
  id: string;
  position: {
    x: number;
    y: number;
  };
};

export type ObjLabelType = {
  name: string;
  type: string;
  columns: { name: string; options: string[] };
};
