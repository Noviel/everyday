interface Model {
  id: number;
  data: string;
}

export const createModel = (id: number): Model => {
  return {
    id,
    data: "ok"
  };
};
