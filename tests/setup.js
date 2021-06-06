import "@testing-library/jest-dom/extend-expect";

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        development_host: 'whatever-you-want-here',
        production_host: 'whatever-you-want-here',
        production_cdn_host: "http://localhost:1337",
        development_cdn_host: "http://localhost:1337",
    }
}))