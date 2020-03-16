import React from "react";
import Tabs from "./Tabs";

import { mount } from "enzyme";

const mockData = {
    tabs: ["Tab 1", "Tab 2"],
    content: [<p>Hello</p>, <p>Hi</p>]
};

describe("Tabs test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <Tabs tabs={mockData.tabs} content={mockData.content} />
        );
    });

    it("Should render a tab containing an article", () => {
        expect(component.find("article").length).toEqual(1);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().tabs).toEqual(mockData.tabs);
    });

    it("Should render data passed in as props", () => {
        expect(component.find("p").length).toEqual(2);
    });
});
