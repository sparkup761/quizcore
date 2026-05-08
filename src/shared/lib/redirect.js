const REDIRECT_BASE =
  'https://dgtlmr.trk2afse.com/sl?id=69ef5ed7c2374206f1bde1de&pid=158&sub1=%7Byourclickid%7D&sub2=%7Bwebid%7D'

function getFromSearch(searchParams, ...keys) {
  for (const k of keys) {
    const v = searchParams.get(k) ?? searchParams.get(k.toLowerCase()) ?? searchParams.get(k.toUpperCase())
    if (v != null && v !== '') return v
  }
  return null
}

function mergeQueryParamsFromHash(params, hash) {
  // supports urls like https://site/#/?sub1=...&sub2=...
  if (!hash) return
  const idx = hash.indexOf('?')
  if (idx === -1) return
  const hashQuery = hash.slice(idx + 1)
  const hashParams = new URLSearchParams(hashQuery)
  for (const [k, v] of hashParams.entries()) params.append(k, v)
}

function getAllCurrentParams(currentUrl) {
  const params = new URLSearchParams(currentUrl.search)
  mergeQueryParamsFromHash(params, currentUrl.hash)
  return params
}

/**
 * Builds redirect URL:
 * - copies ALL query params from current URL
 * - overrides sub1/sub2 in target using current URL values (if present)
 * - also supports common aliases: clickid->sub1, webid->sub2
 */
export function buildRedirectUrl(currentLocation = window.location) {
  const current = new URL(currentLocation.href)
  const currentParams = getAllCurrentParams(current)

  const target = new URL(REDIRECT_BASE)

  const sub1 = getFromSearch(
    currentParams,
    'sub1',
    'clickid',
    'click_id',
    'yourclickid',
    'cid',
    'subid',
  )
  const sub2 = getFromSearch(currentParams, 'sub2', 'webid', 'wid')

  if (sub1) target.searchParams.set('sub1', sub1)
  if (sub2) target.searchParams.set('sub2', sub2)

  // copy everything else (including sub1/sub2 if they exist) into target
  for (const [k, v] of currentParams.entries()) {
    // keep sub1/sub2 already overridden above
    if (k === 'sub1' && sub1) continue
    if (k === 'sub2' && sub2) continue
    // don't allow overriding base tracking parameters from the offer URL
    if (k === 'id' || k === 'pid') continue
    // keep duplicates (utm_*, etc.)
    target.searchParams.append(k, v)
  }

  return target.toString()
}

export function redirectToOffer(currentLocation = window.location) {
  window.location.href = buildRedirectUrl(currentLocation)
}

