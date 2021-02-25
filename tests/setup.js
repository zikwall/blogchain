import "@testing-library/jest-dom/extend-expect";

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        development_host: 'whatever-you-want-here',
        production_host: 'whatever-you-want-here'
    }
}))