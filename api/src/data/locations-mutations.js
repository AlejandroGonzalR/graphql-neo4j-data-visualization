export default `
  mutation {
    location1: CreateLocation(id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e", name: "Springfield Elementary School") {
      id
      name
    }
    location2: CreateLocation(id: "6a08af41-c35b-4dc0-adae-04b2cd89127f", name: "Springfield") {
      id
      name
    }
    location3: CreateLocation(id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd", name: "Department of Motor Vehicles") {
      id
      name
    }
    location4: CreateLocation(id: "b58fb940-64e3-4a65-bc2c-02383b1decd9", name: "First Church of Springfield") {
      id
      name
    }
    location5: CreateLocation(id: "f51ee3cc-2a8a-475c-a559-bd4377a0b0ab", name: "Springfield Retirement Castle") {
      id
      name
    }
    location6: CreateLocation(id: "96ce3ac6-8120-439d-9531-a857937410e9", name: "Springfield Nuclear Power Plant") {
      id
      name
    }
    location7: CreateLocation(id: "16db3703-e954-40c3-8800-9dba6bf8b351", name: "Kwik-E-Mart") {
      id
      name
    }
  }
`;
