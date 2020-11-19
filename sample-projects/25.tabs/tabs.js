// select the tabs and tabPanel and tabButtons
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

// callback
function handleTabClick(event) {
  // console.log(event)
  // hide all the tabsPanels
  tabPanels.forEach(function(panel) {
    panel.hidden = true;
  });
  // mark all the tabs as unSelected
  tabButtons.forEach(button => {
    button.setAttribute('aria-selected', false);
  });
  // mark the selected tab as selected
  const { id } = event.currentTarget;
  // Example 1
  // event.currentTarget.setAttribute('aria-selected', true);
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);

  // Example 2
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  // console.log(tabPanel)

  // find its associated tab panel and un hide it.
  tabPanel.hidden = false;
}

// eventListener
tabButtons.forEach(function(tabButton) {
  tabButton.addEventListener('click', handleTabClick);
});
