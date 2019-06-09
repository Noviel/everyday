interface Model {
  id: number;
  data: string;
}

export const createModel = (id): Model => {
  return {
    id,
    data: "ok"
  };
};
