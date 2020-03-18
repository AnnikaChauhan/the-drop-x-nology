import React from "react";
import LandingPage from "./LandingPage";

import { mount } from "enzyme";

const mockData = {
    user: {
        uid: "awefQDF23123afdfawefa",
        displayName: "Bob Chin",
        photoURL: "noway.jpg"
    },
    additionalUserInfo: {
        isNewUser: true
    }
};

describe("Landing page test", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <LandingPage user={mockData.user} additionalUserInfo={mockData.additionalUserInfo} />
        );
    });

    it("Should render both sides of the page", () => {
        expect(component.find("section").length).toEqual(1);
        expect(component.find("h2").length).toEqual(2);
    });

    it("Should receive data passed as props from parent", () => {
        expect(component.props().user).toEqual(mockData.user);
        expect(component.props().additionalUserInfo).toEqual(mockData.additionalUserInfo);
    });
});