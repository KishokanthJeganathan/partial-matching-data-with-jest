describe("testing for object and array data", () => {
  it("testing identical objects with toEqual", () => {
    const object = {
      name: "James",
      age: 28,
    };

    expect(object).toEqual({ name: "James", age: 28 });
  });

  it("partial matching with an object", () => {
    const object = {
      name: "James",
      age: 28,
    };

    expect(object).toEqual(
      expect.objectContaining({
        name: "James",
      })
    );
  });

  it("partial matching to a nested object", () => {
    const object = {
      name: "James",
      age: 28,
      locationData: {
        country: "Poland",
      },
    };

    expect(object).toEqual(
      expect.objectContaining({
        locationData: expect.objectContaining({
          country: "Poland",
        }),
      })
    );
  });

  it("testing identical arrays with toEqual ", () => {
    const array = ["Sam"];

    expect(array).toEqual(["Sam"]);
  });

  it("partial matching propeties in an array ", () => {
    const array = ["Sam", "James"];

    expect(array).toEqual(expect.arrayContaining(["James"]));
  });

  it("partial matching propeties of an object in an array ", () => {
    const array = ["Sam", "James", { name: "Misia" }];

    expect(array).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Misia",
        }),
      ])
    );
  });
});
