//src/utils/imagePhase1.js

import sharp from 'sharp'

// Check if image has a landscape orientation
export function isLandscape(metadata) {
  return metadata.width > metadata.height
}

// Check if image has a portrait orientation
export function isPortrait(metadata) {
  return metadata.height > metadata.width
}

// Validate if the image is a banner based on specific size and aspect ratio
export function isBannerValid(metadata) {
  const { width, height, format } = metadata
  const aspectRatio = width / height
  return format === 'jpeg' && width >= 1200 && height >= 400 && aspectRatio >= 3
}

// Standardize image sizes (thumbnail, small, medium, large)
export async function standardizeSizes(buffer) {
  return {
    thumb: await sharp(buffer).resize(100, 100).toBuffer(),
    small: await sharp(buffer).resize(300, 200).toBuffer(),
    medium: await sharp(buffer).resize(600, 400).toBuffer(),
    large: await sharp(buffer).resize(1200, 800).toBuffer(),
  }
}
