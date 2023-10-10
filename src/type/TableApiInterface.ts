//api型定義
export interface TableApiInterface {
  fetchAll(): Promise<TableApiType[]>;
}

interface TableApiType {
  name: string;
  columns: [
    {
      name: string;
      type: string;
      options: string[] | null;
    }
  ];

  relations: [
    {
      from_col: string;
      to_col: string;
    }
  ];
}
