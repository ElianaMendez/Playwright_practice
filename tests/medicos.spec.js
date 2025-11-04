import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    await page.getByRole('button', { name: 'Add New Doctor' }).click();
    await page.getByRole('textbox', { name: 'Doctor Name' }).fill('eli');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('eli@gmail.com');
    await page.getByRole('textbox', { name: 'Education' }).click();
    await page.getByRole('textbox', { name: 'Education' }).fill('medico');
    await page.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
});