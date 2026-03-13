/**
 * Ryan Realty — GA4 Event Helpers
 * Import and call these from any client component.
 *
 * Usage:
 *   import { trackFormSubmit, trackPhoneClick } from "@/lib/analytics";
 *   trackFormSubmit("listing_inquiry", "crosswater-123");
 */

type GtagFn = (command: string, action: string, params?: Record<string, unknown>) => void;

function gtag(...args: Parameters<GtagFn>) {
  if (typeof window !== "undefined" && typeof (window as { gtag?: GtagFn }).gtag === "function") {
    (window as { gtag: GtagFn }).gtag(...args);
  }
}

// Form lifecycle
export function trackFormView(formName: string, context?: string) {
  gtag("event", "form_view", { form_name: formName, context });
}

export function trackFormStart(formName: string, context?: string) {
  gtag("event", "form_start", { form_name: formName, context });
}

export function trackFormAbandon(formName: string, lastField?: string) {
  gtag("event", "form_abandon", { form_name: formName, last_field: lastField });
}

export function trackFormSubmit(formName: string, context?: string) {
  gtag("event", "form_submit", { form_name: formName, context });
}

// Lead actions
export function trackPhoneClick(source?: string) {
  gtag("event", "phone_click", { source });
}

export function trackHomeValuationStart(community?: string) {
  gtag("event", "home_valuation_start", { community });
}

export function trackScheduleShowing(listingId?: string, community?: string) {
  gtag("event", "schedule_showing_click", { listing_id: listingId, community });
}

export function trackCommunityGuideDownload(community: string) {
  gtag("event", "community_guide_download", { community });
}

export function trackMarketReportSignup() {
  gtag("event", "market_report_signup");
}

// Property engagement
export function trackVirtualTourLaunch(listingId: string) {
  gtag("event", "virtual_tour_launch", { listing_id: listingId });
}

export function trackGalleryOpen(listingId: string) {
  gtag("event", "gallery_open", { listing_id: listingId });
}

export function trackCommunityNav(community: string) {
  gtag("event", "community_nav", { community });
}

// Engaged visitor (60s+) — call this from a useEffect with a 60s timer
export function trackEngagedVisitor(pagePath: string) {
  gtag("event", "engaged_visitor", { page_path: pagePath });
}
