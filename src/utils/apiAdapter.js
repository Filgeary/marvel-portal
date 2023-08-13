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

  const { id, title, thumbnail, description, dates, prices, creators } = comic

  const date = dates?.find(elem => elem.type === 'onsaleDate')?.date
  const onsaleDate = date
    ? new Date(date).toLocaleString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'No OnSale Date'

  const price = prices?.find(elem => elem.type === 'printPrice')?.price
  const printPrice = price ? `$${price}` : 'Not Available'
  const creatorWriter = creators?.items?.find(creator => creator.role === 'writer')?.name
  const creatorInker = creators?.items?.find(creator => creator.role === 'inker')?.name
  const creatorPenciler = creators?.items?.find(creator => creator.role === 'penciler')?.name
  const creatorColorist = creators?.items?.find(creator => creator.role === 'colorist')?.name

  return {
    id,
    title,
    description: description || 'No Description',
    thumbnail: thumbnail?.path + imageVariant + `.${thumbnail?.extension}`,
    onsaleDate,
    printPrice,
    creatorWriter,
    creatorInker,
    creatorPenciler,
    creatorColorist,
    allCreators: creators,
  }
}
