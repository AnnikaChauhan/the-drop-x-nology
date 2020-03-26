import React from "react";
import NavItem from "./NavItem";

import { mount } from "enzyme";

const mockData = {
    name: "Home",
    path: "/home",
    index: 0
};

describe("NavItem test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <NavItem
                name={mockData.name}
                path={mockData.path}
                key={mockData.index}
            />
        );
    });

    it("Should render a link containing a p", () => {
        expect(component.find("p").length).toEqual(1);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().name).toEqual(mockData.name);
    });

    it("Should render data passed in as props", () => {
        expect(component.text()).toContain(mockData.name);
    });
});
