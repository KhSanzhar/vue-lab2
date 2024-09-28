import { categories } from '@/models/categories'
import type { Category } from '@/models/categories'

export const useCategories = (): Category[] => {
  return categories;
}
