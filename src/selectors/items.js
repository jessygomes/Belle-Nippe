/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} shop - toutes les items
 * @param {string} searchedSlug - le slug de la l'item recherchée
 * @return {Object} - L'item trouvée
 */

export function findItem(shop, searchedSlug) {
    const item = shop.find((testedItem) => {
      return testedItem.slug === searchedSlug;
    });
    return item;
}