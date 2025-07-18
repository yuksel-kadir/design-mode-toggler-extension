// A function to update the extension's icon, badge, and title based on the state.
function updateAction(tabId, state) {
  const iconPath = state === 'on' ? 'images/icon-on-128.png' : 'images/icon-off-128.png';
  const title = state === 'on' ? 'Click to Turn Off Design Mode' : 'Click to Turn On Design Mode';
  const badgeText = state === 'on' ? 'ON' : 'OFF';

  // Set the icon
  chrome.action.setIcon({ path: iconPath, tabId: tabId });

  // Set the title
  chrome.action.setTitle({ title: title, tabId: tabId });

  // Set the badge
  chrome.action.setBadgeText({ text: badgeText, tabId: tabId });
  if (state === 'on') {
    chrome.action.setBadgeBackgroundColor({ color: '#28a745', tabId: tabId }); // A nice green color
  } else if (state === 'off'){
    chrome.action.setBadgeBackgroundColor({ color: '#C70039', tabId: tabId }); // A nice red color
  }
}

// A function to check the current designMode of a tab and update the action state.
async function checkAndUpdate(tabId) {
  try {
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => document.designMode,
    });
    updateAction(tabId, result.result);
  } catch (e) {
    // This can happen on special pages like chrome:// URLs where content scripts are forbidden.
    // We'll just reset to a default "off" state for the icon.
    console.log(`Can't access script on this tab: ${tabId}. Error: ${e}`);
    updateAction(tabId, 'off');
  }
}

// Listener for when the user clicks the extension button.
chrome.action.onClicked.addListener(async (tab) => {
  const [result] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const newState = document.designMode === 'on' ? 'off' : 'on';
      document.designMode = newState;
      return newState; // Return the new state
    },
  });

  // Update the icon based on the returned state from the script.
  updateAction(tab.id, result.result);
});

// Listener for when the active tab changes.
chrome.tabs.onActivated.addListener((activeInfo) => {
  // This ensures the icon is correct when you switch to a tab
  // that might already have designMode enabled.
  checkAndUpdate(activeInfo.tabId);
});

// Listener for when a tab is updated (e.g., reloaded or navigates to a new page).
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // If the tab is fully loaded, check its state.
  if (changeInfo.status === 'complete' && tab.active) {
    checkAndUpdate(tabId);
  }
});