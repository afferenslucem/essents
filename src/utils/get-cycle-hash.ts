const depth = 256;
const mod = 20999999;

export function getCycleHash(text: string | number): number {
    text = text.toString();

    let result = 0;

    for (let i = 0; i < text.length; i++) {
        result *= depth;
        result += text.charCodeAt(i);
        result %= mod;
    }

    return result;
}
