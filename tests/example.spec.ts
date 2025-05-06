import { expect, test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test("has title", async ({ page }) => {
  await page.goto("/");
  await argosScreenshot(page, "loading");
  await expect(
    page.getByRole("heading", { name: "Hello world" })
  ).toBeVisible();
  await argosScreenshot(page, "loaded page");
});
