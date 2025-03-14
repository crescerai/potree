import * as THREE from "../../libs/three.js/build/three.module.js";

export const ClassificationScheme = {
    DEFAULT: {
        0: {
            visible: true,
            name: "never classified",
            color: [0.5, 0.5, 0.5, 1.0],
        },
        1: {
            visible: true,
            name: "unclassified",
            color: [0.827, 0.827, 0.827, 1.0],
        },
        2: {
            visible: true,
            name: "ground",
            color: [0.63, 0.32, 0.18, 1.0],
        },
        3: {
            visible: true,
            name: "low vegetation",
            color: [0.0, 1.0, 0.0, 1.0],
        },
        4: {
            visible: true,
            name: "medium vegetation",
            color: [0.0, 0.8, 0.0, 1.0],
        },
        5: {
            visible: true,
            name: "high vegetation",
            color: [0.0, 0.6, 0.0, 1.0],
        },
        6: {
            visible: true,
            name: "building",
            color: [1.0, 0.66, 0.0, 1.0],
        },
        7: {
            visible: true,
            name: "low point(noise)",
            color: [1.0, 0.0, 1.0, 1.0],
        },
        9: { visible: true, name: "water", color: [0.0, 0.0, 1.0, 1.0] },
        13: { visible: true, name: "Wire", color: [1.0, 0.0, 0.0, 1.0] },
        15: { visible: true, name: "Tower", color: [1.0, 1.0, 0.0, 1.0] },
        17: {
            visible: true,
            name: "Bridge",
            color: [0.95, 0.85, 0.2, 1.0],
        },
        18: {
            visible: true,
            name: "High Point Noise",
            color: [0.95, 0.1, 0.1, 1.0],
        },
        22: { visible: true, name: "SeaBed", color: [0.35, 0.24, 0.15, 1.0] },
        29: {
            visible: true,
            name: "Water Surface",
            color: [0.0, 0.3, 0.8, 1.0],
        },
        30: {
            visible: true,
            name: "Derived Water Surface",
            color: [0.4, 0.6, 1.0, 1.0],
        },
        47: {
            visible: true,
            name: "Bathy Noise",
            color: [1.0, 0.0, 0.0, 1.0],
        },
        DEFAULT: {
            visible: true,
            name: "default",
            color: [0.3, 0.6, 0.6, 0.5],
        },
    },
};

Object.defineProperty(ClassificationScheme, "RANDOM", {
    get: function () {
        let scheme = {};

        for (let i = 0; i <= 255; i++) {
            scheme[i] = new THREE.Vector4(
                Math.random(),
                Math.random(),
                Math.random()
            );
        }

        scheme["DEFAULT"] = new THREE.Vector4(
            Math.random(),
            Math.random(),
            Math.random()
        );

        return scheme;
    },
});
