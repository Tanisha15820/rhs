export const NEWSLETTER_SUBS_KEY = "rhs_newsletter_subscriptions_v1";
export const NEWSLETTER_SAVED_EDITIONS_KEY = "rhs_newsletter_saved_v1";

export const getSavedSubscriptions = () => {
  try {
    const raw = localStorage.getItem(NEWSLETTER_SUBS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Error reading newsletter subscriptions:", err);
    return [];
  }
};

export const saveSubscription = (subscriptionData) => {
  try {
    const existing = getSavedSubscriptions();
    const newEntry = {
      ...subscriptionData,
      id: `sub-${Date.now()}`,
      subscribedAt: new Date().toISOString(),
    };
    const updated = [newEntry, ...existing];
    localStorage.setItem(NEWSLETTER_SUBS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("rhs_newsletter_subscribed", { detail: newEntry }));
    return { success: true, entry: newEntry };
  } catch (err) {
    console.error("Error saving subscription:", err);
    return { success: false, error: err };
  }
};

export const getBookmarkedEditions = () => {
  try {
    const raw = localStorage.getItem(NEWSLETTER_SAVED_EDITIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Error reading saved editions:", err);
    return [];
  }
};

export const toggleBookmarkEdition = (editionId) => {
  try {
    const current = getBookmarkedEditions();
    let updated;
    if (current.includes(editionId)) {
      updated = current.filter((id) => id !== editionId);
    } else {
      updated = [...current, editionId];
    }
    localStorage.setItem(NEWSLETTER_SAVED_EDITIONS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("rhs_newsletter_bookmarks_updated", { detail: updated }));
    return updated;
  } catch (err) {
    console.warn("Error toggling bookmark:", err);
    return [];
  }
};
