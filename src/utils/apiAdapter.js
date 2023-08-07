import { truncateStr } from './index'

/**
 * @param {import('../types/ICharacter').ICharacter | null | undefined} char
 */
export const transformCharacter = (char, imageVariant, isFullDescription = true) => {
  if (!char) return

  const { id, name, description, thumbnail, urls, comics } = char
  const formattedDescription = isFullDescription ? description : truncateStr(description, 180)

  return {
    id,
    name,
    description: formattedDescription || 'No Description',
    thumbnail: thumbnail?.path + imageVariant + `.${thumbnail?.extension}`,
    externalLinks: urls,
    comics,
  }
}

/**
 * @param {import('../types/IComic').IComic | null | undefined} comic
 */
export const transformComic = (comic, imageVariant) => {
  if (!comic) return

  const { id, title, thumbnail, dates, prices } = comic

  return {
    id,
    title,
    thumbnail: thumbnail?.path + imageVariant + `.${thumbnail?.extension}`,
    onsaleDate: dates?.find(elem => elem.type === 'onsaleDate')?.date ?? 'No OnSale Date',
    price: prices?.find(elem => elem.type === 'printPrice')?.price || 'Not Available',
  }
}
