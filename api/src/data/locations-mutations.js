export default `
  mutation {
    location1: CreateGroup(id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e", name: "Springfield Elementary School") {
      id
      name
    }
    location2: CreateGroup(id: "6a08af41-c35b-4dc0-adae-04b2cd89127f", name: "Springfield") {
      id
      name
    }
    location3: CreateGroup(id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd", name: "Department of Motor Vehicles") {
      id
      name
    }
    location4: CreateGroup(id: "b58fb940-64e3-4a65-bc2c-02383b1decd9", name: "First Church of Springfield") {
      id
      name
    }
    location5: CreateGroup(id: "f51ee3cc-2a8a-475c-a559-bd4377a0b0ab", name: "Springfield Retirement Castle") {
      id
      name
    }
    location6: CreateGroup(id: "96ce3ac6-8120-439d-9531-a857937410e9", name: "Springfield Nuclear Power Plant") {
      id
      name
    }
    location7: CreateGroup(id: "16db3703-e954-40c3-8800-9dba6bf8b351", name: "Kwik-E-Mart") {
      id
      name
    }
  }
`;
