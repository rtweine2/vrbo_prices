module.exports = {
  HIGHEST_PRICES: 3,
  DEFAULT_RADIUS: 25,
  MAX_LISTINGS: 50,
  ONE_YEAR_DAYS: 365,
  EARTH_RADIUS_MI: 3959,
  LISTINGS_ENDPOINT: "https://www.vrbo.com/serp/g",
  ROOT_VRBO_URL: "https://www.vrbo.com",
  LISTINGS_QUERY:
    'query SearchRequestQuery($request: SearchResultRequest!, $gtsQuery: Boolean!, $isBot: Boolean!) {\n  results: search(request: $request) {\n    id\n    typeaheadSuggestion {\n      uuid\n      term\n      name\n      gaiaId\n      __typename\n    }\n    geography {\n      lbsId\n      location {\n        latitude\n        longitude\n        __typename\n      }\n      isGeocoded\n      shouldShowMapCentralPin\n      __typename\n    }\n    propertyRedirectUrl\n    ...DestinationBreadcrumbsSearchResult\n    ...DestinationMessageSearchResult\n    ...FilterCountsSearchResult\n    ...HitCollectionSearchResult\n    ...ADLSearchResult\n    ...MapSearchResult\n    ...ExpandedGroupsSearchResult\n    ...PagerSearchResult\n    ...SearchTermCarouselSearchResult\n    ...SeoContentSearchResult\n    ...InternalToolsSearchResult\n    ...SEOMetaDataParamsSearchResult\n    __typename\n  }\n  ...RequestMarkerFragment\n}\n\nfragment DestinationBreadcrumbsSearchResult on SearchResult {\n  destination {\n    breadcrumbs {\n      name\n      url\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment HitCollectionSearchResult on SearchResult {\n  page\n  pageSize\n  listings {\n    ...HitListing\n    __typename\n  }\n  pinnedListing {\n    listing {\n      availableForDates\n      ...HitListing\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment HitListing on Listing {\n  virtualTourBadge {\n    name\n    id\n    helpText\n    __typename\n  }\n  amenitiesBadges {\n    name\n    id\n    helpText\n    __typename\n  }\n  multiUnitProperty\n  imageCount\n  images {\n    altText\n    c6_uri\n    c9_uri\n    __typename\n  }\n  listingNamespace\n  ...HitInfoListing\n  __typename\n}\n\nfragment HitInfoListing on Listing {\n  ...DetailsListing\n  ...PriceListing\n  ...RatingListing\n  ...GeoDistanceListing\n  detailPageUrl\n  instantBookable\n  minStayRange {\n    minStayHigh\n    minStayLow\n    __typename\n  }\n  listingId\n  partnerBadges {\n    id\n    helpText\n    name\n    __typename\n  }\n  rankedBadges(rankingStrategy: SERP) {\n    id\n    helpText\n    name\n    __typename\n  }\n  propertyId\n  listingNumber\n  propertyType\n  propertyMetadata {\n    headline\n    propertyName\n    __typename\n  }\n  reviewBadges {\n    id\n    name\n    helpText\n    __typename\n  }\n  unitMessage(assetVersion: 1) {\n    iconText {\n      message\n      icon\n      messageValueType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment DetailsListing on Listing {\n  bathrooms {\n    full\n    half\n    toiletOnly\n    __typename\n  }\n  bedrooms\n  propertyType\n  sleeps\n  petsAllowed\n  spaces {\n    spacesSummary {\n      area {\n        areaValue\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PriceListing on Listing {\n  priceSummary: priceSummary {\n    edapEventJson\n    formattedAmount\n    pricePeriodDescription\n    __typename\n  }\n  priceSummarySecondary: priceSummary(summary: "displayPriceSecondary") {\n    edapEventJson\n    formattedAmount\n    pricePeriodDescription\n    __typename\n  }\n  __typename\n}\n\nfragment RatingListing on Listing {\n  averageRating\n  reviewCount\n  __typename\n}\n\nfragment GeoDistanceListing on Listing {\n  geoDistance {\n    text\n    __typename\n  }\n  __typename\n}\n\nfragment ExpandedGroupsSearchResult on SearchResult {\n  expandedGroups {\n    ...ExpandedGroupExpandedGroup\n    __typename\n  }\n  __typename\n}\n\nfragment ExpandedGroupExpandedGroup on ExpandedGroup {\n  listings {\n    ...HitListing\n    ...MapHitListing\n    __typename\n  }\n  mapViewport {\n    neLat\n    neLong\n    swLat\n    swLong\n    __typename\n  }\n  __typename\n}\n\nfragment MapHitListing on Listing {\n  ...HitListing\n  geoCode {\n    latitude\n    longitude\n    __typename\n  }\n  __typename\n}\n\nfragment FilterCountsSearchResult on SearchResult {\n  id\n  resultCount\n  filterGroups {\n    groupInfo {\n      name\n      id\n      __typename\n    }\n    filters {\n      count @skip(if: $isBot)\n      checked\n      filter {\n        id\n        name\n        refineByQueryArgument\n        description\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment MapSearchResult on SearchResult {\n  mapViewport {\n    neLat\n    neLong\n    swLat\n    swLong\n    __typename\n  }\n  page\n  pageSize\n  listings {\n    ...MapHitListing\n    __typename\n  }\n  pinnedListing {\n    listing {\n      ...MapHitListing\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment PagerSearchResult on SearchResult {\n  fromRecord\n  toRecord\n  pageSize\n  pageCount\n  page\n  resultCount\n  __typename\n}\n\nfragment DestinationMessageSearchResult on SearchResult {\n  destinationMessage(assetVersion: 2) {\n    iconTitleText {\n      title\n      message\n      icon\n      messageValueType\n      link {\n        linkText\n        linkHref\n        __typename\n      }\n      __typename\n    }\n    iconText {\n      message\n      icon\n      messageValueType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ADLSearchResult on SearchResult {\n  parsedParams {\n    q\n    coreFilters {\n      adults\n      children\n      pets\n      minBedrooms\n      maxBedrooms\n      minBathrooms\n      maxBathrooms\n      minPrice\n      maxPrice\n      minSleeps\n      __typename\n    }\n    dates {\n      arrivalDate\n      departureDate\n      __typename\n    }\n    sort\n    __typename\n  }\n  page\n  pageSize\n  pageCount\n  resultCount\n  fromRecord\n  toRecord\n  pinnedListing {\n    listing {\n      listingId\n      __typename\n    }\n    __typename\n  }\n  listings {\n    listingId\n    __typename\n  }\n  filterGroups {\n    filters {\n      checked\n      filter {\n        groupId\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  geography {\n    lbsId\n    name\n    description\n    location {\n      latitude\n      longitude\n      __typename\n    }\n    primaryGeoType\n    breadcrumbs {\n      name\n      countryCode\n      location {\n        latitude\n        longitude\n        __typename\n      }\n      primaryGeoType\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment RequestMarkerFragment on Query {\n  requestmarker\n  __typename\n}\n\nfragment SearchTermCarouselSearchResult on SearchResult {\n  discoveryXploreFeeds {\n    results {\n      id\n      title\n      items {\n        ... on SearchDiscoveryFeedItem {\n          type\n          imageHref\n          place {\n            uuid\n            name {\n              full\n              simple\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  typeaheadSuggestion {\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment SeoContentSearchResult on SearchResult {\n  topRecentReviews @skip(if: $gtsQuery) {\n    ...SearchReviewsTopRecentReviewSummary\n    __typename\n  }\n  __typename\n}\n\nfragment SearchReviewsTopRecentReviewSummary on TopRecentReviewSummary {\n  listingDetails {\n    listingId\n    thumbnailUrl\n    detailPageUrl\n    __typename\n  }\n  review {\n    title\n    text\n    createdAt\n    arrivalDate\n    rating\n    __typename\n  }\n  __typename\n}\n\nfragment InternalToolsSearchResult on SearchResult {\n  internalTools {\n    searchServiceUrl\n    __typename\n  }\n  __typename\n}\n\nfragment SEOMetaDataParamsSearchResult on SearchResult {\n  page\n  resultCount\n  pageSize\n  geography {\n    name\n    lbsId\n    breadcrumbs {\n      name\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n'
};
