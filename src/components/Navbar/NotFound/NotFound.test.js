import React from "react";
import NotFound from "./NotFound";

import { mount } from "enzyme";

describe("NotFound test", () => {
    let component;

    beforeEach(() => {
        component = mount(<NotFound />);
    });

    it("Should render a div containing an img", () => {
        expect(component.find("img").length).toEqual(1);
    });
});
