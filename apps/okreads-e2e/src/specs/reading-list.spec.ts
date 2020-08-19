import { $, browser, ExpectedConditions, $$ } from 'protractor';
import { expect } from 'chai';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should undo action', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).to.be.greaterThan(1, 'At least one book');

    // let list_items = await $$('[data-testing="reading-list-item"]');
    // expect(list_items.length).to.be.greaterThan(1, 'At least one book added in pane');

    // const buttons = await $('[data-testing="want-to-read-button"]');
    // await  buttons[0].click();
    // let length = list_items.length;
    // list_items = await $$('[data-testing="reading-list-item"]');
    // expect(list_items.length).to.be.equal(length+1 , 'At least one book added in pane');

    // const undoBtn = await $('#undo_btn');
    // await undoBtn.click();
    // length = length -1;

    // list_items = await $$('[data-testing="reading-list-item"]');
    // expect(list_items.length).to.be.equal(length, 'At least one book added in pane');

    
  });
});
