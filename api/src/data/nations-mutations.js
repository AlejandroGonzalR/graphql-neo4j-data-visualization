export default `
  mutation {
    nation1: CreateNation(id: "28a194a9-90e3-40bf-a928-3f06d5362469", name: "United States") {
      id
      name
    }
    nation2: CreateNation(id: "2fe30382-6dbd-4c3a-a650-22a732eb6574", name: "India") {
      id
      name
    }
  }
`;
