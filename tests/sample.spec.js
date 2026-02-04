const {test,expect} = require ("@playwright/test")

test ("my first test", async function({page}){
    expect(10).toBe(10);
})

test ("my second test", async function({page}){
    expect(10).toBe(101);
})

test("my third test", async function({page}){
    expect("Megha Kulkarni").toContain("Megha")
})

test("my fourth test", async function({page}){
    expect("Megha Kulkarni".includes("Megha")).toBeTruthy()
})
