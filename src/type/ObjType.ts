//apiから受け取ったものを変形して格納
interface ObjInterface {
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
}
interface ObjRelationInterface {
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
}
