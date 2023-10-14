export const demodata = {
  tables: [
    {
      name: "users",
      columns: [
        {
          name: "id",
          type: "int",
          options: ["PK"],
        },
        {
          name: "name",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "email",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "password",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "created_at",
          type: "timestamptz",
          options: null,
        },
      ],
    },
    {
      name: "posts",
      columns: [
        {
          name: "id",
          type: "int",
          options: ["PK"],
        },
        {
          name: "title",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "content",
          type: "varchar",
          options: ["NN"],
        },
        {
          name: "user_id",
          type: "int",
          options: ["NN"],
        },
        {
          name: "created_at",
          type: "timestamptz",
          options: ["NN"],
        },
      ],
    },
    {
      name: "likes",
      columns: [
        {
          name: "id",
          type: "int",
          options: ["PK"],
        },
        {
          name: "to_user_id",
          type: "int",
          options: ["NN"],
        },
        {
          name: "from_user_id",
          type: "int",
          options: ["NN"],
        },
      ],
    },
  ],
  relations: [
    {
      from_col: "users.id",
      to_col: "posts.user_id",
    },
    {
      from_col: "users.id",
      to_col: "likes.to_user_id",
    },
    {
      from_col: "users.id",
      to_col: "likes.from_user_id",
    },
  ],
  enums: [
    {
      name: "hoge",
      fields: ["fuga", "foo", "bar"],
    },
  ],
};
