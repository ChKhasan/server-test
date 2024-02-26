let servers = [
  {
    id: 1,
    name: "Goodle",
    status: "working",
  },
  {
    id: 2,
    name: "Goodle2",
    status: "working",
  },
  {
    id: 3,
    name: "Goodle3",
    status: "working",
  },
  {
    id: 4,
    name: "Goodle4",
    status: "working",
  },
];
export const getAll = (req, res) => {
  res.status(200).json(servers);
};
export const create = (req, res) => {
  console.log(req.body);
  const newserver = {
    id: Date.now().toString(),
    ...req.body,
  };
  servers.push(newserver);
  res.status(201).json(newserver);
};
export const remove = (req, res) => {
  servers = servers.filter((elem) => elem.id != req.params.id);
  res.json({ message: "Server delete" });
};
