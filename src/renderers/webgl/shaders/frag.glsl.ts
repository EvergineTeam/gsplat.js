/*
    from https://github.com/antimatter15/splat/blob/main/main.js
*/

export const frag = /* glsl */ `#version 300 es
precision highp float;

in vec4 vColor;
in vec2 vPosition;
in vec4 wPosition;

out vec4 fragColor;

void main () {
    /*if (wPosition.y > 0.0)
    {
        discard;        
    }*/

    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;
    fragColor = vec4(B * vColor.rgb, B);

    //fragColor = vec4(wPosition.xyz, 1.0);
}
`;
