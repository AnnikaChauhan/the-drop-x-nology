import React from "react";
import LoadingAnimation from "./LoadingAnimation";

import { mount } from "enzyme";

describe("LoadingAnimation test", () => {
    let component;

    beforeEach(() => {
        component = mount(<LoadingAnimation />);
    });

    it("Should render a div containing spans", () => {
        expect(component.find("span").length).toEqual(3);
    });
});
