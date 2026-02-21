const loginTestData =  [

    {
        testName: "Valid Login",
        email: "Kane@gmail.com",
        password: "Kane@1213",
        expectedResult: "success"
    },

    {
        testName: "Invalid Password",
        email: "validuser@gmail.com",
        password: "wrongpassword",
        expectedResult: "error",
        errorMessage: "Incorrect email or password."
    },

    {
        testName: "Invalid Email",
        email: "wrong@gmail.com",
        password: "ValidPassword123",
        expectedResult: "error",
        errorMessage: "Incorrect email or password."
    },

    {
        testName: "Both Invalid",
        email: "wrong@gmail.com",
        password: "wrongpassword",
        expectedResult: "error",
        errorMessage: "Incorrect email or password."
    }

];
export default loginTestData;