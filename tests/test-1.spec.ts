import { test, expect } from '@playwright/test';


test('Cert_Link_Coverage', async ({ page }) => {
  await page.goto('https://victor-a-medina.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#sidebar div').filter({ hasText: 'Certifications' }).getByRole('link').click();
  const page1 = await page1Promise;
  await page1.waitForLoadState();
  await expect(page1).toHaveTitle(/AWS Certified Solutions Architect – Associate - Credly/);
});

test('Gitlab_Link_Coverage', async ({ page }) => {
  await page.goto('https://victor-a-medina.com/');
  await page.locator('div').filter({ hasText: /^Contact me$/ }).getByRole('link').nth(2).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.waitForLoadState();
  await expect(page1).toHaveTitle(/vmedina1014 (Victor A Medina)*/);
});

test('LinkedIn_Link_Coverage', async ({ page }) => {
  await page.goto('https://victor-a-medina.com/');
  await page.locator('div').filter({ hasText: /^Contact me$/ }).getByRole('link').nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.waitForLoadState();
  await expect(page1).toHaveTitle(/ *LinkedIn*/);
});

test('Visitor_Count_Coverage', async ({ page }) => {
  await page.goto('https://victor-a-medina.com/');
  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time)
    });
  }
  await delay(1000);
  const visitor_count_1 = await page.locator("#visitor_count").textContent();
  await page.reload();
  await delay(1000);
  const visitor_count_2 = await page.locator("#visitor_count").textContent();
  console.log(visitor_count_2)
  expect(Number(visitor_count_2)).toBeGreaterThan(Number(visitor_count_1));

});

test("GV", async ({  request }) => {
  const _response = await request.get(`https://xyo1s5kh09.execute-api.us-east-1.amazonaws.com`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  const resp =await _response.json()
  const visitor_count_from_db = resp["visitor_count"];
  console.log(visitor_count_from_db);
});




test('has title', async ({ page }) => {
  await page.goto('https://victor-a-medina.com');
  await expect(page).toHaveTitle(/Victor Medina's Resume/);
});
