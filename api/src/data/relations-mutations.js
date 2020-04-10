export default `
  mutation {
  
    ### ADD RELATIONSHIP -> CHARACTER TO LOCATION
  
    rg1: AddCharacterLocations(from: { id: "615bd07f-81e5-4601-85e0-905898e22760" }, to: { id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e" }) {
      from {
        id
      }
    }
    rg2: AddCharacterLocations(from: { id: "ef578fc7-f2da-4956-89a6-f9ec2fe84adb" }, to: { id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e" }) {
      from {
        id
      }
    }
    rg3: AddCharacterLocations(from: { id: "7a66b32a-3e1c-4cdb-b7f5-76dee328cc0d" }, to: { id: "6a08af41-c35b-4dc0-adae-04b2cd89127f" }) {
      from {
        id
      }
    }
    rg4: AddCharacterLocations(from: { id: "74be060f-118b-4f58-8e88-71d1227a106b" }, to: { id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd" }) {
      from {
        id
      }
    }
    rg5: AddCharacterLocations(from: { id: "8566b5d8-24a5-4592-b115-e36a443cc732" }, to: { id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd" }) {
      from {
        id
      }
    }
    rg6: AddCharacterLocations(from: { id: "49f756d3-85ac-4fd9-88bc-79182f1612e3" }, to: { id: "b58fb940-64e3-4a65-bc2c-02383b1decd9" }) {
      from {
        id
      }
    }
    rg7: AddCharacterLocations(from: { id: "8f5f139b-c8e7-47f4-bf98-2801da00f809" }, to: { id: "b58fb940-64e3-4a65-bc2c-02383b1decd9" }) {
      from {
        id
      }
    }
    rg8: AddCharacterLocations(from: { id: "06b204b6-912c-45fa-a40d-eb2b79490db9" }, to: { id: "b58fb940-64e3-4a65-bc2c-02383b1decd9" }) {
      from {
        id
      }
    }
    rg9: AddCharacterLocations(from: { id: "5be94ba0-71a6-43bb-b7f8-e32e554d72a4" }, to: { id: "f51ee3cc-2a8a-475c-a559-bd4377a0b0ab" }) {
      from {
        id
      }
    }
    rg10: AddCharacterLocations(from: { id: "a1cb9f1b-f2bd-4f9a-8087-53f3b692dd4c" }, to: { id: "f51ee3cc-2a8a-475c-a559-bd4377a0b0ab" }) {
      from {
        id
      }
    }
    rg11: AddCharacterLocations(from: { id: "245e222c-2604-40f2-bcca-57ac7a35c982" }, to: { id: "96ce3ac6-8120-439d-9531-a857937410e9" }) {
      from {
        id
      }
    }
    rg12: AddCharacterLocations(from: { id: "4f067097-8af9-4607-82c7-94540391f492" }, to: { id: "6a08af41-c35b-4dc0-adae-04b2cd89127f" }) {
      from {
        id
      }
    }
    rg13: AddCharacterLocations(from: { id: "06e4005b-d989-49eb-8d97-c419243ed986" }, to: { id: "16db3703-e954-40c3-8800-9dba6bf8b351" }) {
      from {
        id
      }
    }
    rg14: AddCharacterLocations(from: { id: "8475b5e5-9a55-47b2-9681-02e92f32ddae" }, to: { id: "16db3703-e954-40c3-8800-9dba6bf8b351" }) {
      from {
        id
      }
    }
    
    ### ADD RELATIONSHIP -> CHARACTER TO NATION
    
    rn1: AddCharacterNation(from: { id: "615bd07f-81e5-4601-85e0-905898e22760" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn2: AddCharacterNation(from: { id: "ef578fc7-f2da-4956-89a6-f9ec2fe84adb" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn3: AddCharacterNation(from: { id: "7a66b32a-3e1c-4cdb-b7f5-76dee328cc0d" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn4: AddCharacterNation(from: { id: "74be060f-118b-4f58-8e88-71d1227a106b" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn5: AddCharacterNation(from: { id: "8566b5d8-24a5-4592-b115-e36a443cc732" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn6: AddCharacterNation(from: { id: "49f756d3-85ac-4fd9-88bc-79182f1612e3" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn7: AddCharacterNation(from: { id: "8f5f139b-c8e7-47f4-bf98-2801da00f809" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn8: AddCharacterNation(from: { id: "06b204b6-912c-45fa-a40d-eb2b79490db9" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn9: AddCharacterNation(from: { id: "5be94ba0-71a6-43bb-b7f8-e32e554d72a4" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn10: AddCharacterNation(from: { id: "a1cb9f1b-f2bd-4f9a-8087-53f3b692dd4c" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn11: AddCharacterNation(from: { id: "245e222c-2604-40f2-bcca-57ac7a35c982" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn12: AddCharacterNation(from: { id: "4f067097-8af9-4607-82c7-94540391f492" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    rn13: AddCharacterNation(from: { id: "06e4005b-d989-49eb-8d97-c419243ed986" }, to: { id: "2fe30382-6dbd-4c3a-a650-22a732eb6574" }) {
      from {
        id
      }
    }
    rn14: AddCharacterNation(from: { id: "8475b5e5-9a55-47b2-9681-02e92f32ddae" }, to: { id: "2fe30382-6dbd-4c3a-a650-22a732eb6574" }) {
      from {
        id
      }
    }
    
    ### ADD RELATIONSHIP -> LOCATION TO NATION
    
    gp1: AddLocationNation(from: { id: "a9a125e0-909d-4674-88c6-4fb74ff0ca6e" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    gp2: AddLocationNation(from: { id: "6a08af41-c35b-4dc0-adae-04b2cd89127f" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    gp3: AddLocationNation(from: { id: "1c448f24-2bbf-47a7-8fdd-91f76ed0dabd" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    gp4: AddLocationNation(from: { id: "b58fb940-64e3-4a65-bc2c-02383b1decd9" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    gp5: AddLocationNation(from: { id: "f51ee3cc-2a8a-475c-a559-bd4377a0b0ab" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }
    gp6: AddLocationCharacters(from: { id: "96ce3ac6-8120-439d-9531-a857937410e9" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }  
    gp7: AddLocationCharacters(from: { id: "16db3703-e954-40c3-8800-9dba6bf8b351" }, to: { id: "28a194a9-90e3-40bf-a928-3f06d5362469" }) {
      from {
        id
      }
    }  
  }
`;
