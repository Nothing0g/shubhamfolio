import { describe, expect, it } from 'vitest'
import { cases } from './work/cases'

describe('case study content', () => {
  it('contains three unique, routable case studies', () => {
    expect(cases).toHaveLength(3)
    expect(new Set(cases.map((item) => item.slug)).size).toBe(3)
    expect(cases.every((item) => item.slug.length > 5 && item.sections.length >= 4)).toBe(true)
  })
})
