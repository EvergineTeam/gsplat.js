/*
    from https://github.com/antimatter15/splat/blob/main/main.js
*/

export const frag = /* glsl */ `#version 300 es
precision highp float;

in vec4 vColor;
in vec2 vPosition;
in float cutoff;

out vec4 fragColor;

void main () {
    if (cutoff) discard;        

    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;
    fragColor = vec4(B * vColor.rgb, B);
}
`;
