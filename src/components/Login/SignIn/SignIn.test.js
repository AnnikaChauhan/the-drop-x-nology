import React from "react";
import {render} from "@testing-library/react";
import { mount } from "enzyme";
import SignIn from "./SignIn";
import LargeButton from "../../Utility/Buttons/LargeButton";

describe("sign in with Google test", () => {
    let component;
    let testFunction;
    
    beforeEach(() => {
        testFunction = jest.fn();
        component = mount(<SignIn signIn={testFunction} />);
    });

    it("should run the signIn function when the button is clicked", () => {
        component.find(".buttonStyle").simulate("click");
        expect(testFunction).toHaveBeenCalledTimes(1);
    })
})
