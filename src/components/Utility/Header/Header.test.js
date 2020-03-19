import React from "react";
import Header from "./Header";

import { mount } from "enzyme";

const mockData = {
    title: ["Dashboard"],
    subtitle: ["Fan"]
};

describe("Header Test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <Header title={mockData.title} subtitle={mockData.subtitle}/>
        );
    });
    it("Should render a title containing a subtitle", () => {
        expect(component.find("div").length).toEqual(1);
    });

    it("Should receive title data passed as props from parent", () => {
        expect(component.props().title).toEqual(mockData.title);
    });

    it("Should receive subtitle data passed as props from parent", () => {
        expect(component.props().subtitle).toEqual(mockData.subtitle);
    });
});
