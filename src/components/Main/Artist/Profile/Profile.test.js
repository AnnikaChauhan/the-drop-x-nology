import React from "react";
import Profile from "./Profile";
import { mount } from "enzyme";

const mockData = [
    {
        ReleaseName: "Seven Dials",
        Status: "Draft",
        ReleaseType: "Single"
    }
];

describe("Profile test", () => {
    let component;
    beforeEach(() => {
        component = mount(<Profile />);
        component.setState({ Releases: mockData });
    });

    it("Should render a section when it receives data", () => {
        expect(component.find("section").length).toEqual(1);
    });

    it("Should render data passed in from database", () => {
        expect(component.text()).toContain(mockData[0].ReleaseType);
    });
});