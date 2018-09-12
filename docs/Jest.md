# JEST

Jest Checking ReferenceErrors need to wrapped into an Executing function
    expect(() => {doWorkWithLet(false)}).toThrowError(ReferenceError);