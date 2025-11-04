import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  await page.getByRole('button', { name: 'Add New Doctor' }).click();
  await page.getByRole('textbox', { name: 'Doctor Name' }).click();
  await page.getByRole('textbox', { name: 'Doctor Name' }).fill('John Doe');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ejemplo@gmail.com');
  await page.getByRole('textbox', { name: 'Education' }).click();
  await page.getByRole('textbox', { name: 'Education' }).fill('medico');
  await page.getByRole('button', { name: 'Save' }).click();
});