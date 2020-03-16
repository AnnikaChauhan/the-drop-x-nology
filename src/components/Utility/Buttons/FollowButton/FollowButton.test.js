import React from "react";
import FollowButton from "./FollowButton";

import { mount } from "enzyme";

describe("FollowButton test", () => {
    let component;

    beforeEach(() => {
        component = mount(<FollowButton />);
    });

    it("Should render a button containing an svg", () => {
        expect(component.find("svg").length).toEqual(1);
    });
});
