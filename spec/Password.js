describe(("verify password to meet requirements"), () => {

  it("should not be null", () => {
    let result = () => password_is_valid("");
    expect(result).toThrow(new Error ("Password should not be empty"));
  });
  it("should be larger than 8 characters", () => {
    let result = () =>  password_is_valid("hfiD8");
    expect(result).toThrow(new Error ("Password should be longer than 8 characters"));
  });
  it("should have at least one uppercase letter", () => {
    let result = () => password_is_valid("hfiaffsdsg675878");
    expect(result).toThrow(new Error ("Password should have at least one uppercase letter"));
  });
  it("should have at least one lowercase letter", () => {
    let result = () => password_is_valid("SFUDSFDBFD265");
    expect(result).toThrow(new Error ("Password should have at least one lowercase letter"));
  });
  it("should have at least one number", () => {
    let result = () => password_is_valid("hfisfdFaDDdf");
    expect(result).toThrow(new Error ("Password should have at least one number"));
  });
  it("should meet all requirements", () => {
    let result = password_is_valid("HEL8fdsd0GfF");
    expect(result).toBe("HEL8fdsd0GfF")
  })  
});


describe("should meet at least 3 conditions to be valid", () => {
  it("should stop when password is larger than 8 characters and null", () => {
    let result = password_is_ok("");
    expect(result).toBeFalsy();
  });
  it("should stop if it doesnt meet a minimum of 3 conditions", () => {
    let result = password_is_ok("%%%%%%%%%%");
    expect(result).toBeFalsy();
  })
  
  it("should meet 3 requirements and pass the test", () => {
    let result = password_is_ok("FDFNOSDNFGDSG");
    expect(result).toBeTruthy();
  })
})