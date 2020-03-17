import React from "react";
import Navbar from "./Navbar";

import { mount } from "enzyme";

describe("Navbar test", () => {
    let component;

    beforeEach(() => {
        component = mount(<Navbar />);
    });

    it("Should render a sidebar containing a nav", () => {
        expect(component.find("nav").length).toEqual(1);
    });
});
