import { render, screen } from '@testing-library/react';
import { UIArticle } from "@blogchain/components";
import { ThemeContext } from "@blogchain/components/ui/theme/context";

describe("Article", () => {
    it("renders without crashing", () => {
        render(
            <ThemeContext.Provider value={[{ isDark: false}, () => jest.fn()]}>
                <UIArticle
                    id={10}
                    title={"Test article title"}
                    text={"Test article text"}
                    image={"image"}
                    tags={[
                        { label: "test1", name: "Test 1" },
                        { label: "test2", name: "Test 2" }
                    ]}
                    labels={[]}
                    publisher={{
                        author: "Test Author",
                        avatar: "avatar here",
                        time: 1610014043,
                    }}
                />
            </ThemeContext.Provider>
        );

        expect(
            screen.getByRole("heading", { name: "Test article title" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Test 1" })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("link", { name: "Test 2" })
        ).toBeInTheDocument();
    });
});