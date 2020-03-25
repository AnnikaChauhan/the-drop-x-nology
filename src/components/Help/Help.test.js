import React from "react";
import Help from "./Help";

import { mount } from "enzyme";

describe("Help Test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <Help />
        );
    });

    it("Should render a page containing 3 <p>", () => {
        expect(component.find("p").length).toEqual(4);
    });

});
